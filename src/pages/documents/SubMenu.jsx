import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);


  return (

    <>
      <li
        className={`link ${pathname.includes(data.name) && "text-red-600"} hover:bg-blue-100`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize">{data.name}</p>
        {
          data.submenu ? <IoIosArrowDown
            className={` ${subMenuOpen && "rotate-180"} duration-200 `}
          /> : null
        }
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
              height: "fit-content",
            }
            : {
              height: 0,
            }
        }
        className="flex h-0 flex-col pl-3 gap-1 text-[0.8rem] font-normal overflow-hidden mb-1"
      >
        {data.submenu?.map((menu, index) => (
          <li key={index} className={`hover:bg-blue-100 rounded-md hover:text-blue-600 hover:font-medium`}>
            <NavLink
              to={menu.route}
              className="link !bg-transparent capitalize"
            >
              <menu.icon size={18} className="min-w-max" />
              <p className="flex-1 capitalize">{menu.name}</p>
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
