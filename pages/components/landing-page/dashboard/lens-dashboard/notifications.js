import React from 'react';
import NotificationCard from './notification-card';

const Notifications = () => {
    return (
      <div>
        <p className="text-5xl text-center">Notifications</p>
        <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px]"></p>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    );
}

export default Notifications;
