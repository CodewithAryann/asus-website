import { useGLTF } from '@react-three/drei';
import React from 'react';

const AsusContainer = () => {
  let model = useGLTF("./mac.glb");
  
  return (
    <group position={[0, -1, 120]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default AsusContainer;
