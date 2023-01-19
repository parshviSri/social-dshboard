import React from 'react';
import TopElement from './top';

const Introduction = () => {
    return (
      <div className="flex text-center font-mono h-screen">
        <div className="basis-1/2 ">
          <p className="text-7xl ">Social Dashboard</p>
          <p className="text-4xl p-6">
            One place for all the social media handles.
          </p>
        </div>
        <div className="basis-1/2 h-5/6">
          <TopElement/>
        </div>
      </div>
    );
}

export default Introduction;
