import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineUser,
  AiOutlineDashboard,
} from "react-icons/ai";
import { RiDashboardLine, RiLogoutBoxLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { GrServices } from "react-icons/gr";
import { SiOpenaccess } from "react-icons/si";
import { BiBuildingHouse } from "react-icons/bi";
import { VscGitPullRequest } from "react-icons/vsc";
import { GiModernCity, GiRegeneration } from "react-icons/gi";
import { Fa500Px, FaCriticalRole } from "react-icons/fa";
export const renderDrowerData = ({ mainColor, background }) => {
  return [
    {
      name: "Users",
      icon: <AiOutlineUser size="1.6rem" color={background} />,
      link: "/users",
    },
  ];
};
