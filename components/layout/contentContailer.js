import Footer from "./footer";
import Header from "./header";

export default function ContnentContainer({
  language,
  fullscreen,
  isMenuopen,
  parentClassName,
  themeLgihtColor,
  setFullscreen,
  children,
  mainColor,
}) {
  return (
    <div
      style={{ backgroundColor: themeLgihtColor }}
      dir={`${language === "en" ? `ltr` : `rtl`}`}
      className={`w-full transition-all duration-1000 flex-grow flex-shrik overflow-hidden ${
        isMenuopen ? `fixed sm:static` : `static`
      }   ${fullscreen ? `my-0 ` : ``} ${
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
        themeLgihtColor={themeLgihtColor}
        language={language}
        mainColor={mainColor}
      ></Header>

      {children}
      <Footer
        themeLgihtColor={themeLgihtColor}
        mainColor={mainColor}
        isMenuopen={isMenuopen}
        fullscreen={fullscreen}
        language={language}
      ></Footer>
    </div>
  );
}
