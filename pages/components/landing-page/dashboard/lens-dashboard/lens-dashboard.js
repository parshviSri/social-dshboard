import React from 'react';

import Headband from './headband';
import Profile from './profile';
import{ipfsUrl} from '../../../../../utils/ipfs-url';
import {useSelector} from 'react-redux';
 const LensDashboard = (props) => {
    const user = useSelector((st) => st?.reducer?.profileSlice?.userProfile);
  const coverurl = ipfsUrl(user?.coverPicture?.original?.url);
  const profileurl = ipfsUrl(user?.picture);
  const name = user?.name;
  const bio = user?.bio;

  
    return (
      <div className="w-full h-full">
        <div className='m-2'>
          <Headband
            cover={coverurl}
            profile={profileurl}
            name={name}
            bio={bio}
          />
        </div>
        <div className='mt-8'>
          <Profile />
        </div>
      </div>
    );
}
export default LensDashboard;

