import { Canvas } from '@react-three/fiber';
import React from 'react'
import "./style.css"

const App = () => {
  return ( 
  <Canvas>
    <mesh>
      <boxGeometry></boxGeometry>
    </mesh>
  </Canvas>
  )
}

export default App;
