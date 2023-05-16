import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import routes from "router";

const MenuItems = ({ showMenu, active }) => {
  const findSubmenu = (slug) => {
    return routes.detail_menu.find((mainManu) => mainManu.slug === slug);
  };

  const [heading, setHeading] = useState("");

  return (
    <>
      <ul
        className={
          active
            ? "mdx:hidden flex flex-col items-center fixed inset-0 bg-black justify-center left-0 sm:left-1/3 gap-3 p-8 overflow-y-scroll"
            : "hidden"
        }
      >
        <AiOutlineClose
          onClick={showMenu}
          className="cursor-pointer hover:text-yellow-400"
        />
        {routes.list_menu.map((val, index) => {
          return val.child ? (
            <div
              onClick={() =>
                heading !== val.slug ? setHeading(val.slug) : setHeading("")
              }
              key={index}
              className="p-2 w-full text-center hover:text-yellow-400 hover:border-b-yellow-400 hover:border-b-2 "
            >
              <div>{val.name}</div>
              <div
                key={index}
                className={`${heading === val.slug ? "" : "hidden"}`}
              >
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
              key={index}
              onClick={() => setHeading("")}
              className="p-2 w-full text-center hover:text-yellow-400 hover:border-b-yellow-400 hover:border-b-2"
            >
              {val.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MenuItems;
