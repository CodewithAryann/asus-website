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
      // Calculate scroll percentage based on the parent div's position
      const parent = document.querySelector('.parent');
      const parentTop = parent.offsetTop;
      const parentHeight = parent.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll percentage relative to the parent div
      const scrollPercentage = Math.min(
        Math.max((scrollY - parentTop) / (parentHeight - windowHeight), 0),
        1
      );

      // Smoothly interpolate the rotation using easing function
      const targetRotation = THREE.MathUtils.degToRad(90 - scrollPercentage * 90);
      const currentRotation = meshes.current.Monitor_7.rotation.x;
      
      // Apply easing to the rotation interpolation
      const smoothFactor = 0.05; // Adjust the smoothing factor for more smoothness
      meshes.current.Monitor_7.rotation.x += (targetRotation - currentRotation) * smoothFactor;
      
      // Ensure rotation stays within bounds (0 to 90 degrees)
      meshes.current.Monitor_7.rotation.x = THREE.MathUtils.clamp(
        meshes.current.Monitor_7.rotation.x,
        THREE.MathUtils.degToRad(0),
        THREE.MathUtils.degToRad(90)
      );
    }
  });

  return (
    <group scale={[25, 25, 25]} position={[0, -90, 0]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default AsusContainer;
