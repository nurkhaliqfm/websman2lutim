import React from "react";
import ThumbImage from "assets/Images/Beranda/image-1.png";
import Header from "components/Header";
import Footer from "components/Footer";
import { BsFillPlayFill } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import Kepsek from "assets/Images/pegawai-1.png";

const Beranda = (navbar) => {
  return (
    <>
      <Header navstyle={navbar.navstyle} />
      <div className="w-full h-screen flex font-montserrat flex-col items-center">
        <div className="header-section w-full h-screen relative">
          <img
            src={ThumbImage}
            alt="Logo"
            className="h-screen w-full object-cover object-left brightness-50"
          />
          <BsFillPlayFill className="play-button_icon cursor-pointer absolute top-[50%] z-[1] left-[50%] scale-[340%] bg-white rounded-full p-[3px] hover:bg-yellow-400" />
          <div className="absolute top-0 bg-gradient-to-t from-black/0 to-black w-full h-[164px]"></div>
          <div className="absolute bottom-0 bg-gradient-to-t from-black to-black/0 w-full h-[164px] border-b-4 border-yellow-400"></div>
        </div>
        <div className="kepsek-section flex flex-col gap-10 text-lg px-4 text-center justify-center items-center w-full h-fit my-10 max-w-7xl">
          <div className="w-full flex justify-center relative">
            <img src={Kepsek} alt="Img" className="w-[240px] z-[1]" />
            <div className="background-box_bgimage absolute w-full bottom-0 left-0">
              <div className="custom-style-bgimage bg-yellow-400 w-full h-[200px]"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full text-black">
            <div className="nama-pegawai font-semibold text-center text-[1.5rem]">
              Nama Kepala Sekolah
            </div>
            <div className="title-pegawai text-center text-yellow-400 text-[1rem] font-semibold">
              Kepala Sekola SMA 2 Luwu Timur
            </div>
            <div
              className="pegawai-about text-center mt-2 text-[0.9rem]"
              style={{
                lineHeight: "1.6",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Nisi aliquet accumsan
              pretium in pellentesque nisl adipiscing vestibulum. Eros tincidunt
              consectetur id faucibus. Pellentesque sapien leo pulvinar quisque
              nisl senectus morbi. Mauris at nunc tellus egestas pharetra urna
              turpis tristique. Nisl metus cursus aliquam praesent. Ac justo
              turpis aliquam dolor turpis auctor convallis. Semper sit mi duis
              aenean dictumst. Ultrices volutpat cras leo aenean. Metus turpis
              vitae lectus neque gravida habitant hendrerit condimentum
              pulvinar. Ac duis habitasse interdum cursus id. Nec fames turpis
              cursus nulla vestibulum.
            </div>
          </div>
        </div>
        <div className="info-section bg-yellow-400 flex flex-col gap-16 text-lg px-8 py-16 text-center justify-center items-center w-full h-fit max-w-7xl">
          <div className="flex flex-col gap-4 items-center justify-center">
            <IoIosSchool className="scale-[350%] mb-3" />
            <div>
              <div className="text-[2rem] font-bold mb-1">Siswa</div>
              <div className="font-semibold text-[1.5rem]">+1000</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <FaChalkboardTeacher className="scale-[350%] mb-3" />
            <div>
              <div className="text-[2rem] font-bold mb-1">Guru</div>
              <div className="font-semibold text-[1.5rem]">+40</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <IoIosSchool className="scale-[350%] mb-3" />
            <div>
              <div className="text-[2rem] font-bold mb-1">Alumni</div>
              <div className="font-semibold text-[1.5rem]">+90000</div>
            </div>
          </div>
        </div>
        <div className="berita-section flex flex-col gap-10 text-lg px-8 py-10 text-center justify-center items-center w-full h-fit my-10 max-w-7xl">
          <div className="w-full flex justify-center font-bold text-[30px]">
            <div>Berita Terkini</div>
          </div>
          <div className="flex flex-col justify-center items-center w-full text-black">
            <div className="nama-pegawai font-semibold text-center">
              Isi Kontent
            </div>
            <div className="font-semibold text-center text-black bg-yellow-400 hover:bg-white hover:border-yellow-400 hover:border-2 py-2 px-2 rounded-[10px]">
              Berita Lainnya
            </div>
          </div>
        </div>
        <div
          className="berita-prestasi flex flex-col gap-10 text-lg px-8 py-10 text-center justify-center items-center w-full h-fit my-10 max-w-7xl"
          style={{ background: "black" }}
        >
          <div className="w-full flex justify-center font-bold text-[30px] text-white">
            <div>Info Prestasi</div>
          </div>
          <div className="flex flex-col justify-center items-center w-full text-white">
            <div className="nama-pegawai font-semibold text-center">
              Isi Kontent Prestasi
            </div>
            <div className="font-semibold text-center text-black bg-yellow-400 hover:bg-white hover:border-yellow-400 hover:border-2 py-2 px-2 rounded-[10px]">
              Prestasi Lainnya
            </div>
          </div>
        </div>
        <div className="berita-section flex flex-col gap-10 text-lg px-8 py-10 text-center justify-center items-center w-full h-fit my-10 max-w-7xl">
          <div className="w-full flex justify-center font-bold text-[30px]">
            <div>Gallery</div>
          </div>
          <div className="flex flex-col justify-center items-center w-full text-black">
            <div className="nama-pegawai font-semibold text-center">
              Isi Gallery
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Beranda;
