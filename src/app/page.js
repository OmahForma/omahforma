"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  PencilRuler,
  BadgeCheck,
  House,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  } from "lucide-react";
import { Quote, Star } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [galleryOpen, setGalleryOpen] = useState(false);
const [galleryImages, setGalleryImages] = useState([]);
const [galleryIndex, setGalleryIndex] = useState(0);
const [touchStart, setTouchStart] = useState(null);
const [zoom, setZoom] = useState(1);
const [openFaq, setOpenFaq] = useState(null);

  // simple scroll tracking (aman, belum kompleks)
    useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 400) setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openGallery = (images, index = 0) => {
    setGalleryImages(images);
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
  setGalleryOpen(false);
  setZoom(1);
};

  const nextImage = () => {
    setZoom(1);

    setGalleryIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setZoom(1);
    
    setGalleryIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!galleryOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryOpen, galleryImages]);
    

  return (
    <main className="bg-[#f7f3ee] text-gray-800">

{/* ================= NAVBAR PREMIUM ================= */}
<header className="fixed top-0 left-0 w-full z-50 bg-[#f7f3ee]/90 backdrop-blur-xl border-b border-black/5">
  <div className="max-w-7xl mx-auto px-5 md:px-8 h-24 flex items-center justify-between">

    <a href="#home" className="flex items-center">
  <Image
  src="/image/logo/logo-transparan.png"
  alt="OmahForma Living Studio"
  width={420}
  height={110}
  priority
  className="h-20 w-auto object-contain transition-all duration-300"
/>
</a>

    <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#1f2937]">
      <a href="#home" className="hover:text-[#9b7b56] hover:tracking-wide duration-300 transition">Home</a>
      <a href="#portfolio" className="hover:text-[#9b7b56] transition">Portfolio</a>
      <a href="#services" className="hover:text-[#9b7b56] transition">Layanan</a>
      <a href="#faq" className="hover:text-[#9b7b56] transition">FAQ</a>
      <a href="#contact" className="hover:text-[#9b7b56] transition">Kontak</a>
    </nav>

    <a
      href="https://wa.me/62895634070878?text=Halo%20OmahForma%2C%20saya%20ingin%20konsultasi%20interior%20custom."
      onClick={() => {
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead");
        }
      }}
      className="bg-[#9b7b56] hover:bg-[#7f6548] text-white px-5 py-3 rounded-full text-sm font-semibold transition shadow-md"
    >
      WhatsApp
    </a>
  </div>
</header>

{/* ================= HERO PREMIUM ================= */}
<section id="home" className="relative min-h-screen lg:min-h-[1080px] overflow-hidden bg-[#f7f3ee] pt-28 md:pt-32">
  <div className="absolute inset-0 bg-gradient-to-br from-[#f7f3ee] via-[#f7f3ee] to-[#e7ddd0]" />

  <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center min-h-[88vh]">

    {/* KOLOM KIRI */}
    <div className="max-w-2xl">

      <p className="uppercase tracking-[4px] text-[#9b7b56] text-xs md:text-sm font-semibold mb-5">
        Interior Custom Premium
      </p>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#1f2937] mb-6">
        Wujudkan
        <span className="block">Interior</span>
        <span className="block text-[#9b7b56]">Nyaman.</span>
        <span className="block text-[#9b7b56]">Rapih.</span>
        <span className="block text-[#9b7b56]">Fungsional.</span>
      </h1>

      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5">
        OmahForma membantu membuat kitchen set, wardrobe, backdrop TV, partisi,
        meja custom, hingga interior lainnya sesuai kebutuhan ruang Anda.
      </p>

      <p className="text-sm md:text-base text-gray-500 mb-8">
        Produksi sendiri • Desain sesuai ruang • Finishing rapih • Konsultasi mudah via WhatsApp
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <a
          href="https://wa.me/62895634070878?text=Halo%20OmahForma%2C%20saya%20ingin%20konsultasi%20interior%20custom."
          onClick={() => {
            if (typeof window !== "undefined" && window.fbq) {
              window.fbq("track", "Lead");
            }
          }}
          className="bg-[#9b7b56] hover:bg-[#7f6548] text-white px-7 py-4 rounded-full text-center font-semibold shadow-xl hover:scale-105 duration-300"
        >
          Konsultasi Gratis →
        </a>

        <a
          href="#portfolio"
          className="border border-[#9b7b56]/40 text-[#1f2937] px-7 py-4 rounded-full text-center font-semibold hover:bg-white hover:shadow-lg duration-300"
        >
          Lihat Portfolio
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mt-8">

        <div className="bg-white rounded-2xl shadow-lg border border-[#e7ded2] p-5">
          <div className="flex items-center gap-3 mb-3">
  <PencilRuler
    size={24}
    strokeWidth={2}
    className="text-[#b08b5a]"
  />

  <p className="text-[#9b7b56] text-xl font-bold">
    Custom
  </p>
</div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Desain sesuai kebutuhan ruang
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-[#e7ded2] p-5">
          <div className="flex items-center gap-3 mb-3">
  <BadgeCheck
    size={24}
    strokeWidth={2}
    className="text-[#b08b5a]"
  />

  <p className="text-[#9b7b56] text-xl font-bold">
    Rapih
  </p>
</div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Finishing presisi dan detail
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-[#e7ded2] p-5">
          <div className="flex items-center gap-3 mb-3">
  <House
    size={24}
    strokeWidth={2}
    className="text-[#b08b5a]"
  />

  <p className="text-[#9b7b56] text-xl font-bold">
    Workshop
  </p>
</div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Berbasis di Yogyakarta
          </p>
        </div>

      </div>

    </div>

    {/* KOLOM KANAN */}
    <div className="relative">

      <div className="relative rounded-[3rem] overflow-hidden shadow-[0_45px_120px_rgba(0,0,0,.20)] border border-white/80 bg-white">

        <Image
          src="/image/hero/hero-kitchen.jpg"
          alt="Kitchen set custom premium OmahForma"
          width={1600}
          height={1738}
          priority
          className="w-full h-[620px] md:h-[760px] object-cover object-center brightness-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <div className="absolute left-10 bottom-16 bg-white/95 backdrop-blur-2xl rounded-[32px] p-7 shadow-[0_24px_70px_rgba(0,0,0,.18)] border border-white/80 max-w-[330px]">

  <div className="w-16 h-1 rounded-full bg-[#b08b5a] mb-5"></div>

  <p className="text-lg font-bold text-[#1f2937] mb-4">
    Kitchen Set Premium
  </p>

  <ul className="space-y-3.5 text-sm text-gray-600">
    <li className="flex items-center gap-3">
      <span className="w-7 h-7 rounded-full bg-[#b08b5a] text-white flex items-center justify-center text-xs shadow-md">
        ✓
      </span>
      Material HPL berkualitas
    </li>

    <li className="flex items-center gap-3">
      <span className="w-6 h-6 rounded-full bg-[#9b7b56] text-white flex items-center justify-center text-xs">
        ✓
      </span>
      Finishing presisi
    </li>

    <li className="flex items-center gap-3">
      <span className="w-6 h-6 rounded-full bg-[#9b7b56] text-white flex items-center justify-center text-xs">
        ✓
      </span>
      Produksi sendiri
    </li>
  </ul>

</div>

      </div>

    </div>

  </div>

</section>
{/* ================= PORTFOLIO ================= */}
<section id="portfolio" className="pt-14 pb-0 md:pt-24 md:pb-4 bg-[#f7f3ee]">
  <div className="max-w-7xl mx-auto px-5 md:px-8">

    <div className="text-center mb-12 md:mb-20">
      <p className="uppercase tracking-[5px] text-[#9b7b56] text-xs md:text-sm font-semibold mb-4">
        Portfolio
      </p>

      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1f2937]">
        Portfolio Kami
      </h2>

      <p className="text-base md:text-lg text-gray-500 mt-5 max-w-xl mx-auto">
        Klik gambar untuk melihat detail hasil pekerjaan OmahForma.
      </p>
    </div>

    {[
      {
        title: "Kitchen Set",
        desc: "Dapur modern, rapih, dan fungsional.",
        images: [
          "/image/portfolio/kitchen/kitchen-1.jpg",
          "/image/portfolio/kitchen/kitchen-2.jpg",
          "/image/portfolio/kitchen/kitchen-3.jpg",
        ],
      },
      {
        title: "Backdrop TV",
        desc: "Ruang keluarga lebih elegan.",
        images: [
          "/image/portfolio/tv-cabinet/backdrop-1.jpg",
          "/image/portfolio/tv-cabinet/backdrop-2.jpg",
          "/image/portfolio/tv-cabinet/backdrop-3.jpg",
        ],
      },
      {
        title: "Bedroom Set",
        desc: "Kamar nyaman dan minimalis.",
        images: [
          "/image/portfolio/bedroom/bedroom-1.jpg",
          "/image/portfolio/bedroom/bedroom-2.jpg",
          "/image/portfolio/bedroom/bedroom-3.jpg",
        ],
      },
    ].map((project, i) => (
      <div
        key={i}
        className={i === 2 ? "mb-0" : "mb-12 md:mb-20"}
      >
        <div className="mb-6 md:mb-8">
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1f2937] mb-3">
            {project.title}
          </h3>

          <p className="text-base md:text-lg text-gray-500">
            {project.desc}
          </p>
        </div>

        <div className="bg-white rounded-[28px] md:rounded-[42px] p-3 md:p-5 border border-[#e7ded2] shadow-[0_24px_70px_rgba(0,0,0,.10)]">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-[220px] sm:h-[300px] md:h-[560px] object-cover rounded-[22px] md:rounded-[34px] cursor-pointer"
            onClick={() => openGallery(project.images, 0)}
          />

          <div className="grid grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-5">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.title} ${idx + 1}`}
                className="w-full h-24 sm:h-32 md:h-40 object-cover rounded-xl md:rounded-2xl border border-[#e7ded2] cursor-pointer hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                onClick={() => openGallery(project.images, idx)}
              />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

{/* ================= KEUNGGULAN ================= */}
<section className="pt-6 pb-16 md:pt-10 md:pb-28 bg-gradient-to-b from-[#f7f3ee] via-white to-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-10 md:mb-16">
      <p className="uppercase tracking-[6px] text-[#9b7b56] text-sm font-semibold mb-5">
        Kenapa Memilih Kami
      </p>

      <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1f2937] mb-8">
        Interior Bukan Sekadar Bagus
      </h2>

      <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
        Kami membantu menciptakan ruang yang nyaman, fungsional,
        dan sesuai kebutuhan aktivitas sehari-hari.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      <div className="bg-[#f7f3ee] p-10 rounded-[36px] shadow-[0_18px_50px_rgba(0,0,0,.08)] border border-[#e9dfd3] group hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,0,0,.12)] hover:border-[#d8c4ab] transition-all duration-500">
        <div className="mb-6 w-16 h-16 rounded-2xl bg-[#9b7b56]/8 flex items-center justify-center text-[#9b7b56] text-2xl transition-all duration-300 group-hover:bg-[#9b7b56] group-hover:text-white">
          <Sparkles size={30} strokeWidth={2} />
        </div>
        <h3 className="text-2xl font-semibold mb-4 transition-colors duration-500 group-hover:text-[#9b7b56]">
          Custom Design
        </h3>
        <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-700">
          Semua desain disesuaikan dengan ukuran dan kebutuhan ruang Anda.
        </p>
      </div>

      <div className="bg-[#f7f3ee] p-10 rounded-[36px] shadow-[0_18px_50px_rgba(0,0,0,.08)] border border-[#e9dfd3] group hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,0,0,.12)] hover:border-[#d8c4ab] transition-all duration-500">
        <div className="mb-6 w-16 h-16 rounded-2xl bg-[#9b7b56]/8 flex items-center justify-center text-[#9b7b56] text-2xl transition-all duration-300 group-hover:bg-[#9b7b56] group-hover:text-white">
          <ShieldCheck size={30} strokeWidth={2} />
        </div>
        <h3 className="text-2xl font-semibold mb-4 transition-colors duration-500 group-hover:text-[#9b7b56]">
          Material Berkualitas
        </h3>
        <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-700">
          Menggunakan multipleks dan finishing berkualitas untuk hasil tahan lama.
        </p>
      </div>

      <div className="bg-[#f7f3ee] p-10 rounded-[36px] shadow-[0_18px_50px_rgba(0,0,0,.08)] border border-[#e9dfd3] group hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,0,0,.12)] hover:border-[#d8c4ab] transition-all duration-500">
        <div className="mb-6 w-16 h-16 rounded-2xl bg-[#9b7b56]/8 flex items-center justify-center text-[#9b7b56] text-2xl transition-all duration-300 group-hover:bg-[#9b7b56] group-hover:text-white">
          <MessageCircle size={30} strokeWidth={2} />
        </div>
        <h3 className="text-2xl font-semibold mb-4 transition-colors duration-500 group-hover:text-[#9b7b56]">
          Harga Transparan
        </h3>
        <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-700">
          Estimasi biaya jelas sebelum produksi dimulai.
        </p>
      </div>
    </div>

  </div>
</section>

{/* ================= LAYANAN ================= */}
<section id="services" className="py-16 md:py-32 bg-[#f7f3ee]">
  <div className="max-w-[1500px] mx-auto px-8">

    <div className="text-center mb-20">
      <p className="uppercase tracking-[6px] text-[#9b7b56] text-sm font-semibold mb-5">
        Layanan OmahForma
      </p>

      <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-[#1f2937] mb-8">
        Interior Custom Sesuai Kebutuhan Ruang
      </h2>

      <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
        Kami membantu membuat berbagai kebutuhan interior custom untuk hunian maupun ruang usaha.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">

      {[
        {
          icon: <PencilRuler size={30} strokeWidth={2} />,
          title: "Kitchen Set",
          desc: "Dapur custom yang rapih, fungsional, dan disesuaikan dengan ukuran ruang."
        },
        {
          icon: <House size={30} strokeWidth={2} />,
          title: "Wardrobe & Lemari",
          desc: "Penyimpanan custom untuk kamar, ruang keluarga, maupun area kerja."
        },
        {
          icon: <BadgeCheck size={30} strokeWidth={2} />,
          title: "Backdrop TV",
          desc: "Backdrop dan kabinet TV untuk ruang keluarga yang lebih elegan."
        },
        {
          icon: <Sparkles size={30} strokeWidth={2} />,
          title: "Partisi Interior",
          desc: "Partisi custom untuk membagi ruang tanpa menghilangkan kesan lega."
        },
        {
          icon: <ShieldCheck size={30} strokeWidth={2} />,
          title: "Meja Custom",
          desc: "Meja kerja, meja rias, meja kasir, hingga kebutuhan furniture custom lainnya."
        },
        {
          icon: <MessageCircle size={30} strokeWidth={2} />,
          title: "Interior Lainnya",
          desc: "Kebutuhan interior lain dapat dikonsultasikan sesuai kondisi dan kebutuhan ruang."
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group bg-white p-10 rounded-[38px] border border-[#e9dfd3] shadow-[0_18px_50px_rgba(0,0,0,.07)] hover:-translate-y-2 hover:border-[#d8c4ab] hover:shadow-[0_28px_70px_rgba(0,0,0,.12)] transition-all duration-500"
        >
          <div className="mb-8 w-20 h-20 rounded-2xl bg-[#9b7b56]/10 flex items-center justify-center text-[#9b7b56] transition-all duration-500 group-hover:bg-[#9b7b56] group-hover:text-white group-hover:scale-110">
            {item.icon}
          </div>

          <h3 className="text-[30px] font-semibold mb-4 text-[#1f2937] transition-colors duration-500 group-hover:text-[#9b7b56]">
            {item.title}
          </h3>

          <p className="text-[17px] leading-8 text-gray-600 transition-colors duration-500 group-hover:text-gray-700">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
{/* ================= PROSES KERJA ================= */}
<section className="py-16 md:py-32 bg-white">
  <div className="max-w-[1200px] mx-auto px-6">

    <div className="text-center mb-20">
      <p className="uppercase tracking-[6px] text-[#9b7b56] text-sm font-semibold mb-5">
        Cara Kerja Kami
      </p>

      <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-[#1f2937] mb-8">
        Proses Pengerjaan Interior
      </h2>

      <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
        Setiap proyek dikerjakan secara terstruktur mulai dari konsultasi hingga instalasi,
        agar hasil sesuai ekspektasi dan tanpa kejutan biaya.
      </p>
    </div>

    <div className="space-y-8">

      {[
        {
          step: "01",
          title: "Konsultasi Awal",
          desc: "Diskusi kebutuhan ruang, konsep desain, ukuran area, serta estimasi budget awal melalui WhatsApp atau pertemuan langsung.",
          time: "Estimasi: 15–30 menit",
        },
        {
          step: "02",
          title: "Survey & Pengukuran",
          desc: "Tim datang ke lokasi untuk melakukan pengukuran detail dan analisa ruang agar desain sesuai kondisi lapangan.",
          time: "Estimasi: 1 hari",
        },
        {
          step: "03",
          title: "Desain & Penawaran",
          desc: "Pembuatan konsep desain, detail material, dan estimasi biaya secara transparan sebelum masuk tahap produksi.",
          time: "Estimasi: 2–5 hari",
        },
        {
          step: "04",
          title: "Produksi",
          desc: "Proses pengerjaan dilakukan di workshop dengan kontrol kualitas agar hasil sesuai desain yang telah disepakati.",
          time: "Estimasi: 1–4 minggu",
        },
        {
          step: "05",
          title: "Instalasi & Finishing",
          desc: "Pemasangan di lokasi hingga selesai, dilanjutkan pengecekan akhir agar detail terlihat rapih dan siap digunakan.",
          time: "Estimasi: 1–3 hari",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group bg-[#f7f3ee] px-12 py-7 rounded-[36px] border border-[#e9dfd3] shadow-[0_18px_50px_rgba(0,0,0,.08)] hover:-translate-y-1 hover:border-[#d8c4ab] hover:shadow-[0_28px_70px_rgba(0,0,0,.12)] transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">

            <div className="w-16 h-16 rounded-3xl bg-[#9b7b56]/10 text-[#9b7b56] flex items-center justify-center text-2xl font-bold transition-all duration-500 group-hover:bg-[#9b7b56] group-hover:text-white group-hover:scale-110">
              {item.step}
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-semibold text-[#1f2937] mb-4 transition-colors duration-500 group-hover:text-[#9b7b56]">
                {item.title}
              </h3>

              <p className="text-lg text-gray-600 leading-8 max-w-3xl">
                {item.desc}
              </p>

              <p className="inline-flex mt-6 px-5 py-3 rounded-full bg-white border border-[#e7ded2] text-sm font-medium text-[#9b7b56]">
                {item.time}
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>
{/* ================= TESTIMONI (FINAL CONVERSION TRUST) ================= */}
<section id="testimoni" className="py-16 md:py-28 bg-[#f7f3ee]">

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-20">

      <p className="uppercase tracking-[6px] text-[#9b7b56] text-sm font-semibold mb-5">
        Testimoni Klien
      </p>

      <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1f2937] mb-8">
        Kepercayaan yang Dibangun dari Hasil Nyata
      </h2>

      <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
        Setiap proyek dikerjakan dengan perhatian terhadap detail, komunikasi yang jelas, dan kualitas pengerjaan yang konsisten.
      </p>

    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          name: "Ibu Rina",
          text: "Kitchen set yang kami terima sangat rapi, materialnya sesuai penjelasan, dan proses pengerjaan berjalan sesuai jadwal."
        },
        {
          name: "Bapak Adi",
          text: "Backdrop TV membuat ruang keluarga terlihat jauh lebih elegan. Tim sangat komunikatif sejak konsultasi hingga pemasangan."
        },
        {
          name: "Ibu Sari",
          text: "Desain, kualitas pengerjaan, dan pelayanan semuanya memuaskan. Hasil akhirnya bahkan melebihi ekspektasi kami."
        }
      ].map((item, i) => (

        <div
          key={i}
          className="group bg-white p-10 rounded-[36px] border border-[#e9dfd3] shadow-[0_18px_50px_rgba(0,0,0,.07)] hover:-translate-y-2 hover:border-[#d8c4ab] hover:shadow-[0_28px_70px_rgba(0,0,0,.12)] transition-all duration-500 flex flex-col h-full"
        >

          {/* QUOTE */}
          <div className="mb-6 w-16 h-16 rounded-2xl bg-[#9b7b56]/10 flex items-center justify-center text-[#9b7b56] transition-all duration-500 group-hover:bg-[#9b7b56] group-hover:text-white group-hover:scale-110">
            <Quote size={28} strokeWidth={2} />
          </div>

          {/* RATING */}
          <div className="flex gap-1 text-[#9b7b56] mb-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                fill="currentColor"
                strokeWidth={1.5}
              />
            ))}
          </div>

          {/* TESTIMONI */}
          <div className="flex-1">

            <p className="text-lg leading-8 text-gray-600">
              {item.text}
            </p>

          </div>

          {/* FOOTER */}
          <div className="mt-10">

            <h3 className="text-[28px] font-semibold text-[#1f2937]">
              {item.name}
            </h3>

            <p className="text-sm text-[#9b7b56] mt-1">
              Klien OmahForma Living Studio
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= FAQ (FINAL ACCORDION CLOSED DEFAULT) ================= */}
<section id="faq" className="py-14 md:py-28 bg-white">
  <div className="max-w-4xl mx-auto px-6">
<p className="uppercase tracking-[6px] text-[#9b7b56] text-sm font-semibold mb-5">
  FAQ OmahForma
</p>
    {/* HEADER */}
    <div className="text-center mb-14">
      <h2 className="text-5xl font-bold mb-4">
        Jawaban Sebelum Memulai Proyek Interior
      </h2>

      <p className="text-gray-600">
        Temukan jawaban atas pertanyaan yang paling sering diajukan sebelum memulai konsultasi bersama OmahForma.
      </p>
    </div>

    {/* FAQ LIST */}
    {[
      ["Berapa harga kitchen set?", "Harga tergantung ukuran, material, dan desain yang dipilih."],
      ["Apakah bisa custom desain?", "Ya, semua pengerjaan full custom sesuai kebutuhan ruang."],
      ["Apakah ada survey lokasi?", "Ya, kami melakukan survey sebelum produksi dimulai."],
      ["Berapa lama pengerjaan?", "Rata-rata 2–4 minggu tergantung tingkat kesulitan proyek."],
      ["Apakah ada garansi?", "Ya, garansi diberikan sesuai kesepakatan pekerjaan."],

      ["Apakah bisa 1 ruangan saja?", "Bisa, mulai dari 1 item sampai full interior rumah."],
      ["Apakah melayani luar kota?", "Ya, tergantung skala proyek dan kesepakatan."],
      ["Apakah bisa pilih material sendiri?", "Bisa, kami menyediakan beberapa pilihan material."],
      ["Apakah desain dibuat sebelum produksi?", "Ya, desain dibuat terlebih dahulu sebagai acuan."],
      ["Bagaimana sistem pembayaran?", "Pembayaran dilakukan bertahap sesuai progress kerja."],

      ["Apakah konsultasi gratis?", "Ya, konsultasi awal tidak dipungut biaya."],
      ["Apakah bisa renovasi rumah lama?", "Bisa, termasuk upgrade interior lama."],
      ["Apakah melayani kantor atau bisnis?", "Ya, termasuk kantor, cafe, kos, dan hotel."],
      ["Apakah ada estimasi biaya awal?", "Ada, berdasarkan ukuran dan kebutuhan awal."],
      ["Bagaimana cara order?", "Hubungi kami via WhatsApp untuk konsultasi awal."],
    ].map((faq, i) => (
      <div
  key={i}
  className="group border-b border-[#e9dfd3] md:bg-[#f7f3ee] md:rounded-[30px] md:border md:shadow-[0_14px_40px_rgba(0,0,0,.06)] md:hover:border-[#d8c4ab] md:hover:-translate-y-1 md:hover:shadow-[0_24px_60px_rgba(0,0,0,.10)] transition-all duration-300 overflow-hidden"
>

        {/* QUESTION BUTTON */}
        <button
          onClick={() =>
            setOpenFaq(openFaq === i ? null : i)
          }
          className="w-full flex justify-between items-center px-1 py-2.5 md:px-6 md:py-5 text-left hover:bg-black/[0.02] transition"
        >
          <span className="font-medium text-[14px] leading-snug md:text-base md:font-semibold text-gray-800 pr-4">
            {faq[0]}
          </span>

         <span className="text-xl md:text-[30px] text-[#9b7b56] transition-all duration-300">
            {openFaq === i ? "−" : "+"}
          </span>
        </button>

        {/* ANSWER (HIDDEN DEFAULT) */}
        <div
          
         className={`border-t border-[#e9dfd3] px-1 pt-2 pb-3 md:pl-14 md:pr-8 md:pt-4 md:pb-7 text-sm md:text-base text-gray-500 leading-6 md:leading-8 transition-all duration-300 overflow-hidden ${
  openFaq === i
    ? "max-h-40 opacity-100"
    : "max-h-0 pt-0 pb-0 opacity-0"
}`}
        >
          {faq[1]}
        </div>

      </div>
    ))}

  </div>
</section>
{/* ================= CTA FINAL ================= */}
<section
  id="contact"
  className="relative overflow-hidden py-16 md:py-32 bg-[#1f2937] text-white"
>

  {/* Background Decoration */}
  <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#9b7b56]/10 blur-[150px]" />

  <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#9b7b56]/10 blur-[150px]" />

  <div className="relative max-w-6xl mx-auto px-6 text-center">

    {/* Label */}
    <p className="uppercase tracking-[6px] text-[#c8a97e] text-sm font-semibold mb-5">
      Mulai Konsultasi
    </p>

    {/* Title */}
    <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
      Wujudkan Interior yang
      <br />
      Nyaman, Fungsional, dan Bernilai.
    </h2>

    {/* Description */}
    <p className="max-w-3xl mx-auto text-[20px] leading-9 text-gray-300 mb-12">
      Diskusikan kebutuhan ruang Anda bersama tim OmahForma.
      Kami siap membantu mulai dari konsultasi, desain,
      hingga proses produksi dan instalasi secara profesional.
    </p>

    {/* Benefit */}
    <div className="flex flex-wrap justify-center gap-4 mb-14">

      <div className="px-6 py-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500">
        ✓ Konsultasi Awal Gratis
      </div>

      <div className="px-6 py-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500">
        ✓ Desain Sesuai Kebutuhan
      </div>

      <div className="px-6 py-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500">
        ✓ Produksi Sendiri
      </div>

      <div className="px-6 py-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500">
        ✓ Material Berkualitas
      </div>

    </div>

    {/* CTA BUTTON */}
    <a
      href="https://wa.me/62895634070878?text=Halo%20OmahForma%2C%20saya%20ingin%20konsultasi%20interior%20custom."
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead");
        }
      }}
      className="inline-flex items-center gap-3 px-14 py-6 rounded-full bg-[#9b7b56] text-white text-[18px] font-semibold shadow-[0_18px_40px_rgba(155,123,86,.35)] hover:bg-[#b28c63] hover:scale-105 transition-all duration-500"
    >
      <MessageCircle size={24} />
      Konsultasi via WhatsApp
    </a>

    {/* Small Note */}
    <p className="mt-8 text-sm text-gray-400">
      Respon secepatnya pada jam operasional.
    </p>

  </div>

</section>

{/* ================= LOKASI ================= */}
<section
  id="lokasi"
  className="py-16 md:py-32 bg-gradient-to-b from-[#faf8f5] to-white"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-16">

      <p className="uppercase tracking-[5px] text-[#9b7b56] text-sm font-semibold mb-4">
        LOKASI WORKSHOP
      </p>

      <h2 className="text-[54px] leading-[60px] font-bold text-[#1f2937] mb-6">
        Kunjungi Workshop Kami
      </h2>

      <p className="max-w-3xl mx-auto text-[20px] leading-9 text-gray-600">
        Workshop kami berada di Sleman, Yogyakarta. Silakan datang dengan membuat
        janji terlebih dahulu agar tim dapat melayani konsultasi secara maksimal.
      </p>

    </div>

    {/* CONTENT */}
    <div className="grid lg:grid-cols-5 gap-10 items-center">

      {/* INFO */}
      <div className="lg:col-span-2">

        <div className="bg-white rounded-[36px] border border-[#e9dfd3] p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)] hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,.12)] transition-all duration-500">

          <h3 className="text-[40px] font-bold leading-tight text-[#1f2937]">
  OmahForma Living Studio
</h3>
         
          <div className="space-y-6">

            <div>
              <p className="text-sm uppercase tracking-[3px] text-[#9b7b56] mb-2">
                Workshop
              </p>

              <p className="text-gray-600 leading-8">
                Gamping, Sleman<br />
                Daerah Istimewa Yogyakarta
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[3px] text-[#9b7b56] mb-2">
                Area Layanan
              </p>

              <p className="text-gray-600 leading-8">
                Seluruh DIY, Jawa Tengah,
                dan luar kota sesuai skala proyek.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[3px] text-[#9b7b56] mb-2">
                Jam Operasional
              </p>

              <p className="text-gray-600 leading-8">
                Senin - Sabtu<br />
                08.00 - 17.00 WIB
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* MAP */}
      <div className="lg:col-span-3">

        <div className="rounded-[36px] overflow-hidden border border-[#e9dfd3] shadow-[0_25px_70px_rgba(0,0,0,.10)]">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.970705458336!2d110.31017770000001!3d-7.792926299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af7c237b85d69%3A0x671db6e311eeb6c2!2sTMJ%20Interior%20Workshop!5e0!3m2!1sen!2sid!4v1780035962097!5m2!1sen!2sid"
            className="w-full h-[520px] border-0"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </div>

    </div>

  </div>
</section>

{/* ================= FOOTER ================= */}
<footer className="bg-[#151515] text-white">

  <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">

    <div className="grid md:grid-cols-4 gap-16">

      {/* BRAND */}
      <div>

        <Image
          src="/image/logo/logo-transparan1.png"
          alt="OmahForma Living Studio"
          width={500}
          height={140}
          className="w-auto h-20 object-contain -mt-2 mb-10"
        />

        <p className="mt-8 text-gray-400 leading-10 max-w-[270px]">
          Interior custom premium untuk hunian dan ruang usaha dengan proses yang rapi, transparan, dan berkualitas.
        </p>

      </div>

      {/* NAVIGASI */}
      <div>

        <h4 className="text-[#c8a06b] font-semibold text-lg mb-5">
          Navigasi
        </h4>

        <ul className="space-y-3 text-gray-400">

          <li>
            <a href="#home" className="hover:text-[#c8a06b] transition-all duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#portfolio" className="hover:text-[#c8a06b] transition-all duration-300">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-[#c8a06b] transition-all duration-300">
              Layanan
            </a>
          </li>

          <li>
            <a href="#faq" className="hover:text-[#c8a06b] transition-all duration-300">
              FAQ
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#c8a06b] transition-all duration-300">
              Kontak
            </a>
          </li>

        </ul>

      </div>

      {/* LAYANAN */}
      <div>

        <h4 className="text-[#c8a06b] font-semibold text-lg mb-5">
          Layanan
        </h4>

        <ul className="space-y-3 text-gray-400">

          <li className="hover:text-white transition-all duration-300 cursor-default">
            Kitchen Set
          </li>

          <li className="hover:text-white transition-all duration-300 cursor-default">
            Wardrobe
          </li>

          <li className="hover:text-white transition-all duration-300 cursor-default">
            Backdrop TV
          </li>

          <li className="hover:text-white transition-all duration-300 cursor-default">
            Interior Custom
          </li>

          <li className="hover:text-white transition-all duration-300 cursor-default">
            Furniture Built-in
          </li>

        </ul>

      </div>

      {/* HUBUNGI KAMI */}
      <div>

        <h4 className="text-[#c8a06b] font-semibold text-lg mb-5">
          Hubungi Kami
        </h4>

        <div className="space-y-3 text-gray-400 leading-8">

          <p>Sleman, Yogyakarta</p>

          <p>
            WhatsApp
            <br />
            <a
              href="https://wa.me/62895634070878?text=Halo%20OmahForma%2C%20saya%20ingin%20konsultasi%20interior%20custom."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c8a06b] transition-all duration-300"
            >
              0895-1510-4010
            </a>
          </p>

          <p>
            Senin - Sabtu
            <br />
            08.00 - 17.00 WIB
          </p>

        </div>

      </div>

    </div>

    {/* COPYRIGHT */}

    <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-600 text-[15px]">

      © {new Date().getFullYear()} OmahForma Living Studio. All Rights Reserved.

    </div>

  </div>

</footer>
{/* ================= GALLERY VIEWER ================= */}
{galleryOpen && galleryImages.length > 0 && (
  <div
    className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center px-4 py-6"
    onClick={closeGallery}
    onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
    onTouchEnd={(e) => {
      if (touchStart === null) return;

      const touchEnd = e.changedTouches[0].clientX;
      const distance = touchStart - touchEnd;

      if (distance > 60) nextImage();
      if (distance < -60) prevImage();

      setTouchStart(null);
    }}
  >
    <button
      className="absolute top-5 right-5 text-white text-4xl z-20"
      onClick={(e) => {
        e.stopPropagation();
        closeGallery();
      }}
    >
      ×
    </button>

    {galleryImages.length > 1 && (
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white text-5xl z-20 bg-white/10 hover:bg-white/20 rounded-full w-14 h-14 flex items-center justify-center"
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
      >
        ‹
      </button>
    )}

    {galleryImages.length > 1 && (
      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white text-5xl z-20 bg-white/10 hover:bg-white/20 rounded-full w-14 h-14 flex items-center justify-center"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
      >
        ›
      </button>
    )}

    <div
      className="max-w-6xl w-full flex flex-col items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        key={galleryIndex}
        src={galleryImages[galleryIndex]}
        alt="Portfolio OmahForma"
        className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl transition-opacity duration-300"
      />

      <div className="text-white/80 text-sm mt-4">
        {galleryIndex + 1} / {galleryImages.length}
      </div>

      <div className="flex gap-3 mt-5 overflow-x-auto max-w-full pb-2">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setGalleryIndex(idx)}
            className={`w-20 h-16 md:w-28 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              galleryIndex === idx
                ? "border-[#c59b5f] scale-105 shadow-xl opacity-100"
                : "border-white/20 opacity-60 hover:opacity-100 hover:scale-105"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  </div>
)}
    </main>
  );
}