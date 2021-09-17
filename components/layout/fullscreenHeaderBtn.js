import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
export default function FullscreenHeaderBtn({
  language,
  background,
  setFullscreen,
  fullscreen,
  isMenuopen,
}) {
  return (
    <div
      dir={`${language === "en" ? `ltr` : `rtl`}`}
      onClick={() => setFullscreen(!fullscreen)}
      className={` z-50  fixed transition-all duration-1000 top-7 cursor-pointer ${
        isMenuopen
          ? `${language === "en" ? `left-72` : `right-72`}`
          : `${language === "en" ? `left-24` : `right-24`}`
      } ${fullscreen ? `hidden` : ``} `}
    >
      {fullscreen ? (
        <AiOutlineFullscreenExit size="1.6rem" color={background} />
      ) : (
        <AiOutlineFullscreen size="1.6rem" color={background} />
      )}
    </div>
  );
}
