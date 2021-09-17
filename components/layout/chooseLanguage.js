import { FiChevronDown } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
export default function ChangeLanguageBtn({ language, background }) {
  return (
    <div
      className={` hidden items-center cursor-pointer select-none  sm:flex ${
        language === "en" ? `flex-row` : `flex-row-reverse`
      }`}
    >
      <MdLanguage size="1.6rem" color={background} strokeWidth="0.1" />
      <div className={` text-sm px-2`}>English</div>
      <div className="cursor-pointer">
        <FiChevronDown size="1.5rem" color={background} />
      </div>
    </div>
  );
}
