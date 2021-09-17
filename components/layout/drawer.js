import FullscreenDrawerBtn from "./fullscreemDrawerBtn";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { renderDrowerData } from "./drawerData";
import { RiDashboardLine, RiLogoutBoxLine } from "react-icons/ri";
export default function Drawer({
  isMenuopen,
  setIsMenuOpen,
  fullscreen,
  setFullscreen,
  mainColor,
  background,
  language,
}) {
  return (
    <div className={`  ${isMenuopen ? `w-64 px-4 py-7` : `w-0 p-0`} drawer `}>
      <div
        dir={`${language === "en" ? `ltr` : `rtl`}`}
        className="flex items-center justify-between pb-6 font-semibold text-white border-b "
      >
        <div className="flex items-center transform cursor-pointer hover:scale-105">
          <RiDashboardLine size="1.6rem" className="text-white " />
          <div className={`${language === "en" ? `pl-1` : `pr-1`}`}>
            Dashboard
          </div>
        </div>

        <div
          className="transform cursor-pointer hover:scale-105 "
          onClick={() => setIsMenuOpen(!isMenuopen)}
        >
          {language === "en" ? (
            <AiOutlineMenuFold size="1.7rem" className="text-white" />
          ) : (
            <AiOutlineMenuUnfold size="1.7rem" className="text-white " />
          )}
        </div>
      </div>

      <div
        dir={`${language === "en" ? `ltr` : `rtl`}`}
        className="h-screen  pb-8 overflow-x-hidden overflow-y-auto my-2"
      >
        {/* content start */}
        {renderDrowerData({
          mainColor,
          background,
        }).map((item) => (
          <div
            onClick={() => {}}
            style={{
              color: mainColor,
              backgroundColor: background,
            }}
            className="flex items-center px-2 py-2 my-2 font-semibold  transition-transform bg-white rounded shadow-md cursor-pointer hover:shadow-lg transform-gpu hover:scale-105"
          >
            {item.icon}
            <div className={`${language === "en" ? `pl-2` : `pr-2`} `}>
              {item.name}
            </div>
          </div>
        ))}

        <div
          dir={`${language === "en" ? `ltr` : `rtl`}`}
          className="bg-gray-50  "
        >
          <div
            onClick={() => {}}
            className={` ${
              language === "en" ? `menu-item-ltr` : `menu-item-rtl`
            }`}
          >
            <RiLogoutBoxLine size="1.6rem" color={background} />
            <div
              className={`${
                language === "en" ? `pl-2` : `pr-2`
              } text-theme-light`}
            >
              Logout
            </div>
          </div>
        </div>
        <FullscreenDrawerBtn
          isMenuopen={isMenuopen}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          background={background}
          language={language}
        />
      </div>
    </div>
  );
}
