import { Canvas } from '@react-three/fiber';
import React from 'react';
import "./style.css";
import AsusContainer from "./asusContainer"; 
import { OrbitControls } from '@react-three/drei';

const App = () => {
  return ( 
    <div className="canvas-container">
    <Canvas camera={{ fov : 10, position : [10, -2, 120]}} > 
      <OrbitControls></OrbitControls>
      <AsusContainer /> 
    </Canvas>
    </div>
  );
}

export default App;
