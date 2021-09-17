import React, { useState, useEffect } from "react";
import ContnentContainer from "./contentContailer";
import Drawer from "./drawer";
import OpenDrawerFloatingBtn from "./openDrawerFloatingBtn";
const Layout = ({ children, parentClassName, isAuthenticated }) => {
  const [isMenuopen, setIsMenuOpen] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const mainColor = "#333333";
  const background = "#F8F8F8";
  const language = "en";
  return (
    <>
      <OpenDrawerFloatingBtn
        isMenuopen={isMenuopen}
        setIsMenuOpen={setIsMenuOpen}
        mainColor={mainColor}
        language={language}
      />
      <div
        className={`relative flex overflow-x-hidden transition duration-1000  ${
          language === "en" ? `flex-row` : `flex-row-reverse`
        }`}
      >
        <Drawer
          isMenuopen={isMenuopen}
          setIsMenuOpen={setIsMenuOpen}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          mainColor={mainColor}
          background={background}
          language={language}
        />
        <ContnentContainer
          isMenuopen={isMenuopen}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          background={background}
          language={language}
          children={children}
          parentClassName={parentClassName}
        />
      </div>
    </>
  );
};

export default Layout;
