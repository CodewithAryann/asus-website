import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AsusContainer = () => {
  const model = useGLTF("./asus_rog.glb"); 
  const meshes = useRef({}); // Use a ref to store mesh references

  useEffect(() => {
    model.scene.traverse((e) => {
      meshes.current[e.name] = e; // Populate meshes ref with model parts
    });

    if (meshes.current.Monitor_7) {
      meshes.current.Monitor_7.rotation.x = THREE.MathUtils.degToRad(90); // Initial rotation
    }
  }, [model]);

  const data = useScroll();

  useFrame(() => {
    if (meshes.current.Monitor_7) {
      meshes.current.Monitor_7.rotation.x = THREE.MathUtils.degToRad(90 - data.offset * 90); // Animate rotation based on scroll
    }
  });

  return (
    <group scale={[30, 30, 30]} position={[0, -70, 0]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default AsusContainer;
