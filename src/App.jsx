import { Canvas } from '@react-three/fiber';
import React from 'react';
import "./style.css";
import AsusContainer from "./asusContainer"; 
import { Environment, OrbitControls } from '@react-three/drei';

const App = () => {
  return ( 
    <div className="canvas-container">
    <Canvas camera={{ fov : 4, position : [0, 2, 120]}} > 
      <OrbitControls></OrbitControls>
      <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr"]}/>
      <AsusContainer /> 
    </Canvas>
    </div>
  );
}

export default App;
