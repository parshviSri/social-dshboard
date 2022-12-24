import React from 'react';
import Headband from './headband';
import Profile from './profile';

const LensDashboard = () => {
    return (
      <div className="backdrop-blur-lg fixed top-[10%] left-[10%] w-full h-full">
        <Headband />
        <Profile/>
      </div>
    );
}

export default LensDashboard;
