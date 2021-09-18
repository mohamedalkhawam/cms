import { FiChevronDown } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function ChangeLanguageBtn({
  language,
  themeLgihtColor,
  mainColor,
}) {
  const [openList, setOpenList] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <div
      // onMouseOver={() => {
      //   setOpenList(true);
      // }}
      // onMouseOut={() => {
      //   setOpenList(false);
      // }}
      onClick={() => setOpenList(!openList)}
      className={` hidden items-center cursor-pointer select-none relative   w-32 sm:flex justify-between font-normal tracking-wide  ${
        language === "en" ? `flex-row` : `flex-row-reverse`
      }`}
    >
      <div
        className={` ${
          openList ? `block` : `hidden`
        }  w-32 left-0 right-0 absolute top-9 shadow-md hover:shadow-lg  rounded-md text-center font-normal z-50 bg-theme-light arrow-up`}
      >
        <div
          style={{
            color: mainColor,
          }}
          className={`py-2.5 border-b-2 hover:bg-gray-200 rounded-md z-50`}
          onClick={() => {
            i18n.changeLanguage("en");
            localStorage.setItem("language", i18n.language);
          }}
        >
          English
        </div>

        <div
          style={{
            color: mainColor,
          }}
          onClick={() => {
            i18n.changeLanguage("ar");
            localStorage.setItem("language", i18n.language);
          }}
          className={`py-2.5 hover:bg-gray-200  rounded-md `}
        >
          العربية
        </div>
      </div>
      <div
        className={`${language === "en" ? `pr-4` : `pl-4`} flex items-center ${
          i18n.language === "en" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <MdLanguage size="1.6rem" color={themeLgihtColor} strokeWidth="0.1" />
        <div className={` text-sm px-2 `}>
          {" "}
          {i18n.language === "en" ? "English" : "العربية"}
        </div>
      </div>
      <div className="cursor-pointer ">
        <FiChevronDown size="1.5rem" color={themeLgihtColor} />
      </div>
    </div>
  );
}
