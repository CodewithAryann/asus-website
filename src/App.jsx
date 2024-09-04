import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './style.css';
import AsusContainer from './AsusContainer';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const startAnimation = (setOpen) => {
  gsap.to(setOpen, {
    duration: 1,
    scrollTrigger: {
      trigger: ".parent",
      start: "top center", // Start animation when the top of .parent reaches the center of the viewport
      end: "bottom center", // End animation when the bottom of .parent reaches the center of the viewport
      scrub: true,
      onUpdate: self => {
        // Update the model state based on the scroll progress
        const progress = self.progress; // 0 to 1
        setOpen(progress > 0.5); // Example: Open model when scroll progress is more than 50%
      }
    }
  });
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    startAnimation(setIsOpen);
  }, []);

  return (
    <div>
      <div className="canvas-container w-full h-screen">
        <div className='text-white absolute top-32 left-1/2 -translate-x-1/2'>
          <h1>ASUS Laptop</h1>
        </div>
        <div className="w-full">
          <div className="parent relative left-0 top-0 w-full h-[700vh]">
            <Canvas camera={{ fov: 50, position: [0, 2, 120] }} style={{ height: "565px", position: 'sticky' }}>
              <OrbitControls enableZoom={false} />
              <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr" />
              <AsusContainer isOpen={isOpen} />
            </Canvas>
          </div>
        </div>
      </div>
      <div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam molestiae sit maxime sint qui unde ipsam pariatur nulla, iure voluptatem in consequuntur doloribus ullam, est animi quaerat? Doloribus, necessitatibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores porro sapiente ducimus nisi eos cumque, excepturi voluptas labore dolores ex vitae quisquam aliquam ullam impedit quasi error tempora ut.</h1>
      </div>
    </div>
  );
};

export default App;
