/* eslint-disable @next/next/no-img-element */
import React from 'react';
 const Headband = (props) => {
  const {cover,profile,name,bio} = props;
    return (
      <div className="w-4/5">
        <div className="relative  bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3bf686] to-[#24351b]">
          <img
            src={cover}
            alt="profile-banner"
            className="object-cover h-48 w-full"
          />
          <div className="flex absolute left-4 top-28 ">
            <img
              src={profile}
              alt="profile-image"
              className="border rounded-full w-40 h-40  bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <div className="text-4xl mt-16 ml-2 ">
              <p className="py-5 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
                {name}
              </p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-800 to-pink-500">
                {bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Headband;