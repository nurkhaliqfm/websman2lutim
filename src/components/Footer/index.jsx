import React from "react";
import Logo from "assets/Images/Logo.svg";
import LogoLutim from "assets/Images/logo-lutim.svg";
import { AiOutlineAppstore, AiOutlineTrademark } from "react-icons/ai";
import {
  BsEnvelopeAtFill,
  BsFacebook,
  BsInstagram,
  BsMailbox,
  BsPhone,
  BsPinMapFill,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="flex flex-col bg-black w-full font-montserrat text-white justify-center text-center">
      <div className="flex flex-col md:flex-row justify-center my-[20px] space-y-4 md:space-y-0 md:space-x-10">
        <div className="flex w-full md:w-1/3 lg:w-[320px] justify-center gap-2">
          <div className="brand-logo flex w-auto">
            <img src={LogoLutim} alt="Logo" className="w-fit p h-[48px]" />
          </div>
          <div className="brand-logo flex w-auto ">
            <img src={Logo} alt="Logo" className="w-fit h-[48px]" />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/3 lg:w-[320px] justify-center">
          <div className="uppercase font-bold text-[15px] mb-2">
            SMA Negeri 2 Luwu Timur
          </div>
          <div className="item-footer__container flex flex-col gap-2 justify-center items-center">
            <div className="item-footer flex items-center justify-center space-x-2">
              <BsPinMapFill />
              <div className="item-title text-[13px] font-medium ">
                Jl.Pahlawan
              </div>
            </div>
            <div className="item-footer flex items-center justify-center space-x-2">
              <BsPhone />
              <div className="item-title text-[13px] font-medium ">
                081241285382
              </div>
            </div>
            <div className="item-footer flex items-center justify-center space-x-2">
              <BsEnvelopeAtFill />
              <div className="item-title text-[13px] font-medium ">
                admin@smada2lutim.sch.id
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/3 lg:w-[320px] items-center">
          <div className="uppercase font-bold text-[15px] mb-2">
            Media Sosial
          </div>
          <div className="item-footer__container flex space-x-2 justify-center items-center">
            <BsFacebook />
            <BsYoutube />
            <BsInstagram />
            <BsWhatsapp />
          </div>
        </div>
      </div>
      <div className="py-3 text-[12px]">2023 Hak Cipta, SMA 2 LUWU TIMUR</div>
    </div>
  );
}

export default Footer;
