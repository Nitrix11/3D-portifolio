// Car.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { RingGeometry } from 'three';

const Car = () => {
  return (
    <>
  
  <mesh>


  
      {/* Car Body */}
      <boxGeometry args={[1.5, 0.5, 1.5]} />
      <meshStandardMaterial color="blue" />

      {/* Wheels */}
      <mesh position={[-0.5, -1.9, 0.25]}>
        <cylinderGeometry args={[0.2, 0.2, 4.1, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.5, -1.9, 0.25]}>
        <cylinderGeometry args={[0.2, .2, 4.1, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-0.5, -1.9, -0.25]}>
        <cylinderGeometry args={[0.2, 0.2, 4.1, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.5, -1.9, -0.25]}>
        <cylinderGeometry args={[0.2, 0.2, 4.1, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      </mesh>
      
    </>
  );
};

const Apps = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight />
      <pointLight position={[15, 15, 15]} />
      <Car />
      <OrbitControls />
    </Canvas>
  );
};

export default Apps;