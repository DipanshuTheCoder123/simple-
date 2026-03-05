import React from 'react';
import { NotificationManager } from 'react-notifications';

function Application() {

  const showNotification = () => {
    NotificationManager.success(
      "Notification message",
      "Success!",
      3000
    );
  };

  return (
    <div>
      <button onClick={showNotification}>
        Click Me
      </button>
    </div>
  );
}

export default Application;