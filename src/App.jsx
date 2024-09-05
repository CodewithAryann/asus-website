import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './style.css';
import AsusContainer from './AsusContainer';

gsap.registerPlugin(ScrollTrigger);

const startAnimation = (setOpen) => {
  gsap.to(setOpen, {
    duration: 1,
    scrollTrigger: {
      trigger: ".parent",
      start: "top center",
      end: "bottom center", 
      scrub: true,
      onUpdate: self => {
        const progress = self.progress; 
        setOpen(progress > 0.5); 
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
        {/* Navbar */}
        <div className="navbar flex gap-5 justify-center items-center p-4">
          {/* Logo on the left */}
          <img src="./Asus.jpg" alt="Logo" className="logo h-10 w-10" />

          {/* Navigation Links */}
          {["Products", "Innovation", "Downloads", "COMMUNITY", "What's HOT", "Handhelds" ,"Support"].map((e) => {
            return ( 
              <a key={e} href="#" className="nav-items text-white">
                {e}
              </a>
            );
          })}
        </div>

        <div className="asus-div absolute text-white top-32 left-1/2 transform -translate-x-1/2">
          <h1 className="asus text-center text-4xl">ROG Strix G17 RTX 4060</h1>
          <h2 className=" text-center text-4xl" >FOR THOSE WHO DARE TRANSCENDENCE</h2>
          <h3 className=" text-center text-4xl">THE 2024 ROG STRIX HAS ARRIVED</h3>
        </div>

        {/* Canvas with 3D Model */}
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

      {/* Content */}
      <div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam molestiae sit maxime sint qui unde ipsam pariatur nulla, iure voluptatem in consequuntur doloribus ullam, est animi quaerat? Doloribus, necessitatibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores porro sapiente ducimus nisi eos cumque, excepturi voluptas labore dolores ex vitae quisquam aliquam ullam impedit quasi error tempora ut.</h1>
      </div>
    </div>
  );
};

export default App;
