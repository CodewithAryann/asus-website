import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const AsusContainer = () => {
  const model = useGLTF("./asus_rog.glb");
  const meshes = useRef({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    model.scene.traverse((e) => {
      meshes.current[e.name] = e;
    });

    if (meshes.current.Monitor_7) {
      meshes.current.Monitor_7.rotation.x = THREE.MathUtils.degToRad(90);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [model]);

  useFrame(() => {
    if (meshes.current.Monitor_7) {
      const parent = document.querySelector('.parent');
      const parentTop = parent.offsetTop;
      const parentHeight = parent.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollPercentage = Math.min(
        Math.max((scrollY - parentTop) / (parentHeight - windowHeight), 0),
        1
      );

      const targetRotation = THREE.MathUtils.degToRad(90 - scrollPercentage * 90);
      const currentRotation = meshes.current.Monitor_7.rotation.x;
      
      const smoothFactor = 0.05;
      meshes.current.Monitor_7.rotation.x += (targetRotation - currentRotation) * smoothFactor;
      
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
