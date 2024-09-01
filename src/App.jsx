import { Canvas } from '@react-three/fiber';
import React from 'react'
import "./style.css"
import asusContainer from "./asusContainer";

const App = () => {
  return ( 
  <Canvas>
     <asusContainer></asusContainer>
  </Canvas>
  )
}

export default App;
