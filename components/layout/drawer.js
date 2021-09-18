import FullscreenDrawerBtn from "./fullscreemDrawerBtn";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { renderDrowerData } from "./drawerData";
import { RiDashboardLine, RiLogoutBoxLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
export default function Drawer({
  isMenuopen,
  setIsMenuOpen,
  fullscreen,
  setFullscreen,
  mainColor,
  themeLgihtColor,
  language,
}) {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  return (
    <div
      style={{ color: themeLgihtColor, backgroundColor: mainColor }}
      className={`  ${
        isMenuopen ? `w-64 px-4 py-7` : `w-0 p-0`
      } drawer transition-colors-none `}
    >
      <div
        style={{
          borderColor: themeLgihtColor,
        }}
        dir={`${language === "en" ? `ltr` : `rtl`}`}
        className="flex items-center justify-between pb-6 font-semibold  border-b transition-all duration-1000 "
      >
        <div
          onClick={() => router.push("/")}
          className="flex items-center transform cursor-pointer hover:scale-105"
        >
          <RiDashboardLine size="1.6rem" className=" " />
          <div className={`${language === "en" ? `pl-1` : `pr-1`}`}>
            {t("dashboard")}
          </div>
        </div>

        <div
          className="transform cursor-pointer hover:scale-105 "
          onClick={() => setIsMenuOpen(!isMenuopen)}
        >
          {language === "en" ? (
            <AiOutlineMenuFold size="1.7rem" className="" />
          ) : (
            <AiOutlineMenuUnfold size="1.7rem" className="" />
          )}
        </div>
      </div>
      <div
        style={{ color: themeLgihtColor, backgroundColor: mainColor }}
        dir={`${language === "en" ? `ltr` : `rtl`}`}
        className="h-screen  pb-8 overflow-x-hidden overflow-y-auto my-2 transition-all duration-1000"
      >
        {/* content start */}
        {renderDrowerData({
          mainColor,
          themeLgihtColor,
        }).map((item) => (
          <div
            dir={`${language === "en" ? `ltr` : `rtl`}`}
            className="bg-gray-50"
            onClick={() => router.push(item.link)}
          >
            <div
              style={{ color: themeLgihtColor, backgroundColor: mainColor }}
              onClick={() => {}}
              className={`${
                language === "en" ? `menu-item-ltr ` : `menu-item-rtl `
              }  ${
                router.pathname.includes(t(item.link).toLowerCase())
                  ? `${
                      language === "en"
                        ? `menu-item-active-ltr`
                        : `menu-item-active-rtl`
                    }`
                  : ``
              } `}
            >
              {item.icon}
              <div
                className={`${language === "en" ? `pl-2` : `pr-2`} capitalize `}
              >
                {item.name}
              </div>
            </div>
          </div>
        ))}

        <div
          dir={`${language === "en" ? `ltr` : `rtl`}`}
          className="bg-gray-50  "
        >
          <div
            style={{ color: themeLgihtColor, backgroundColor: mainColor }}
            onClick={() => {}}
            className={`  ${
              language === "en" ? `menu-item-ltr ` : `menu-item-rtl`
            }   `}
          >
            <RiLogoutBoxLine size="1.6rem" color={themeLgihtColor} />
            <div className={`${language === "en" ? `pl-2` : `pr-2`}  `}>
              {t("logout")}
            </div>
          </div>
        </div>
        <FullscreenDrawerBtn
          isMenuopen={isMenuopen}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          themeLgihtColor={themeLgihtColor}
          language={language}
        />
      </div>
    </div>
  );
}
