import React from "react";
import ThumbImage from "assets/Images/Beranda/image-1.png";
import Header from "components/Header";
import Footer from "components/Footer";
import { BsFillPlayFill } from "react-icons/bs";

const Beranda = (navbar) => {
  return (
    <>
      <Header navstyle={navbar.navstyle} />
      <div className="w-full h-screen flex flex-col items-center">
        <div className="header-section w-full h-screen border-b-4 border-yellow-400">
          <img
            src={ThumbImage}
            alt="Logo"
            className="h-[100vh] w-full object-cover object-left "
          />
          <BsFillPlayFill
            className="cursor-pointer absolute top-[50%] z-[1] left-[50%] scale-[340%] bg-white rounded-full p-[3px] hover:bg-yellow-400"
            // style={{boxShadow:}}
          />
          <div className="absolute top-0 bg-gradient-to-t from-black/0 to-black w-full h-[164px]"></div>
        </div>
        <div className="header-section text-lg text-center uppercase flex justify-center items-center  w-full min-h-[500px]">
          Main Content
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Beranda;
