import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import ChangeLanguageBtn from "./chooseLanguage";
import FullscreenHeaderBtn from "./fullscreenHeaderBtn";

export default function Header({
  language,
  themeLgihtColor,
  setFullscreen,
  fullscreen,
  isMenuopen,
  mainColor,
}) {
  return (
    <div
      style={{ color: themeLgihtColor, backgroundColor: mainColor }}
      className={`${
        fullscreen ? ` -top-20  ` : `  top-0`
      } fixed bg-theme-dark  h-20 w-full ${
        isMenuopen
          ? `${language === "en" ? `left-64` : `right-64`}`
          : `${language === "en" ? `left-0` : `right-0`}`
      } ${
        isMenuopen
          ? `${language === "en" ? `pr-72` : `pl-72`}`
          : `${language === "en" ? `pr-6` : `pl-6`}`
      }  z-40 transform-gpu transition-all text-theme-light px-7 flex justify-end items-center duration-1000 `}
    >
      <FullscreenHeaderBtn
        language={language}
        themeLgihtColor={themeLgihtColor}
        setFullscreen={setFullscreen}
        fullscreen={fullscreen}
        isMenuopen={isMenuopen}
      />
      <ChangeLanguageBtn
        language={language}
        themeLgihtColor={themeLgihtColor}
      />
    </div>
  );
}
