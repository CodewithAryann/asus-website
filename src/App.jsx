import { Canvas } from '@react-three/fiber';
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei';
import asusContainer from "./asusContainer";

const App = () => {
  return ( 
  <Canvas>
    <OrbitControls/>
      <boxGeometry></boxGeometry>
     <asusContainer></asusContainer>
  </Canvas>
  )
}

export default App;
