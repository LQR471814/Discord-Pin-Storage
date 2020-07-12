import eel
import getCode
import threading
import sys

def onBlock():
    sys.exit(0)

authServerThread = threading.Thread(target=getCode.main)
authServerThread.start()

eel.init('public')
eel.start('index.html', size=(1280, 768), port=3000, host="localhost", close_callback=onBlock)