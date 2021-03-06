export default function Footer({
  language,
  fullscreen,
  isMenuopen,
  mainColor,
  themeLgihtColor,
}) {
  return (
    <div
      style={{ color: themeLgihtColor, backgroundColor: mainColor }}
      dir={`${language === "en" ? `ltr` : `rtl`}`}
      className={`${fullscreen ? ` -bottom-14 ` : ` bottom-0 `} ${
        isMenuopen
          ? `${language === "en" ? `pr-72` : `pl-72`}`
          : `${language === "en" ? `pr-6` : `pl-6`}`
      } fixed bg-theme-dark  ${
        isMenuopen
          ? `${language === "en" ? `left-64` : `right-64`}`
          : `${language === "en" ? `left-0` : `right-0`}`
      }  h-14 w-full   transform-gpu transition-all  px-7 flex justify-end items-center duration-1000 text-xs `}
    >
      <div className="absolute px-1">&copy; SOFTTECH 2020 - 2021</div>
    </div>
  );
}
