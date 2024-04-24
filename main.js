// app <- Main Process of Electron
const {app, BrowserWindow, Notification} = require('electron');

// Function to create a new window
const createWindow = () => {
    // Browser Window <- new Render Process of Electron (Sub Process of Main)
    const browserWindow = new BrowserWindow({
        width: 1900,
        height: 1200,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load a file to the current browserWindow (here: the index file)
    browserWindow.loadFile("./index.html");
    browserWindow.webContents.openDevTools();
}

// call the createWindow method, when the main process is ready to display something
app.whenReady()
    .then(() => {
        createWindow();
        const notification = new Notification({title: 'Hello World', body: 'My test notification'});
        notification.show();
    });

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})