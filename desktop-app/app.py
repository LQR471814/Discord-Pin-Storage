
#* TO BUILD USE: py -m eel --noconsole --onefile --icon=icon.ico app.py public

import eel
import getCode
import threading
import requests
import sys

authServerThread = threading.Thread(target=getCode.main)
authServerThread.start()

eel.init('public')

@eel.expose
def handle_exit(ar1, ar2):
   print("Quitting...")
   requests.post("http://localhost:9000/shutdown")
   sys.exit(0)
 
if __name__ == "__main__":
   eel.start('index.html', port=3000, host="localhost", close_callback=handle_exit, mode="chrome")