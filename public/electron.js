const { app, BrowserWindow } = require('electron')

function createWindow () {
    // Create the browser window.
    const win = new BrowserWindow({
    width: 1300,
    height: 720,
    webPreferences: {nodeIntegration: true}
    })

    // win.setMenu(null)

    // require('http').createServer(function (request, response) {
    //     request.addListener('end', function () {
    //         file.serve(request, response)
    //     }).resume()
    // }).listen(3000)

    win.loadURL("http://localhost:3000")

    // win.loadURL(startURL);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
    app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
    }
})

