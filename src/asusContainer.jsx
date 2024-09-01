import { useGLTF } from '@react-three/drei'
import React from 'react'

const asusContainer = () => {
  useGLTF()
  return (
       <mesh>
        <boxGeometry></boxGeometry>
       </mesh>
  )
}

export default asusContainer
