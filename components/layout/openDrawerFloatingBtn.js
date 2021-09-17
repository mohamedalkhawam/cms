import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
export default function OpenDrawerFloatingBtn({
  isMenuopen,
  setIsMenuOpen,
  mainColor,
  language,
  themeLgihtColor,
}) {
  return (
    <div
      style={{ color: themeLgihtColor, backgroundColor: mainColor }}
      onClick={() => setIsMenuOpen(!isMenuopen)}
      className={`p-1 rounded-lg ${
        isMenuopen ? `hidden absolute` : `block fixed`
      } ${language === "en" ? `open-drawer-btn-ltr` : `open-drawer-btn-rtl`}`}
    >
      {language === "en" ? (
        <AiOutlineMenuUnfold size="1.7rem" className="" />
      ) : (
        <AiOutlineMenuFold size="1.7rem" className=" " />
      )}
    </div>
  );
}
