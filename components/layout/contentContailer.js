import Footer from "./footer";
import Header from "./header";

export default function ContnentContainer({
  language,
  fullscreen,
  isMenuopen,
  parentClassName,
  background,
  setFullscreen,
  children,
  mainColor,
}) {
  return (
    <div
      dir={`${language === "en" ? `ltr` : `rtl`}`}
      className={`w-full transition-all duration-1000 flex-grow flex-shrik overflow-hidden ${
        fullscreen ? `my-0 ` : ` my-20`
      } ${
        isMenuopen
          ? `${language === "en" ? `ml-64` : `mr-64`}`
          : `${language === "en" ? `ml-0` : `mr-0`}`
      } ${
        parentClassName && parentClassName.length > 0
          ? `${parentClassName}`
          : ``
      }`}
    >
      <Header
        isMenuopen={isMenuopen}
        fullscreen={fullscreen}
        setFullscreen={setFullscreen}
        background={background}
        language={language}
        mainColor={mainColor}
      ></Header>
      {children}
      <Footer
        background={background}
        mainColor={mainColor}
        isMenuopen={isMenuopen}
        fullscreen={fullscreen}
        language={language}
      ></Footer>
    </div>
  );
}
