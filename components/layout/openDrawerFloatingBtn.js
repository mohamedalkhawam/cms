import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
export default function OpenDrawerFloatingBtn({
  isMenuopen,
  setIsMenuOpen,
  mainColor,
  language,
}) {
  return (
    <div
      style={{
        backgroundColor: mainColor,
      }}
      onClick={() => setIsMenuOpen(!isMenuopen)}
      className={`p-1 rounded-lg ${
        isMenuopen ? `hidden absolute` : `block fixed`
      } ${language === "en" ? `open-drawer-btn-ltr` : `open-drawer-btn-rtl`}`}
    >
      {language === "en" ? (
        <AiOutlineMenuUnfold size="1.7rem" className="text-white" />
      ) : (
        <AiOutlineMenuFold size="1.7rem" className="text-white " />
      )}
    </div>
  );
}
