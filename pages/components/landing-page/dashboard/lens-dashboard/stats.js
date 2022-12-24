import React from 'react';

const Stats = () => {
    return (
      <div className="flex flex-row">
        <div className="relative flex w-1/3 h-1/3 mx-auto mt-10">
          <div className="rounded-xl w-full bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080]">
            <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
              <p className="text-4xl">Total Publications</p>
              <p className=" text-4xl mt-4">45</p>
            </div>
          </div>
        </div>
        <div className="relative flex w-1/3 h-1/3 mx-auto mt-10 ml-4">
          <div className="rounded-xl w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[5px]">
            <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
              <p className="text-4xl">Total Followers</p>
              <p className=" text-4xl mt-4">45</p>
            </div>
          </div>
        </div>
        <div className="relative flex w-1/3 h-1/3  mt-10 ml-4">
          <div className="rounded-xl w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[5px]">
            <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
              <p className="text-4xl">Total Followings</p>
              <p className=" text-4xl mt-4">45</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Stats;
