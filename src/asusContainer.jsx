import { useGLTF } from '@react-three/drei';
import React from 'react';

const AsusContainer = () => {
  let model = useGLTF("./asus_rog.glb");
  return <primitive style={{}} object={model.scene}/>;  
};


export default AsusContainer;

