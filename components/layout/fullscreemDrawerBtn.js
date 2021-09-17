import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
export default function FullscreenDrawerBtn({
  language,
  background,
  setFullscreen,
  fullscreen,
  isMenuopen,
}) {
  return (
    <div
      onClick={() => setFullscreen(!fullscreen)}
      className={` z-50 fixed bottom-5  cursor-pointer  ${
        isMenuopen
          ? `${language === "en" ? `left-5` : `right-5`}`
          : `${language === "en" ? `hidden` : `hidden`}`
      } ${fullscreen ? `` : `hidden`} `}
    >
      {fullscreen ? (
        <AiOutlineFullscreenExit size="1.6rem" color={background} />
      ) : (
        <AiOutlineFullscreen size="1.6rem" color={background} />
      )}
    </div>
  );
}
