import Beranda from "./pages/Beranda";

// Profile
import Sejarah from "./pages/Profile/Sejarah";
import StrukturOrganisasi from "./pages/Profile/StrukturOrganisasi";
import VisiMisi from "./pages/Profile/VisiMisi";
import Prestasi from "./pages/Profile/Prestasi";
import Guru from "./pages/Profile/Guru";
import Pegawai from "./pages/Profile/Pegawai";

// Bidang
import Humas from "./pages/Bidang/Humas";
import Kurikulum from "./pages/Bidang/Kurikulum";
import Kesiswaan from "./pages/Bidang/Kesiswaan";
import SaranaPrasarana from "./pages/Bidang/SaranaPrasarana";

// Informasi
import Berita from "./pages/Informasi/Berita";
import KalenderAkademik from "./pages/Informasi/KalenderAkademik";

// Gallery
import Sekolah from "./pages/Gallery/Sekolah";
import Osis from "./pages/Gallery/Osis";
import Ekstrakurikuler from "./pages/Gallery/Ekstrakurikuler";

import Alumni from "./pages/Alumni";
import Kontak from "./pages/Kontak";

const routes = {
  list_menu: [
    {
      name: "Beranda",
      slug: "beranda",
      child: false,
    },
    {
      name: "Profil",
      slug: "profil",
      child: true,
    },
    {
      name: "Bidang",
      slug: "bidang",
      child: true,
    },
    {
      name: "Gallery",
      slug: "gallery",
      child: true,
    },
    {
      name: "Alumni",
      slug: "alumni",
      child: false,
    },
    {
      name: "Kontak",
      slug: "kontak",
      child: false,
    },
  ],
  detail_menu: [
    {
      name: "Beranda",
      slug: "beranda",
      path: "/",
      component: <Beranda navstyle={"transparent"} />,
      child: [],
    },
    {
      name: "Profil",
      slug: "profil",
      path: "",
      navbar: "",
      component: "",
      child: [
        {
          name: "Sejarah",
          path: "/profil/sejarah",
          navbar: "transparent",
          component: <Sejarah />,
        },
        {
          name: "Struktur Organisasi",
          path: "/profil/struktur-organisasi",
          navbar: "default",
          component: <StrukturOrganisasi />,
        },
        {
          name: "Visi & Misi",
          path: "/profil/visi-misi",
          navbar: "default",
          component: <VisiMisi />,
        },
        {
          name: "Prestasi Siswa",
          path: "/profil/prestasi-siswa",
          navbar: "transparent",
          component: <Prestasi />,
        },
        {
          name: "Guru",
          path: "/profil/guru",
          navbar: "transparent",
          component: <Guru />,
        },
        {
          name: "Pegawai",
          path: "/profil/Pegawai",
          navbar: "transparent",
          component: <Pegawai />,
        },
      ],
    },
    {
      name: "Bidang",
      path: "",
      slug: "bidang",
      component: "",
      child: [
        {
          name: "Humas",
          path: "/bidang/humas",
          navbar: "default",
          component: <Humas />,
        },
        {
          name: "Kurikulum",
          path: "/bidang/kurikulum",
          navbar: "default",
          component: <Kurikulum />,
        },
        {
          name: "Kesiswaan",
          path: "/bidang/kesiswaan",
          navbar: "default",
          component: <Kesiswaan />,
        },
        {
          name: "Sarana & Prasarana",
          path: "/akademik/sarana-prasarana",
          navbar: "default",
          component: <SaranaPrasarana />,
        },
      ],
    },
    {
      name: "Informasi",
      path: "",
      slug: "informasi",
      component: "",
      child: [
        {
          name: "Berita",
          path: "/akademik/program-studi",
          navbar: "default",
          component: <Berita />,
        },
        {
          name: "KalenderAkademik Akademik",
          path: "/akademik/info-beasiswa",
          navbar: "default",
          component: <KalenderAkademik />,
        },
      ],
    },
    {
      name: "Gallery",
      path: "",
      slug: "gallery",
      component: "",
      child: [
        {
          name: "Sekolah",
          path: "/akademik/program-studi",
          navbar: "default",
          component: <Sekolah />,
        },
        {
          name: "Osis",
          path: "/akademik/info-beasiswa",
          navbar: "default",
          component: <Osis />,
        },
        {
          name: "Ekstrakurikuler",
          path: "/akademik/agenda-akademik",
          navbar: "default",
          component: <Ekstrakurikuler />,
        },
      ],
    },
    {
      name: "Alumni",
      path: "/alumni",
      navbar: "default",
      slug: "alumni",
      component: <Alumni />,
      child: [],
    },
    {
      name: "Kontak",
      path: "/kontak",
      navbar: "default",
      slug: "kontak",
      component: <Kontak />,
      child: [],
    },
  ],
};

export default routes;
