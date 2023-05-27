import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
// Image
import ThumbImage from "assets/Images/Beranda/image-1.png";
import Kepsek from "assets/Images/pegawai-1.png";
import NewsThumb from "assets/Images/example-news.png";
import BackgroundPrestasi from "assets/Images/example-news.png";
import PrestasiSiswa from "assets/Images/siswa.png";
import Gallery1 from "assets/Images/gallery-1.png";
import Gallery2 from "assets/Images/gallery-2.png";
import Gallery3 from "assets/Images/gallery-3.png";
// Icon
import { BsFillPlayFill } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
// OwlCarousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Beranda = (navbar) => {
  const newsItem = [
    { title: "Judul Berita 1", deskripsi: "Deskripsi", date: "17 Mei 2023" },
    { title: "Judul Berita 2", deskripsi: "Deskripsi", date: "18 Mei 2023" },
    { title: "Judul Berita 3", deskripsi: "Deskripsi", date: "11 Mei 2023" },
    { title: "Judul Berita 4", deskripsi: "Deskripsi", date: "12 Mei 2023" },
    { title: "Judul Berita 5", deskripsi: "Deskripsi", date: "9 Mei 2023" },
    { title: "Judul Berita 6", deskripsi: "Deskripsi", date: "19 Mei 2023" },
  ];

  const prestasiItem = [
    { name: "Nama Siswa", prestasi: "Info Prestasi" },
    { name: "Nama Siswa", prestasi: "Info Prestasi" },
    { name: "Nama Siswa", prestasi: "Info Prestasi" },
    { name: "Nama Siswa", prestasi: "Info Prestasi" },
    { name: "Nama Siswa", prestasi: "Info Prestasi" },
    { name: "Nama Siswa", prestasi: "Info Prestasi" },
  ];

  const optionConstrain = {
    margin: 15,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      700: {
        items: 3,
      },
    },
  };

  return (
    <>
      <Header navstyle={navbar.navstyle} />
      <div className="w-full h-screen flex font-montserrat flex-col items-center">
        <div className="header-section w-full h-screen relative">
          <div className="absolute top-0 bg-gradient-to-t from-black/0 to-black w-full h-[164px]"></div>
          <img
            src={ThumbImage}
            alt="Logo"
            className="h-screen w-full object-cover object-left brightness-50"
          />
          <BsFillPlayFill className="play-button_icon cursor-pointer absolute top-[50%] z-[1] left-[50%] scale-[340%] bg-white rounded-full p-[3px] hover:bg-yellow-400" />
          <div className="absolute top-0 bg-gradient-to-t from-black/0 to-black w-full h-[164px]"></div>
          <div className="absolute bottom-0 bg-gradient-to-t from-black to-black/0 w-full h-[164px] border-b-4 border-yellow-400"></div>
        </div>
        <div className="kepsek-section flex flex-col md:flex-row gap-10 text-lg px-2 text-center justify-center items-center w-full h-fit my-10 max-w-7xl">
          <div className="w-full max-w-[320px] flex justify-center relative">
            <img src={Kepsek} alt="Img" className="w-[240px] z-[1]" />
            <div className="background-box_bgimage absolute w-full max-w-[320px] bottom-0 left-50">
              <div className="custom-style-bgimage bg-yellow-400 w-full h-[200px]"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-2 w-full lg:max-w-[480px] max-w-[320px] text-black">
            <div className="nama-pegawai font-semibold text-center md:text-start text-[1.5rem]">
              Nama Kepala Sekolah
            </div>
            <div className="title-pegawai text-center md:text-start text-yellow-400 text-[1rem] font-semibold">
              Kepala Sekola SMA 2 Luwu Timur
            </div>
            <div
              className="pegawai-about m-auto text-center md:text-start mt-2 text-[0.9rem] max-w-[320px] lg:max-w-[480px]"
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
              aenean dictumst. Ultrices volutpat cras leo aenean.
            </div>
          </div>
        </div>
        <div className="info-section bg-yellow-400 w-full h-fit">
          <div className="max-w-7xl mx-auto text-lg px-4 py-16 flex flex-col md:flex-row md:gap-x-52 gap-y-16 text-center justify-center items-center">
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
        </div>
        <div className="berita-section flex flex-col gap-5 px-4 py-10 text-center justify-center items-center w-full h-fit max-w-7xl">
          <div className="w-full flex justify-center font-bold text-[30px]">
            <div>Berita Terkini</div>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center w-full text-black">
            <OwlCarousel className="owl-theme item-berita" {...optionConstrain}>
              {newsItem.map((val, index) => {
                return (
                  <div key={index} className="w-full cursor-pointer p-1">
                    <div
                      className="flex flex-col rounded-xl bg-white"
                      style={{
                        boxShadow: "-1px 4px 2px rgba(0,0,0,0.2)",
                      }}
                    >
                      <div
                        className="overflow-hidden"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                      >
                        <img
                          src={NewsThumb}
                          alt="Logo"
                          className="object-fill hover:scale-[1.3] transition-transform"
                        />
                      </div>
                      <div className="font-semibold text-[1.2rem] text-start mb-1 mt-2 px-2">
                        {val.title}
                      </div>
                      <div className="font-medium text-[0.9rem] text-start px-2 mb-2">
                        {val.deskripsi}
                      </div>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
            <div className="font-semibold cursor-pointer text-center text-black bg-yellow-400 hover:bg-white hover:border-yellow-400 hover:border-2 py-2 px-2 rounded-[10px]">
              Berita Lainnya
            </div>
          </div>
        </div>
        <div
          className="prestasi-section w-full h-fit"
          style={{
            backgroundImage: { BackgroundPrestasi },
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-col gap-5 px-4 py-10 text-center justify-center items-center">
            <div className="w-full flex justify-center font-bold text-[30px] text-white z-[2]">
              <div>Prestasi Siswa</div>
            </div>
            <div className="flex flex-col gap-8 justify-center items-center w-full text-black z-[2]">
              <OwlCarousel
                className="owl-theme item-berita"
                {...optionConstrain}
              >
                {prestasiItem.map((val, index) => {
                  return (
                    <div key={index} className="w-full cursor-pointer p-1">
                      <div
                        className="flex flex-col rounded-xl bg-white"
                        style={{
                          boxShadow: "-1px 4px 2px rgba(0,0,0,0.2)",
                        }}
                      >
                        <div
                          className="overflow-hidden"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                        >
                          <img
                            src={PrestasiSiswa}
                            alt="Logo"
                            className="object-fill hover:scale-[1.3] transition-transform"
                          />
                        </div>
                        <div className="font-semibold text-[1.2rem] text-center mb-1 mt-2 px-2">
                          {val.name}
                        </div>
                        <div className="font-medium text-[0.9rem] text-center px-2 mb-2">
                          {val.prestasi}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
              <div className="font-semibold cursor-pointer text-center text-black bg-yellow-400 hover:bg-white hover:border-yellow-400 hover:border-2 py-2 px-2 rounded-[10px]">
                Prestasi Lainnya
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-section flex flex-col gap-5 px-4 py-10 text-center justify-center items-center w-full h-fit max-w-7xl">
          <div className="w-full flex justify-center font-bold text-[30px]">
            <div>Gallery</div>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center w-full text-black z-[2]">
            <div className="flex flex-col md:flex-row gap-4 w-fit cursor-pointer p-1">
              <div
                key={1}
                className="gallery-item flex flex-col rounded-xl bg-white"
                style={{
                  boxShadow: "-1px 4px 2px rgba(0,0,0,0.2)",
                }}
              >
                <div
                  className="relative"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                >
                  <img
                    src={Gallery1}
                    alt="Logo"
                    className="object-fill w-full"
                  />
                  <div className="gallery-item_title font-semibold w-full py-1 pl-2 text-start absolute bottom-0 text-white">
                    Ekstrakulikuler
                  </div>
                </div>
              </div>
              <div
                key={2}
                className="gallery-item flex flex-col rounded-xl bg-white"
                style={{
                  boxShadow: "-1px 4px 2px rgba(0,0,0,0.2)",
                }}
              >
                <div
                  className="relative"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                >
                  <img
                    src={Gallery2}
                    alt="Logo"
                    className="object-fill w-full"
                  />
                  <div className="gallery-item_title font-semibold w-full py-1 pl-2 text-start absolute bottom-0 text-white">
                    Osis
                  </div>
                </div>
              </div>
              <div
                key={3}
                className="gallery-item flex flex-col rounded-xl bg-white"
                style={{
                  boxShadow: "-1px 4px 2px rgba(0,0,0,0.2)",
                }}
              >
                <div
                  className="relative"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                >
                  <img
                    src={Gallery3}
                    alt="Logo"
                    className="object-fill w-full"
                  />
                  <div className="gallery-item_title font-semibold w-full py-1 pl-2 text-start absolute bottom-0 text-white">
                    Sekolah
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Beranda;
