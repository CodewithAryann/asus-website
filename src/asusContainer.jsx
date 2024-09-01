import { useGLTF } from '@react-three/drei';
import React from 'react';

const asusContainer = () => {
  let model = useGLTF("./asus_rog.glb");
  return <primitive object={model.scene}/>;
  
}

export default asusContainer
