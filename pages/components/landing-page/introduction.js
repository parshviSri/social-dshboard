import React from 'react';
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import Level from "./level1/Level";
import Sudo from "./level1//Sudo";
import Camera from "./level1/Camera";
import Cactus from "./level1/Cactus";
import Icon from "./level1/Icon";
import Pyramid from "./level1/Pyramid";
const Introduction = () => {
    return (
      <div className="flex text-center font-mono h-screen">
        <div className="basis-1/2 grid grid-cols-1 gap-4 content-center ">
          <p className="text-7xl ">Social Dashboard</p>
          <p className="text-4xl p-6">
            One place for all the social media handles.
          </p>
        </div>
        <div className="basis-1/2">
          <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
            <ambientLight />
            <PresentationControls
              global
              zoom={0.8}
              rotation={[0, -Math.PI / 4, 0]}
              polar={[0, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <group position-y={-0.75} dispose={null}>
                <Level />
                <Sudo />
                <Camera />
                <Cactus />
                <Icon />
                <Pyramid />
              </group>
            </PresentationControls>
          </Canvas>
        </div>
      </div>
    );
}

export default Introduction;
