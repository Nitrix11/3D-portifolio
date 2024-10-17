import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const CarModel = () => {
  const { scene } = useGLTF('/path/to/your/bmw-car-model.glb'); // Replace with your model path
  return <primitive object={scene} />;
};

const Car3D = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <CarModel />
      <OrbitControls />
    </Canvas>
  );
};

export default Car3D;