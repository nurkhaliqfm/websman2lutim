import React, { useState } from "react";
import Logo from "assets/Images/Logo.svg";
import MenuItems from "../MenuItems";
import { AiOutlineAppstore } from "react-icons/ai";
import routes from "router";

const NavbarTransparent = (scrollPosition) => {
  const [active, setActive] = useState(false);
  const [heading, setHeading] = useState("");

  const showMenu = () => {
    setActive(!active);
  };

  const findSubmenu = (slug) => {
    return routes.detail_menu.find((mainManu) => mainManu.slug === slug);
  };

  return (
    <div
      className={
        scrollPosition.position > 200
          ? "fixed w-full flex justify-center text-white bg-black z-10"
          : "fixed w-full flex justify-center text-white z-10"
      }
    >
      <div
        className={
          scrollPosition.position > 200
            ? "w-full max-w-7xl mdx:my-2 my-4 md:mx-10 mx-4 flex justify-between"
            : "w-full max-w-7xl my-7 md:mx-10 mx-4 flex justify-between"
        }
      >
        <div className="brand-logo">
          <img src={Logo} alt="Logo" className="w-auto h-full" />
        </div>
        <div className="flex w-full justify-end">
          <div className="mdx:hidden toggle-button h-full flex justify-center items-center scale-95">
            <AiOutlineAppstore
              onClick={showMenu}
              className="cursor-pointer scale-150 hover:text-yellow-400"
            />
          </div>
          <nav>
            <ul className="hidden mdx:flex w-full font-bold text-lg flex-row gap-2 items-center py-3 justify-end">
              {routes.list_menu.map((val, index) => {
                return val.child ? (
                  <div
                    onClick={() =>
                      heading !== val.slug
                        ? setHeading(val.slug)
                        : setHeading("")
                    }
                    key={index}
                    className="p-2 cursor-pointer hover:text-yellow-400 hover:border-b-yellow-400 hover:border-b-2"
                  >
                    <div>{val.name}</div>
                    <div
                      key={index}
                      className={`${
                        heading === val.slug
                          ? "fixed bg-black p-5 rounded-lg top-28"
                          : "hidden"
                      }`}
                    >
                      <div className="w-4 h-4 left-3 absolute top-[-4px] rotate-45 bg-black"></div>
                      {findSubmenu(val.slug).child.map((val, index) => {
                        return (
                          <li
                            key={index}
                            className="p-2 w-full text-white text-center hover:text-yellow-400"
                          >
                            {val.name}
                          </li>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <li
                    onClick={() => setHeading("")}
                    key={index}
                    className="p-2 cursor-pointer hover:text-yellow-400 hover:border-b-yellow-400 hover:border-b-2"
                  >
                    {val.name}
                  </li>
                );
              })}
            </ul>

            <MenuItems showMenu={showMenu} active={active} />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarTransparent;
