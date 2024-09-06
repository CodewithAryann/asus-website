import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style.css";
import AsusContainer from "./AsusContainer";
import Explore from "./Explore";
import Living from "./living";
import Actions from "./Actions";
import Story from "./Story";
import Footer from "./footer";


gsap.registerPlugin(ScrollTrigger);

const startAnimation = (setOpen) => {
  gsap.to(setOpen, {
    duration: 1,
    scrollTrigger: {
      trigger: ".parent",
      start: "top center",
      end: "bottom center",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        setOpen(progress);
      },
    },
  });
};

const App = () => {
  const [openPercentage, setOpenPercentage] = useState(0);

  useEffect(() => {
    startAnimation(setOpenPercentage);
  }, []);

  return (
    <div>
      <div className="canvas-container w-full h-screen">
        <div className="navbar flex gap-5 justify-center items-center p-4">
          <img src="./Asus.jpg" alt="Logo" className="logo h-10 w-10" />
          {[
            "Products",
            "Innovation",
            "Downloads",
            "COMMUNITY",
            "What's HOT",
            "Handhelds",
            "Support",
          ].map((e) => {
            return (
              <a key={e} href="#" className="nav-items text-white">
                {e}
              </a>
            );
          })}
        </div>
        <div className="note w-full">
          <p>First Order Rewards: AED 200 Delight on ASUS eShop!</p>
        </div>

        <div className="asus-div absolute text-white top-32 left-1/2 transform -translate-x-1/2">
          <h1 className="asus text-center text-4xl">ROG Strix G17 RTX 4060</h1>
          <h2 className=" text-center text-4xl">
            FOR THOSE WHO DARE TRANSCENDENCE
          </h2>
          <h3 className=" text-center text-4xl">
            THE 2024 ROG STRIX HAS ARRIVED
          </h3>
        </div>

        <div className="w-full">
          <div className="parent relative left-0 top-0 w-full">
            <Canvas
              camera={{ fov: 50, position: [0, 2, 120] }}
              style={{
                height: "330px",
                position: "sticky",
                backgroundColor: "black",
              }}
            >
              <OrbitControls enableZoom={false} />
              <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr" />
              <AsusContainer openPercentage={openPercentage} />
            </Canvas>
          </div>
        </div>
      </div>
      <Explore />
      <Living/>
      <Actions/>
      <Story/>
      <Footer/>
    </div>
  );
};

export default App;
