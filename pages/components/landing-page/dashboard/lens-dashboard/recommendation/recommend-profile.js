/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useSelector } from 'react-redux';
import { ipfsUrl } from '../../../../../../utils/ipfs-url';

const RecommendProfile = () => {
    const profiles = useSelector(
      (state) => state?.reducer?.trendingProfilesSlice
    ?.exploreProfiles?.items);
    console.log(profiles);
    return (
      <div >
        {profiles && profiles.slice(0,5).map((profs) => {
            const profileImage = ipfsUrl(profs?.picture?.original?.url);
          return (
            <div key={profs.id} className=" flex border mt-2 rounded-lg border-white">
                <div className='basis-1/3'>
              <img
                src={profileImage}
                className="border rounded-full w-20 h-20  bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                al
              />
              </div>
              <div className='basis-2/3'>
              <p>{profs.name}</p>
              <p>{profs.bio.substring(0,100)}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default RecommendProfile;
