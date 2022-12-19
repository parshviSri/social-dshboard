import React from 'react';
import MiddleLayers from './middleLayer';

const CenterEle = () => {
    return (
      <div className="flex text-center font-mono h-screen">
        <div className="basis-1/2 grid grid-cols-1 gap-4 content-center ">
          <p className="text-7xl ">UNLOCK YOUR DIGITAL LIFE</p>
          <p className="text-4xl p-6">With single platform </p>
        </div>
        <div className="basis-1/2 h-full">
         <MiddleLayers/>
        </div>
      </div>
    );
}



export default CenterEle;
