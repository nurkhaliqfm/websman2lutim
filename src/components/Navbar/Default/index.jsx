import React, { useState } from "react";
import Logo from "assets/Images/Logo.svg";
import MenuItems from "../MenuItems";
import { AiOutlineAppstore } from "react-icons/ai";

const NavbarDefault = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed w-full bg-black/70 backdrop-blur-md flex justify-center text-white">
      <div className="w-full max-w-7xl space-x-16 my-2 mx-10 flex justify-center items-center">
        <div className="brand-logo">
          <img src={Logo} alt="Logo" className="w-auto h-full" />
        </div>
        <div className="md2:hidden toggle-button h-full flex justify-center items-center scale-95">
          <AiOutlineAppstore
            onClick={showMenu}
            className="cursor-pointer scale-150 hover:text-yellow-400"
          />
        </div>
        <nav>
          <ul className="hidden md:flex w-full font-bold text-lg flex-row gap-2 items-center py-3 justify-end">
            <li className="p-2 cursor-pointer hover:text-yellow-400 hover:border-b-yellow-400 hover:border-b-2">
              Beranda
            </li>
            <li className="p-2 cursor-pointer hover:text-yellow-400 hover:border-b-yellow-400 hover:border-b-2">
              Profil
            </li>
            <li className="p-2 cursor-pointer hover:text-yellow-400 hover:border-b-yellow-400 hover:border-b-2">
              Bidang
            </li>
            <li className="p-2 cursor-pointer hover:text-yellow-400 hover:border-b-yellow-400 hover:border-b-2">
              Informasi
            </li>
            <li className="p-2 cursor-pointer hover:text-yellow-400 hover:border-b-yellow-400 hover:border-b-2">
              Gallery
            </li>
            <li className="p-2 cursor-pointer hover:text-yellow-400 hover:border-b-yellow-400 hover:border-b-2">
              Alumni
            </li>
            <li className="p-2 cursor-pointer hover:text-yellow-400 hover:border-b-yellow-400 hover:border-b-2">
              Kontak
            </li>
          </ul>

          <MenuItems showMenu={showMenu} active={active} />
        </nav>
      </div>
    </div>
  );
};

export default NavbarDefault;
