import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const AsusContainer = () => {
  const model = useGLTF("./asus_rog.glb"); 
  const meshes = useRef({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Populate the mesh references
    model.scene.traverse((e) => {
      meshes.current[e.name] = e;
    });

    // Set initial rotation for Monitor_7
    if (meshes.current.Monitor_7) {
      meshes.current.Monitor_7.rotation.x = THREE.MathUtils.degToRad(90);
    }

    // Add event listener for window scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [model]);

  useFrame(() => {
    if (meshes.current.Monitor_7) {
      // Calculate rotation based on window scroll position
      const scrollPercentage = scrollY / (document.body.scrollHeight - window.innerHeight);
      meshes.current.Monitor_7.rotation.x = THREE.MathUtils.degToRad(90 - scrollPercentage * 90);
    }
  });

  return (
    <group scale={[25, 25, 25]} position={[0, -90, 0]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default AsusContainer;
