// app <- Main Process of Electron
const {app, BrowserWindow, ipcMain, Notification} = require('electron');
const path = require('path');
const appInDevelopmentMode = !app.isPackaged;

// Function to create a new window
const createWindow = () => {
    // Browser Window <- new Render Process of Electron (Sub Process of Main)
    const browserWindow = new BrowserWindow({
        width: 1900,
        height: 1200,
        backgroundColor: "white",
        webPreferences: {
            // Allows us to use node modules (not really safe) We´ll learn other ways to have node modules in the render process (therefore should be set to false)
            nodeIntegration: false,
            // Feature that ensures that preload scripts and Electrons intern logic run in separate context (for security reasons)
            //contextIsolation: true, <-- true per default
            // Let us use the preload file, which is needed to safely use nodeIntegrations
            preload: path.join(__dirname, 'preload.js'),
        }
    });

    // Load a file to the current browserWindow (here: the index file)
    browserWindow.loadFile("./index.html");
    // If in development the app should automatically open the dev tools (console)
    appInDevelopmentMode && browserWindow.webContents.openDevTools();
}

if (appInDevelopmentMode) {
    // Use electorn-reload when in develop mode. Electorn-reload requires the path and electron.
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

// call the createWindow method, when the main process is ready to display something
app.whenReady().then(createWindow);

// react on notify events emitted by ipcRenderer with ipcMain, usually with (event, ...params)
ipcMain.on('notify', (_,title, message) => {
    // creates a notification and sends it using show()
    new Notification({title: title, body: message}).show();
})

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