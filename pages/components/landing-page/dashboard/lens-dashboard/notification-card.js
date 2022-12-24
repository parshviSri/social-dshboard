/* eslint-disable @next/next/no-img-element */
import React from 'react';

const NotificationCard = () => {
    return (
      <div>
        <div className="m-2 border rounded flex">
          <img
            src='/profilePic.jpeg'
            className="border rounded-full w-24 h-24 "
            alt="notification-profile-pic"
          />
          <p className="text-3xl m-3">
            Parshvi 
             started following you
          </p>
        </div>
      </div>
    );
}

export default NotificationCard;
