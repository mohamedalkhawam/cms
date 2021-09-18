import React, { useState, useEffect } from "react";
import ContnentContainer from "./contentContailer";
import Drawer from "./drawer";
import OpenDrawerFloatingBtn from "./openDrawerFloatingBtn";
import { useTranslation } from "react-i18next";
const Layout = ({ children, parentClassName, isAuthenticated }) => {
  const [isMenuopen, setIsMenuOpen] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [mainColor, setMainColor] = useState("#1C5059");
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("language"));
    setLanguage(localStorage.getItem("language"));
  }, [i18n.language]);
  //  441944; // 442944 //491944 //144014 //267069 //491911 //591944 //691944 //791944 //155994 //e69949
  // const mainColor = "#e69949";  5E97A1 1C5059
  const themeLgihtColor = "#F8F8F8";
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
        style={{ backgroundColor: mainColor }}
        className={`relative flex  transition duration-1000 font-light z-40 -h-screen  overflow-hidden ${
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
        {/* <div className={`${language === "en" ? `ml-96` : `mr-96`}`}>
          <input
            type="color"
            onChange={(e) => setMainColor(e.target.value)}
            className="bg-black mt-72 "
            value={mainColor}
          />
          <div
            onClick={() => setLanguage("en")}
            style={{ color: themeLgihtColor, backgroundColor: mainColor }}
            className={` cursor-pointer p-4`}
          >
            English
          </div>
          <div
            onClick={() => setLanguage("ar")}
            style={{ color: themeLgihtColor, backgroundColor: mainColor }}
            className="p-4  cursor-pointer "
          >
            Arabic
          </div>
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
