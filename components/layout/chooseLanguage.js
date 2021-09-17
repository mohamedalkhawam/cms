import { FiChevronDown } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
export default function ChangeLanguageBtn({ language, themeLgihtColor }) {
  return (
    <div
      className={` hidden items-center cursor-pointer select-none  sm:flex ${
        language === "en" ? `flex-row` : `flex-row-reverse`
      }`}
    >
      <MdLanguage size="1.6rem" color={themeLgihtColor} strokeWidth="0.1" />
      <div className={` text-sm px-2 ${language === "en" ? `pr-5` : `pl-5`}`}>
        English
      </div>
      <div className="cursor-pointer ">
        <FiChevronDown size="1.5rem" color={themeLgihtColor} />
      </div>
    </div>
  );
}
