import React, { useState, useEffect } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineUser,
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
} from "react-icons/ai";
import { renderDrowerData } from "./drawerData";
import { RiDashboardLine, RiLogoutBoxLine } from "react-icons/ri";
const Layout = ({ children, parentClassName, isAuthenticated }) => {
  const [isMenuopen, setIsMenuOpen] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const mainColor = "#333333";
  const background = "#F8F8F8";
  const language = "ar";
  return (
    <>
      <div
        style={{ backgroundColor: mainColor }}
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

      <div
        className={`relative flex overflow-x-hidden transition duration-1000  ${
          language === "en" ? `flex-row` : `flex-row-reverse`
        }`}
      >
        <div
          className={`  ${isMenuopen ? `w-64 px-4 py-7` : `w-0 p-0`} drawer `}
        >
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
            {/* {renderDrowerData({ mainColor, background }).map((item) => (
              <div
                onClick={() => {}}
                style={{ color: mainColor, backgroundColor: background }}
                className="flex items-center px-2 py-2 my-2 font-semibold  transition-transform bg-white rounded shadow-md cursor-pointer hover:shadow-lg transform-gpu hover:scale-105"
              >
                {item.icon}
                <div className={`${language === "en" ? `pl-2` : `pr-2`} `}>
                  {item.name}
                </div>
              </div>
            ))} */}

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
            <div
              onClick={() => setFullscreen(!fullscreen)}
              className={` z-50 fixed bottom-5  ${
                isMenuopen
                  ? `${language === "en" ? `left-5` : `right-5`}`
                  : `${language === "en" ? `hidden` : `hidden`}`
              } ${fullscreen ? `` : `hidden`} `}
            >
              {fullscreen ? (
                <AiOutlineFullscreenExit size="1.6rem" color={background} />
              ) : (
                <AiOutlineFullscreen size="1.6rem" color={background} />
              )}
            </div>
          </div>
        </div>

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
          <div
            className={`${
              fullscreen ? ` -top-20  ` : `  top-0`
            } fixed bg-theme-dark  h-20 w-full ${
              isMenuopen
                ? `${language === "en" ? `left-64` : `right-64`}`
                : `${language === "en" ? `left-0` : `right-0`}`
            }  z-40 transform-gpu transition-all text-theme-light px-7 flex items-center justify-end duration-1000 `}
          >
            <div
              dir={`${language === "en" ? `ltr` : `rtl`}`}
              onClick={() => setFullscreen(!fullscreen)}
              className={` z-50  fixed transition-all duration-1000 top-7 ${
                isMenuopen
                  ? `${language === "en" ? `left-72` : `right-72`}`
                  : `${language === "en" ? `left-24` : `right-24`}`
              } ${fullscreen ? `hidden` : ``} `}
            >
              {fullscreen ? (
                <AiOutlineFullscreenExit size="1.6rem" color={background} />
              ) : (
                <AiOutlineFullscreen size="1.6rem" color={background} />
              )}
            </div>
          </div>
          {children}
          <div
            dir={`${language === "en" ? `ltr` : `rtl`}`}
            className={`${
              fullscreen ? ` -bottom-14 ` : ` bottom-0 `
            } fixed bg-theme-dark  ${
              isMenuopen
                ? `${language === "en" ? `left-64` : `right-64`}`
                : `${language === "en" ? `left-0` : `right-0`}`
            }  h-14 w-full   transform-gpu transition-all text-theme-light px-7 flex items-center duration-1000 text-xs `}
          >
            Mohamed Al-khawam
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
