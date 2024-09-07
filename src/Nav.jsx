import React from 'react';
import './nav.css';
import "./style.css";

const Nav = () => {
  const navItems = [
    { name: "Products", dropdown: ["Laptops", "Desktops", "Monitors"] },
    { name: "Innovation", dropdown: ["AI", "Gaming", "VR"] },
    { name: "Downloads", dropdown: ["Drivers", "Manuals", "Software"] },
    { name: "COMMUNITY", dropdown: ["Forums", "Events", "Blog"] },
    { name: "What's HOT", dropdown: ["Trending", "New Arrivals", "Best Sellers"] },
    { name: "Handhelds", dropdown: ["ROG Ally", "Zenfone"] },
    { name: "Support", dropdown: ["Customer Service", "Warranty", "Repair"] }
  ];

  return (
    <div className="canvas-container w-full h-screen">
      <div className="navbar flex gap-5 justify-center items-center p-4">
        <img src="./Asus.jpg" alt="Logo" className="logo h-10 w-10" />
        {navItems.map((item) => (
          <div key={item.name} className="relative">
            <a
              href="#"
              className="nav-items text-white"
            >
              {item.name}
            </a>
            <div className="dropdown absolute bg-gray-800 mt-2 p-2 rounded shadow-lg">
              {item.dropdown.map((subItem) => (
                <a
                  key={subItem}
                  href="#"
                  className="block text-white px-4 py-2 hover:bg-gray-700"
                >
                  {subItem}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
