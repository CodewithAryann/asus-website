import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AsusContainer = ({ openPercentage }) => {
  const model = useGLTF("./asus_rog.glb");
  const meshes = useRef({});

  useEffect(() => {
    model.scene.traverse((e) => {
      meshes.current[e.name] = e;
    });

    if (meshes.current.Monitor_7) {
      meshes.current.Monitor_7.rotation.x = THREE.MathUtils.degToRad(90);
    }
  }, [model]);

  useFrame(() => {
    if (meshes.current.Monitor_7) {
      const targetRotation = THREE.MathUtils.degToRad(90 * openPercentage);
      const currentRotation = meshes.current.Monitor_7.rotation.x;

      // Smooth transition effect
      const smoothFactor = 0.1;
      meshes.current.Monitor_7.rotation.x += (targetRotation - currentRotation) * smoothFactor;

      meshes.current.Monitor_7.rotation.x = THREE.MathUtils.clamp(
        meshes.current.Monitor_7.rotation.x,
        THREE.MathUtils.degToRad(0),
        THREE.MathUtils.degToRad(90)
      );
    }
  });

  return (
    <group scale={[30, 30, 30]} position={[0, -80, 0]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default AsusContainer;
