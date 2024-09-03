import { Canvas } from '@react-three/fiber';
import React from 'react';
import "./style.css";
import AsusContainer from "./asusContainer"; 
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';

const App = () => {
  
  return ( 
    <div className="canvas-container w-full h-screen">
      <div className='text-white absolute top-32 left-1/2 -translate-x-1/2'>
      <h1>AUSU Laptop</h1>
      </div>
      <Canvas camera={{ fov: 50, position: [0, 2, 120] }} style={{height: "565px"}}> 
        <OrbitControls enableZoom={false}  />
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr" />
        <ScrollControls pages={3}>
           <AsusContainer /> 
           </ScrollControls>
       
      </Canvas>
    </div>
  );
}

export default App;
