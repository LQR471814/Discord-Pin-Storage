import asyncio
import base64
import json
import os
import socket
import sys
import time
import uuid

import requests
import websockets
from requests import Session

API_ENDPOINT = 'https://discord.com/api'

whitelist = [337768051799883776]
# whitelist = []

ABSDIR = os.path.dirname(os.path.realpath(__file__))

connected = set()

messages = open("messages.json", "r+")
try:
    currentMessages = json.loads(messages.read())
except:
    currentMessages = {"messages": []}

def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # doesn't even have to be reachable
        s.connect(('10.255.255.255', 1))
        IP = s.getsockname()[0]
    except Exception:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

def getUserFromToken(token):
    authHeaders = {
        "Authorization": "Bearer %s" % token
    }

    response = session.get("https://discord.com/api/users/@me", headers=authHeaders)
    response.raise_for_status()
    return response
    
IP = get_ip()
session = Session()

async def serverProcess(websocket, path):
    global messages
    global connected

    connected.add(websocket)
    
    while True:
        try:
            userMessage = json.loads(await websocket.recv())

            if userMessage["type"] == "apiToken":
                response = getUserFromToken(userMessage["content"])

                user = json.loads(response.content.decode("utf8"))

                if int(user["id"]) in whitelist:
                    await websocket.send(json.dumps({"type": "auth", "content": "true"}))
                    await websocket.send(json.dumps({"type": "messageData", "content": json.dumps(currentMessages)}))
                else:
                    await websocket.send(json.dumps({"type": "auth", "content": "false"}))
            elif userMessage["type"] == "addMessage":
                response = getUserFromToken(userMessage["apiToken"])

                user = json.loads(response.content.decode("utf8"))

                if int(user["id"]) in whitelist:
                    currentMessages["messages"].append(
                        {
                            "value": userMessage["value"],
                            "id": str(uuid.uuid1()),
                            "author": {
                                "name": userMessage["author"]["name"],
                                "pfp": userMessage["author"]["pfp"]
                            },
                            "date": {
                                "month": userMessage["date"]["month"],
                                "day": userMessage["date"]["day"],
                                "year": userMessage["date"]["year"],
                                "hour": userMessage["date"]["hour"],
                                "minute": userMessage["date"]["minute"],
                                "timeOfDay": userMessage["date"]["timeOfDay"]
                            }
                        }
                    )
                    messages.seek(0)
                    messages.write(json.dumps(currentMessages))
                    
                    for client in connected:
                        await client.send(json.dumps({"type": "refreshMessages", "messages": currentMessages}))
                else:
                    await websocket.send(json.dumps({"type": "auth", "content": "false"}))
            elif userMessage["type"] == "removeMessage":
                response = getUserFromToken(userMessage["apiToken"])

                user = json.loads(response.content.decode("utf8"))

                if int(user["id"]) in whitelist:
                    pass
        except Exception as err:
            connected.remove(websocket)
            return

print("Starting server! Use [CTRL] + [C] to stop!")

try:
    start_server = websockets.serve(serverProcess, IP, 4000)
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
except KeyboardInterrupt:
    messages.close()
    sys.exit(0)
