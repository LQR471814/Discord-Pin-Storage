# Discord-Pin-Storage

React + Redux + Flask + Eel Application that stores discord pins BBS style.

#### Note: MacOSX and Linux currently unsupported.

## The Way It Works

A python server will be hosted at a certain address (Ex. "www.randomwebsite.com") and clients will be able to connect, read, create and delete messages on it if they are on the whitelist. 

The whitelist will contain discord user ids that the client will get upon authorizing with discord api and send to the server for verification.

Upon finding that the given user id is in the whitelist the server will authorize the client and send message data over.

## Setup

### If you're trying to connect to a server

1. Make sure you know the url the server is hosting on (Your url should look something like "www.randomwebsite.com:4000")

2. Make sure you're on the whitelist. If you're not, then ask the server administrator to add your user id.

#### Note: To get user id (Doesn't work on mobile)

1. Go to Settings > Appearance and enable ```Developer Mode```

2. Go to a random discord server, then right click yourself in the member list and click ```Copy ID```

3. Your User ID is now copied to your keyboard!

### If you're running a server

1. Run ```server.exe``` once and it will generate a file called ```whitelist.json```, then populate the whitelist array with user ids

2. Run ```server.exe``` again and it should start hosting the server on ```{YOUR PRIVATE IPV4 ADDRESS}``` and port 4000

## Building

### Windows

Navigate to `desktop-app/`

Install `eel` python package

Run `py -m eel app.py public --noconsole --onefile`

### MacOSX

Navigate to `desktop-app/`

Install `eel` python package

Run ```python3 -m eel app.py public --onefile --noconsole --exclude-module='FixTk' --exclude-module='tcl' --exclude-module='tk' --exclude-module='_tkinter' --exclude-module='tkinter' --exclude-module='Tkinter'```
