// contextBridge is for bridging information (context) between main and renderer process
const { contextBridge, ipcRenderer } = require('electron');

// Adds a new "API" (here: called notificationApi)
// contextBridge.exposeInMainWorld('notificationApi', {
//     // Method that can be used in the notificationApi context
//     sendNotification(title, body) {
//         // Emits an event in the notify channel
//         ipcRenderer.send('notify', title, body);
//     }
// });

// Apis can also be defined in each other
contextBridge.exposeInMainWorld('electron', {
    notificationApi: {
        sendNotification(title, body) {
            ipcRenderer.send('notify', title, body);
        }
    }
    // fileApi: {}
})
// will be accessed with electron.notificationApi.sendNotification()