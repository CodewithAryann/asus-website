import { useGLTF } from '@react-three/drei';
import React from 'react';

const AsusContainer = () => {
  let model = useGLTF("./asus_rog.glb"); // Ensure the file path is correct

  return (
    <group scale={[30, 30, 30]} position={[0, -70, 0]}> {/* Adjust the position */}
      <primitive object={model.scene} />
    </group>
  );
};

export default AsusContainer;
