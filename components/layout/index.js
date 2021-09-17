import React, { useState, useEffect } from "react";
import ContnentContainer from "./contentContailer";
import Drawer from "./drawer";
import OpenDrawerFloatingBtn from "./openDrawerFloatingBtn";
const Layout = ({ children, parentClassName, isAuthenticated }) => {
  const [isMenuopen, setIsMenuOpen] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [mainColor, setMainColor] = useState("#1C5059");
  //  441944; // 442944 //491944 //144014 //267069 //491911 //591944 //691944 //791944 //155994 //e69949
  // const mainColor = "#e69949";  5E97A1 1C5059
  const themeLgihtColor = "#F8F8F8";
  const language = "en";
  return (
    <>
      <OpenDrawerFloatingBtn
        isMenuopen={isMenuopen}
        setIsMenuOpen={setIsMenuOpen}
        mainColor={mainColor}
        language={language}
        themeLgihtColor={themeLgihtColor}
      />
      <div
        className={`relative flex overflow-x-hidden transition duration-1000 font-light ${
          language === "en" ? `flex-row` : `flex-row-reverse`
        }`}
      >
        <Drawer
          isMenuopen={isMenuopen}
          setIsMenuOpen={setIsMenuOpen}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          mainColor={mainColor}
          themeLgihtColor={themeLgihtColor}
          language={language}
        />
        {/* <div>
          <input
            type="color"
            onChange={(e) => setMainColor(e.target.value)}
            className="bg-black ml-96 mt-72 "
            value={mainColor}
          />
        </div> */}
        <ContnentContainer
          isMenuopen={isMenuopen}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          themeLgihtColor={themeLgihtColor}
          language={language}
          mainColor={mainColor}
          children={children}
          parentClassName={parentClassName}
        />
      </div>
    </>
  );
};

export default Layout;
