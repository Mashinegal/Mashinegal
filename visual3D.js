import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Visual3D = () => {
  return (
    <Canvas style={{ height: '300px', width: '300px' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      {/* A simple 3D cube */}
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#6200ea" />
      </mesh>

      {/* Optional controls to rotate the camera */}
      <OrbitControls />
    </Canvas>
  );
};

export default Visual3D;
