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

messages = open("messages.json", "r").read()
userData = open(f"{ABSDIR}/userdata/users.json", "w+")
try:
    currentUserData = json.loads(userData.read())
except:
    currentUserData = {}

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

async def serverProcess(websocket, path):
    global userData
    global currentUserData

    while True:
        try:
            userMessage = json.loads(await websocket.recv())

            if userMessage["type"] == "api_token":
                authHeaders = {
                    "Authorization": "Bearer %s" % userMessage["content"]
                }

                response = session.get("https://discord.com/api/users/@me", headers=authHeaders)
                response.raise_for_status()

                user = json.loads(response.content.decode("utf8"))

                if int(user["id"]) in whitelist:
                    await websocket.send(json.dumps({"type": "auth", "content": "true"}))
                    await websocket.send(json.dumps({"type": "messageData", "content": messages}))
                else:
                    await websocket.send(json.dumps({"type": "auth", "content": "false"}))
                
                # pfpURL = f"https://cdn.discordapp.com/avatars/{user['id']}/{user['avatar']}.png?size=128"
        except:
            pass

print("Starting server! Use [CTRL] + [C] to stop!")

try:
    start_server = websockets.serve(serverProcess, IP, 4000)
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
except KeyboardInterrupt:
    sys.exit(0)
