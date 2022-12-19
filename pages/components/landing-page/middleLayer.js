import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { LayerMaterial, Base, Depth, Fresnel } from "lamina";
const MiddleLayers = () => {
    const props = {
      base:  "#ff4eb8" ,
      colorA: "#00ffff" ,
      colorB: "#ff8f00" ,
    };
  return (
    <div className="h-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, -0.75, 0.75], fov: 80, near: 0.001 }}
      >
        <Flower {...props} />
        <mesh>
          <sphereGeometry args={[0.2, 64, 64]} />
          <meshPhysicalMaterial
            depthWrite={false}
            transmission={1}
            thickness={10}
            roughness={0.65}
          />
        </mesh>
        <OrbitControls />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} color={props.colorA} />
        <ambientLight intensity={0.4} />
        <Environment preset="warehouse" />
      </Canvas>
    </div>
  );
};
function Bg({ base, colorA, colorB }) {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x =
      mesh.current.rotation.y =
      mesh.current.rotation.z +=
        delta;
  });
  return (
    <mesh ref={mesh} scale={100}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial attach="material" side={THREE.BackSide}>
        <Base color={base} alpha={1} mode="normal" />
        <Depth
          colorA={colorB}
          colorB={colorA}
          alpha={0.5}
          mode="normal"
          near={0}
          far={300}
          origin={[100, 100, 100]}
        />
      </LayerMaterial>
    </mesh>
  );
}

function Flower({ base, colorA, colorB }) {
  const mesh = useRef();
  const depth = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.z += delta / 2;
    depth.current.origin.set(-state.mouse.y, state.mouse.x, 0);
  });
  return (
    <mesh rotation-y={Math.PI / 2} scale={[2, 2, 2]} ref={mesh}>
      <torusKnotGeometry args={[0.4, 0.05, 400, 32, 3, 7]} />
      <LayerMaterial>
        <Base color={base} alpha={1} mode="normal" />
        <Depth
          colorA={colorB}
          colorB={colorA}
          alpha={0.5}
          mode="normal"
          near={0}
          far={3}
          origin={[1, 1, 1]}
        />
        <Depth
          ref={depth}
          colorA={colorB}
          colorB="black"
          alpha={1}
          mode="lighten"
          near={0.25}
          far={2}
          origin={[1, 0, 0]}
        />
        <Fresnel
          mode="softlight"
          color="white"
          intensity={0.3}
          power={2}
          bias={0}
        />
      </LayerMaterial>
    </mesh>
  );
}
export default MiddleLayers;
