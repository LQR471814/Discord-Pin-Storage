import asyncio
import websockets
import socket
import requests
from requests import Session
import json

API_ENDPOINT = 'https://discord.com/api'

# whitelist = [337768051799883776]
whitelist = []

connectedUsers = []

messages = open("messages.json", "r").read()

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

IP = get_ip()
session = Session()

async def processAPIToken(websocket, path):
    global messages

    while True:
        apiToken = json.loads(await websocket.recv())

        print(apiToken)

        authHeaders = {
            "Authorization": "Bearer %s" % apiToken["content"]
        }

        response = session.get("https://discord.com/api/users/@me", headers=authHeaders)
        try:
            response.raise_for_status()
        except Exception as err:
            print(err)
            break

        userData = json.loads(response.content.decode("utf8"))

        if int(userData["id"]) in whitelist:
            connectedUsers.append(userData)
            await websocket.send(json.dumps({"type": "auth", "content": "true"}))
        else:
            await websocket.send(json.dumps({"type": "auth", "content": "false"}))
        
        await websocket.send(messages)
        
print("Starting server!")

start_server = websockets.serve(processAPIToken, IP, 4000)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
