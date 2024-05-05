import React from "react";

function App() {
    const title = "Hello World!";
    const enhancedTitle = title + ' - React App';

    const sendNotification = () => {
        electron.notificationApi.sendNotification('New message', 'My custom message');
    }

    return (
        <>
            <h1>{enhancedTitle}</h1>
            <button onClick={sendNotification}>Send Notification</button>
        </>
    );
}

export default App;