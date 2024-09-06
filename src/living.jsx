import React from "react";
import "./living.css";
const Living = () => {
  return (
    <div>
      <div className="action">
        <h1>LIVING FOR GAMERS - ABOUT ROG</h1>
        <div className="container">
          <div className="item">
            <a href="https://rog.asus.com/me-en/articles/news/get-ahead-of-the-game-with-the-latest-rog-gaming-tech-from-gamescom-2024/">
              <img
                src="https://dlcdnrog.asus.com/rog/media/1724151926819.webp"
                alt="Gamescom 2024"
              />
              <p>
                Get ahead of the game with the latest ROG gaming tech from
                Gamescom 2024
              </p>
            </a>
          </div>
          <div className="item">
            <a href="https://rog.asus.com/me-en/articles/gaming-monitors/qd-oled-and-360hz-converge-in-the-rog-strix-oled-xg27acdng/">
              <img
                src="https://dlcdnrog.asus.com/rog/media/1723842167221.webp"
                alt="OLED XG27ACDNG"
              />
              <p>QD-OLED and 360Hz converge in the ROG Strix OLED XG27ACDNG</p>
            </a>
          </div>
          <div className="item">
            <a href="https://rog.asus.com/me-en/articles/crosshair-motherboards/the-rog-crosshair-x870e-hero-sets-a-new-standard-for-high-end-gaming-prowess/">
              <img
                src="https://dlcdnrog.asus.com/rog/media/1723864904277.webp"
                alt="X870E Hero"
              />
              <p>
                The ROG Crosshair X870E Hero sets a new standard for high-end
                gaming prowess
              </p>
            </a>
          </div>
          <div className="item">
            <a href="https://rog.asus.com/me-en/articles/psus/the-rog-strix-platinum-psu-series-provides-unwavering-stability-for-your-demanding-rig/">
              <img
                src="https://dlcdnrog.asus.com/rog/media/1723518686811.webp"
                alt="PSU Series"
              />
              <p>
                The ROG Strix Platinum PSU series provides unwavering stability
                for your demanding rig
              </p>
            </a>
          </div>
          <div className="item">
            <a href="https://rog.asus.com/me-en/articles/gaming-headsets/wireless-freedom-in-esports-ready-cans-meet-the-rog-delta-ii-gaming-headset/">
              <img
                src="https://dlcdnrog.asus.com/rog/media/17231648226.webp"
                alt="Delta II Gaming Headset"
              />
              <p>
                Experience unparalleled wireless freedom with esports-ready
                performance in the ROG Delta II gaming headset
              </p>
            </a>
          </div>
          <div className="item">
            <a href="">
              <img src="./item.webp" alt="Delta II Gaming Headset" />
              <p>
                Black Myth Wukong on the ROG Ally and ROG Ally X: performance
                guide & best settings
              </p>
            </a>
          </div>
        </div>
        <button className="cta">
          <span>Hover me</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Living;
