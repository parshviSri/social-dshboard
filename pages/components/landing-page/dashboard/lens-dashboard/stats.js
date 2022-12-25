import React from 'react';
import { useSelector } from 'react-redux';
const Stats = () => {
   const user = useSelector((st) => st?.reducer?.profileSlice?.userProfile);
    return (
      <div>
        <div className="flex flex-wrap mt-10">
          <div className="relative flex w-2/5 h-1/3 ml-4">
            <div className="rounded-xl w-full bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080]">
              <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
                <p className="text-4xl">Total Publications</p>
                <p className=" text-4xl mt-4">{user.totalPublications}</p>
              </div>
            </div>
          </div>
          <div className="relative flex w-1/3 h-1/3 mx-auto ml-4">
            <div className="rounded-xl w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[5px]">
              <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
                <p className="text-4xl">Total Followers</p>
                <p className=" text-4xl mt-4">{user.totalFollowers}</p>
              </div>
            </div>
          </div>
          <div className="relative flex w-2/5 h-1/3  mt-10 ml-4">
            <div className="rounded-xl w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[5px]">
              <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
                <p className="text-4xl">Total Followings</p>
                <p className=" text-4xl mt-4">{user.totalFollowing}</p>
              </div>
            </div>
          </div>
          <div className="relative flex w-1/3 h-1/3  mt-10 ml-4">
            <div className="rounded-xl w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[5px]">
              <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
                <p className="text-4xl">Total Mirrors</p>
                <p className=" text-4xl mt-4">{user.totalMirrors}</p>
              </div>
            </div>
          </div>
          <div className="relative flex w-2/5 h-1/3  mt-10 ml-4">
            <div className="rounded-xl w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[5px]">
              <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
                <p className="text-4xl">Total Collects</p>
                <p className=" text-4xl mt-4">{user.totalCollects}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Stats;
