/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Headband = () => {
    return (
      <div className="w-4/5">
        <div className="relative  bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3bf686] to-[#24351b]">
          <img
            src="/profileBanner.jpeg"
            alt="profile-banner"
            className="object-cover h-48 w-full"
          />
          <div className="flex absolute left-4 top-28 ">
            <img
              src="/profilePic.jpeg"
              alt="profile-image"
              className="border rounded-full w-40 h-40  bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <div className="text-4xl mt-16 ml-2 ">
              <p className="py-5">Sarah</p>
              <p> Mother, woman and builder</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Headband;
