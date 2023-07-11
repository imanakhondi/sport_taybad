import { Link, NavLink } from "react-router-dom";
import logo from "../../images/sports.png";
import { useState } from "react";
import { sidebar } from "../../constants/strings/fa";

const SideBar = () => {
  const menuItems = [
    {
      title: `${sidebar.dashboard}`,
      to: "dashboard",
      icon: "category4",
      style: "",
    },
    {
      title: `${sidebar.trainer}`,
      to: "trainers",
      icon: "profile-2user4",
      style: "",
    },
    {
      title: `${sidebar.managers}`,
      to: "managers",
      icon: "profile-2user4",
      style: "",
    },
    {
      title: `${sidebar.referee}`,
      to: "referees",
      icon: "profile-2user4",
      style: "",
    },
    {
      title: `${sidebar.student}`,
      to: "students",
      icon: "profile-2user4",
      style: "",
    },

    {
      title: `${sidebar.userManagement}`,
      icon: "personalcard",
      style: "",
      submenu: [
        {
          title: `${sidebar.users}`,
          to: "users",
          icon: "people4",
          style: "",
        },
        {
          title: `${sidebar.addUsers}`,
          to: "user/add",
          icon: "profile-add4",
          style: "",
        },
        {
          title: `${sidebar.changePassword}`,
          to: "user/change_password",
          icon: "profile-add4",
          style: "",
        },
      ],
    },
    {
      title: `${sidebar.logout}`,
      to: "/logout",
      icon: "logout4",
      style: "!text-red-500",
    },
  ];

  return (
    <div>
      <nav className="pl-5 overflow-x-hidden hidden md:block w-20 xl:w-[230px] font-IRANSansWeb bg-navBgColor border border-borderColor min-h-min ">
        <Link to="#" className=" flex items-center text-white pt-4 pr-5">
          <img src={logo} alt="logo" className="w-20 h-20 ml-2" />
          <span className=" xl:flex font-bold hidden "> {sidebar._title} </span>
        </Link>

        <ul>
          {
            // auth.crnuser.is_admin===0
            true
              ? menuItems.map((menu, index) => {
                  return menu.title === `${sidebar.userManagement}` ||
                    menu.title === "گزارشات" ? (
                    <MenuItems items={menu} key={index} />
                  ) : (
                    <MenuItems items={menu} key={index} />
                  );
                })
              : menuItems.map((menu, index) => {
                  return <MenuItems items={menu} key={index} />;
                })
          }
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;

export const MenuItems = ({ items, index }) => {
  const [subMenu, setSubMenu] = useState(false);
  const [sub, setSub] = useState(false);
  return (
    <>
      {items.submenu ? (
        <>
          <li aria-expanded={subMenu ? "true" : "false"} role="link">
            <NavLink
              onClick={() => {
                setSubMenu(!subMenu);
              }}
              className={
                sub
                  ? "bg-slate-100 flex items-center text-slate-800 h-[50px] mb-1 pr-5 rounded-r-full relative z-10  "
                  : "flex items-center text-white relative h-[50px] mb-1 pr-5 rounded-r-full  "
              }
            >
              <i className={`icon-${items.icon} text-xl ml-3`}></i>
              <div className="xl:flex items-center w-full justify-between hidden text-sm">
                {items.title}
                {subMenu ? (
                  <i className="icon-arrow-up before:content-['\eeb2']"></i>
                ) : (
                  <i className="icon-arrow-bottom before:content-['\ee9b']"></i>
                )}
              </div>
            </NavLink>
            <Dropdown
              submenus={items.submenu}
              dropdown={subMenu}
              sub={sub}
              setSub={setSub}
            />
          </li>
        </>
      ) : (
        <li>
          <NavLink
            to={items.to}
            key={index}
            className={(navData) => {
              return navData.isActive
                ? " flex items-center text-warningColor h-[50px] mb-1 pr-5 rounded-r-full relative z-10 "
                : `flex items-center text-white relative h-[50px] mb-1 pr-5 rounded-r-full hover:bg-[#ffffff14] ${items.style} `;
            }}
          >
            <i className={`icon-${items.icon} text-xl ml-3`}></i>
            <div className="xl:flex items-center w-full justify-between hidden text-sm  ">
              {items.title}
            </div>
          </NavLink>
        </li>
      )}
    </>
  );
};

export const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul
      className={`mr-1 xl:mr-5 ${
        dropdown ? "h-auto rounded-lg bg-[#0000001a]" : "h-0 overflow-hidden"
      } `}
    >
      {submenus.map((submenu, index) => (
        <li key={index}>
          <NavLink
            to={submenu.to}
            className={(navData) => {
              return navData.isActive
                ? ` flex items-center h-[50px] mb-1 pr-5 rounded-r-full relative z-10 text-warningColor`
                : "flex items-center text-white relative h-[50px] mb-1 pr-5 rounded-r-full  ";
            }}
          >
            <i
              className={`icon-${submenu.icon} text-xl ml-3`}
            ></i>
            <div className="hidden xl:flex items-center w-full justify-between text-sm">
              {submenu.title}
              <div className="ml-5 z-10">{submenu.iconTwo}</div>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
