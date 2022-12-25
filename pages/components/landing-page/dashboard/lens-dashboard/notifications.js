import React from 'react';
import NotificationCard from './notification-card';
import { useSelector } from 'react-redux';
const Notifications = () => {
  const notifications = useSelector(st => st.reducer?.notificationsSlice?.result);

  const  items  = notifications?.items;
    return (
      <div>
        <p className="text-5xl text-center">Notifications</p>
        <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px]"></p>
        <div>
          {items && items.map((notify) => (
            <NotificationCard
              key={notify.notificationId}
              notifications={notify}
            />
          ))}
        </div>
      </div>
    );
}

export default Notifications;
