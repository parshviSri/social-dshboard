import React from 'react';
import Notifications from './notifications';
import Stats from './stats';
const Profile = () => {
    return (
      <div className="mt-24 flex justify-center">
        <div className="basis-1/3">
          <Stats />
        </div>
        <div className="basis-1/3">
          <Notifications />
        </div>
        <div className="basis-1/3">
        </div>
      </div>
    );
}

export default Profile;
