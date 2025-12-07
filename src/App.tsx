import svgPaths from "./imports/svg-i2f3bc265w";
import imgFrame37 from "figma:asset/224cfb22d7b45a92bef58e2566084927bd7f07c8.png";
import imgCatatIniJenisImunisasi18BulanYangPerluAnakDapatkanHalodoc1 from "figma:asset/7d20df312cf81cc997b023e21b890148d108b08c.png";
import { motion, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Facebook, Twitter, Instagram, MapPin, Phone } from "lucide-react";

// Animation Variants
const navItemVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const buttonVariants = {
  initial: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: { 
    scale: 1.06,
    boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  tap: { scale: 0.98 }
};

const iconVariants = {
  initial: { y: 0 },
  hover: { 
    y: -4,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.06,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -6,
    boxShadow: "0px 12px 24px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

// Ken Burns Effect for Hero Background
const kenBurnsVariants = {
  initial: { scale: 1 },
  animate: {
    scale: 1.1,
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

// Staggered Text Reveal
const headingLineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Read More Link Animation
const readMoreVariants = {
  initial: { x: 0 },
  hover: {
    x: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Image Zoom Animation
const imageZoomVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Footer animations
const socialIconVariants = {
  initial: { y: 0, backgroundColor: "#667085" },
  hover: {
    y: -5,
    backgroundColor: "#00bba7",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const footerLinkVariants = {
  initial: { x: 0, color: "#ffffff" },
  hover: {
    x: 5,
    color: "#00bba7",
    transition: {
      duration: 0.25,
      ease: "easeOut"
    }
  }
};

// Count-up Hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth count-up
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return { count, ref: countRef };
}

// Logo Component
function Logo() {
  return (
    <div className="bg-gradient-to-b from-[#d7c01f] to-[#2a9c82] flex items-center justify-center p-3 rounded-lg size-12 shrink-0">
      <p className="font-['Poppins:Bold',sans-serif] text-2xl text-white">L</p>
    </div>
  );
}

// Site Title Component
function SiteTitle() {
  return (
    <div className="flex flex-col items-start text-white">
      <p className="font-['Poppins:Bold',sans-serif] text-lg sm:text-xl md:text-[22px] leading-tight">Dinas Kesehatan</p>
      <p className="font-['Poppins:Regular',sans-serif] text-xs sm:text-sm">Kabupaten Lumajang</p>
    </div>
  );
}

// Header Logo and Title
function HeaderBrand() {
  return (
    <div className="flex gap-4 items-center">
      <Logo />
      <SiteTitle />
    </div>
  );
}

// Navigation Menu
function Navigation() {
  return (
    <div className="hidden lg:flex font-['Poppins:Bold',sans-serif] gap-2 items-center justify-center text-[15px] lg:text-[17px] text-white">
      <motion.p 
        initial="initial" 
        whileHover="hover" 
        variants={navItemVariants} 
        className="px-3 lg:px-[18px] cursor-pointer"
      >
        Beranda
      </motion.p>
      <motion.p 
        initial="initial" 
        whileHover="hover" 
        variants={navItemVariants} 
        className="px-3 lg:px-[18px] cursor-pointer"
      >
        Profil
      </motion.p>
      <motion.p 
        initial="initial" 
        whileHover="hover" 
        variants={navItemVariants} 
        className="px-3 lg:px-[18px] cursor-pointer whitespace-nowrap"
      >
        Layanan Publik
      </motion.p>
      <motion.p 
        initial="initial" 
        whileHover="hover" 
        variants={navItemVariants} 
        className="px-3 lg:px-[18px] cursor-pointer"
      >
        Informasi
      </motion.p>
    </div>
  );
}

// Contact Button
function ContactButton() {
  return (
    <motion.div 
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants} 
      className="bg-[#00bba7] flex items-center justify-center px-4 py-2 lg:p-[10px] rounded-[17px] cursor-pointer"
    >
      <p className="font-['Poppins:Bold',sans-serif] text-sm lg:text-[16px] text-white whitespace-nowrap">Kontak Kami</p>
    </motion.div>
  );
}

// Header Navigation with Menu and Contact
function HeaderNav() {
  return (
    <div className="flex gap-4 lg:gap-[27px] items-center">
      <Navigation />
      <ContactButton />
    </div>
  );
}

// Main Header Component
function Header() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-0 w-full">
      <HeaderBrand />
      <HeaderNav />
    </div>
  );
}

// Badge Component
function PortalBadge() {
  return (
    <div className="flex h-[31px] items-center justify-center relative rounded-[20px] border border-[#008c7d] px-2">
      <div className="size-6 shrink-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.p2520fd00} fill="var(--fill-0, #28AA69)" />
          </g>
        </svg>
      </div>
      <p className="font-['Poppins:SemiBold',sans-serif] text-sm text-white whitespace-nowrap">Portal Resmi Kesehatan</p>
    </div>
  );
}

// Hero Headline with Staggered Text Reveal
function HeroHeadline() {
  return (
    <div className="flex flex-col gap-4 md:gap-5 items-start text-white w-full">
      <div className="font-['Poppins:Bold',sans-serif] leading-[120%] w-full text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px]">
        <motion.p 
          custom={0}
          initial="hidden"
          animate="visible"
          variants={headingLineVariants}
          className="mb-0"
        >
          Melayani dengan Hati,
        </motion.p>
        <motion.p 
          custom={1}
          initial="hidden"
          animate="visible"
          variants={headingLineVariants}
          className="bg-clip-text bg-gradient-to-r from-[#99f7e2] to-[#ffe82c]" 
          style={{ WebkitTextFillColor: "transparent" }}
        >
          Menuju Lumajang Sehat
        </motion.p>
      </div>
      <motion.div 
        custom={2}
        initial="hidden"
        animate="visible"
        variants={headingLineVariants}
        className="font-['Poppins:Light',sans-serif] leading-[140%] text-sm sm:text-base md:text-lg"
      >
        <p className="mb-0">Akses Layanan kesehatan terpadu informasi terkini, dan fasilitas kesehatan</p>
        <p>Kabupaten Lumajang dalam satu genggaman.</p>
      </motion.div>
    </div>
  );
}

// Hero Content (Badge + Headline)
function HeroContent() {
  return (
    <div className="flex flex-col gap-6 items-start w-full lg:max-w-[799px]">
      <PortalBadge />
      <HeroHeadline />
    </div>
  );
}

// Statistic Card Icon (Puskesmas)
function PuskesmasIcon() {
  return (
    <div className="bg-[#00bba7] flex items-center justify-center p-4 rounded-lg shrink-0 size-[53px] shadow-lg">
      <div className="size-[33px] relative" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))' }}>
        <div className="absolute inset-0 mx-[-7px] my-[0px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <g>
              <path d={svgPaths.p313fbf80} fill="white" />
              <path d={svgPaths.p313fbf80} fill="rgba(255,255,255,0.4)" transform="translate(1, 1)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

// Statistic Card (Puskesmas) with Count-Up Animation
function PuskesmasCard() {
  const { count, ref } = useCountUp(25, 1500);
  
  return (
    <div ref={ref} className="bg-[rgba(96,148,144,0.55)] flex h-[180px] sm:h-[200px] md:h-[227px] items-start px-5 sm:px-6 py-6 sm:py-7 rounded-[15px] shrink-0 w-full sm:w-[300px] md:w-[350px] lg:w-[386px] border border-[rgba(255,255,255,0.27)]">
      <div className="flex flex-col gap-5 items-start">
        <PuskesmasIcon />
        <div className="flex flex-col items-start text-white">
          <p className="font-['Poppins:Bold',sans-serif] text-3xl md:text-4xl leading-tight">{count}</p>
          <p className="font-['Poppins:Medium',sans-serif] text-base">Puskesmas</p>
        </div>
      </div>
    </div>
  );
}

// Doctor Icon
function DoctorIcon() {
  return (
    <div className="bg-[#3f88d3] flex items-center justify-center p-4 rounded-lg shrink-0 size-[53px] shadow-lg">
      <div className="size-[33px] relative" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))' }}>
        <div className="absolute inset-0 mx-[-7px] my-[0px] px-[3px] py-[0px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p3db3b1c0} fill="white" />
            <path d={svgPaths.p3db3b1c0} fill="rgba(255,255,255,0.4)" transform="translate(1, 1)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Statistic Card (Doctor) with Count-Up Animation
function DoctorCard() {
  const { count, ref } = useCountUp(150, 1500);
  
  return (
    <div ref={ref} className="bg-[rgba(96,148,144,0.55)] flex h-[180px] sm:h-[200px] md:h-[227px] items-start px-5 sm:px-6 py-6 sm:py-7 rounded-[15px] shrink-0 w-full sm:w-[300px] md:w-[350px] lg:w-[386px] border border-[rgba(255,255,255,0.27)]">
      <div className="flex flex-col gap-5 items-start">
        <DoctorIcon />
        <div className="flex flex-col items-start text-white">
          <p className="font-['Poppins:Bold',sans-serif] text-3xl md:text-4xl leading-tight">{count}+</p>
          <p className="font-['Poppins:Medium',sans-serif] text-base">Dokter Spesialis</p>
        </div>
      </div>
    </div>
  );
}

// Statistics Cards Container
function StatisticsCards() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto justify-center lg:justify-between">
      <PuskesmasCard />
      <DoctorCard />
    </div>
  );
}

// Hero Top Section (Content + Stats)
function HeroTopSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[55px] items-start lg:items-end w-full justify-between">
      <HeroContent />
      <StatisticsCards />
    </div>
  );
}

// Search Icon
function SearchIcon() {
  return (
    <div className="size-5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g>
          <path d={svgPaths.p6799e00} fill="var(--fill-0, black)" />
        </g>
      </svg>
    </div>
  );
}

// Search Bar Component
function SearchBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.02 }}
      className="bg-white flex flex-col h-auto md:h-[71px] items-center justify-center p-3 md:p-[10px] rounded-lg w-full max-w-full md:max-w-[505px]"
    >
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-1 w-full">
        <div className="hidden md:flex items-center justify-center p-2">
          <SearchIcon />
        </div>
        <div className="flex items-center flex-1 px-3 py-2 md:px-0 md:py-[10px]">
          <p className="font-['Poppins:Regular',sans-serif] text-sm md:text-base text-black">Cari layanan, dokter, atau berita...</p>
        </div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#008c7d] flex items-center justify-center px-4 py-3 md:px-0 md:py-[2px] rounded-lg md:h-[54px] md:w-[86px] cursor-pointer"
        >
          <p className="font-['Poppins:SemiBold',sans-serif] text-base text-white">Cari</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Hero Section with Background
function HeroSection() {
  return (
    <div className="relative w-full pb-8 md:pb-12 overflow-hidden">
      {/* Background Image with Ken Burns Effect and Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img 
          alt="" 
          className="absolute max-w-none object-cover size-full" 
          src={imgFrame37}
          variants={kenBurnsVariants}
          initial="initial"
          animate="animate"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#134B47] to-[rgba(0,251,240,0.25)]" />
      </div>
      
      {/* Hero Content */}
      <div className="relative flex flex-col gap-8 md:gap-12 lg:gap-[58px] px-6 sm:px-12 md:px-16 lg:px-24 xl:px-[122px] py-8 sm:py-12 md:py-16 lg:py-[60px] pb-16 sm:pb-24 md:pb-32 lg:pb-[120px]">
        <Header />
        <HeroTopSection />
        <SearchBar />
      </div>
    </div>
  );
}

// Service Card Component
function ServiceCard({ bgColor, icon, title, description, index }: { bgColor: string; icon: string; title: string; description: string; index: number }) {
  return (
    <motion.div 
      custom={index}
      initial="hidden" 
      whileInView="visible" 
      whileHover="hover" 
      viewport={{ once: true }} 
      variants={cardVariants} 
      className="bg-white flex flex-col gap-4 h-[235px] items-start px-6 sm:px-7 py-7 sm:py-8 rounded-lg w-full cursor-pointer shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
    >
      <div className={`${bgColor} flex items-center justify-center p-4 rounded-lg`}>
        <div className="h-[33px] w-[32px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <g>
              <path d={icon} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Poppins:Bold',sans-serif] text-lg leading-tight text-black">{title}</p>
      <p className="font-['Poppins:Regular',sans-serif] text-xs text-black">{description}</p>
      <p className="font-['Poppins:SemiBold',sans-serif] text-[#008c7d] text-base">{`Akses Sekarang >`}</p>
    </motion.div>
  );
}

// Service Cards Section
function ServiceCardsSection() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[30px] px-6 sm:px-12 md:px-16 lg:px-24 xl:px-[122px] -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-[120px] mb-12 md:mb-16 lg:mb-[60px]"
    >
      <ServiceCard bgColor="bg-[#2b7fff]" icon={svgPaths.p321db440} title="Antrian Online" description="Daftar periksa tanpa antri lama" index={0} />
      <ServiceCard bgColor="bg-[#28aa69]" icon={svgPaths.p27627c00} title="Jadwal Dokter" description="Cek jadwal praktek dokter spesialis" index={1} />
      <ServiceCard bgColor="bg-[#00bba7]" icon={svgPaths.p313fbf80} title="Fasilitas Kesehatan" description="Lokasi Puskesmas & RSUD" index={2} />
      <ServiceCard bgColor="bg-[#e65f00]" icon={svgPaths.p3d2f000} title="Pengaduan Masyarakat" description="Layanan suara warga" index={3} />
    </motion.div>
  );
}

// News Card
function NewsCard({ index = 0 }: { index?: number }) {
  return (
    <motion.div 
      custom={index}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="bg-white flex flex-col gap-6 h-auto md:h-[426px] items-center relative rounded-lg w-full cursor-pointer transition-shadow duration-300 overflow-hidden border border-[rgba(0,0,0,0.56)]"
    >
      {/* Image Container with Zoom Effect */}
      <div className="h-[200px] md:h-[240px] relative w-full overflow-hidden">
        <motion.div 
          variants={imageZoomVariants}
          className="absolute inset-0 overflow-hidden rounded-t-lg"
        >
          <img alt="" className="absolute h-full w-full object-cover" src={imgCatatIniJenisImunisasi18BulanYangPerluAnakDapatkanHalodoc1} />
        </motion.div>
      </div>
      
      <div className="flex flex-col gap-5 items-start px-5 pb-6 w-full">
        <div className="flex gap-3 items-center">
          <div className="h-[17px] w-[15px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
              <path d={svgPaths.p3dea0880} fill="var(--fill-0, black)" />
            </svg>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] text-sm text-black">22 Nov 2025</p>
        </div>
        <div className="font-['Poppins:Bold',sans-serif] leading-tight text-xl text-black">
          <p className="mb-0">{`Vaksinasi Booster Kedua Dimulai `}</p>
          <p>Serentak</p>
        </div>
        
        {/* Read More with Directional Cue Animation */}
        <motion.p 
          variants={readMoreVariants}
          className="font-['Poppins:Regular',sans-serif] text-base text-black"
        >
          Baca Selengkapnya →
        </motion.p>
      </div>
      
      <div className="absolute bg-white flex items-center justify-center left-6 px-3 py-1 rounded-full top-6">
        <p className="font-['Poppins:Bold',sans-serif] text-[#008c7d] text-xs">Imunisasi</p>
      </div>
    </motion.div>
  );
}

// Latest News Section
function LatestNewsSection() {
  return (
    <div className="flex flex-col gap-8 md:gap-10 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-[122px] py-12 md:py-16 lg:py-[60px]">
      {/* Section Header with Title and Link */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 w-full">
        <div className="flex flex-col gap-4 items-start text-black">
          <div className="relative">
            <p className="font-['Poppins:Bold',sans-serif] text-2xl md:text-3xl lg:text-4xl">Kabar Kesehatan Terkini</p>
            {/* Green underline */}
            <div className="absolute bottom-0 left-0 h-[3px] w-[100px] md:w-[120px] bg-[#00bba7] rounded-full" />
          </div>
          <p className="font-['Poppins:Regular',sans-serif] text-base md:text-lg lg:text-xl max-w-[500px]">Informasi terbaru seputar kegiatan dan program kesehatan di Lumajang.</p>
        </div>
        
        {/* \"Lihat Semua Berita\" positioned at top right */}
        <p className="font-['Poppins:SemiBold',sans-serif] text-[#008c7d] text-base whitespace-nowrap">{`Lihat Semua Berita →`}</p>
      </div>
      
      {/* News Cards Container - responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
        <NewsCard index={0} />
        <NewsCard index={1} />
        <NewsCard index={2} />
      </div>
    </div>
  );
}

// Emergency Banner with Glowing Pulse
function EmergencyBanner() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUpVariants}
      className="w-full bg-[#186e60]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-[122px] py-12 md:py-16 lg:py-[65px]">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center text-center sm:text-left">
          {/* Ambulance Icon with Glowing Pulse */}
          <motion.div 
            initial="initial"
            whileHover="hover"
            variants={iconVariants}
            className="relative rounded-full shrink-0 size-[90px] sm:size-[110px]"
          >
            {/* Pulsing Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-[#00bba7] rounded-full opacity-40"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <div className="bg-[#568582] flex items-center justify-center rounded-full size-full">
              <div className="h-[32px] sm:h-[40px] w-[40px] sm:w-[50px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 33">
                  <path d={svgPaths.p1c973b00} fill="var(--fill-0, white)" />
                </svg>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col max-w-full lg:max-w-[561px]">
            <p className="font-['Poppins:Bold',sans-serif] text-2xl md:text-3xl lg:text-4xl text-white">Butuh Bantuan Medis Darurat?</p>
            <p className="font-['Poppins:Regular',sans-serif] text-[#00bba7] text-base md:text-lg lg:text-xl">Layanan ambulans dan gawat darurat tersedia 24 Jam.</p>
          </div>
        </div>
        
        <motion.div 
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          className="bg-[#ffe566] flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-full cursor-pointer"
        >
          <div className="flex gap-3 items-center">
            <div className="h-[24px] md:h-[28px] w-[24px] md:w-[29px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 28">
                <g>
                  <path d={svgPaths.p3238a200} stroke="var(--stroke-0, #054F31)" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[#054f31] text-base whitespace-nowrap">Hubungi 119</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Footer Link Component with Hover Animation
const FooterLink = ({ children }: { children: string }) => {
  return (
    <motion.a
      href="#"
      initial="initial"
      whileHover="hover"
      variants={{
        initial: { x: 0, color: "#D1D5DB" },
        hover: {
          x: 8,
          color: "#00bba7",
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }
      }}
      className="font-['Poppins:Regular',sans-serif] text-[15px] leading-relaxed cursor-pointer block transition-colors duration-300"
    >
      {children}
    </motion.a>
  );
};

// Modern Footer Component
function Footer() {
  const layananItems = ['Puskesmas', 'Apotek Kesehatan', 'Fasilitas Halkes', 'Laboratorium Kesehatan'];
  const informasiItems = ['Profil Pegawai', 'Layanan Kritik', 'Berita & Artikel', 'Pengumuman'];

  return (
    <footer className="w-full bg-[#0E1933]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-12 md:py-14 lg:py-16">
        
        {/* Main Footer Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Mission */}
          <div className="flex flex-col gap-6 lg:pr-4">
            {/* Logo and Title */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center size-[56px] rounded-full bg-gradient-to-br from-[#00bba7] to-[#008c7d] shadow-lg shrink-0">
                <span className="font-['Poppins:Bold',sans-serif] text-[28px] text-white">L</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-['Poppins:Bold',sans-serif] text-[20px] text-white leading-tight">Dinkes Lumajang</h3>
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-gray-400">Kabupaten Lumajang</p>
              </div>
            </div>
            
            {/* Mission Statement - Max 2 Lines */}
            <p className="font-['Poppins:Regular',sans-serif] text-[15px] leading-relaxed text-gray-300">
              Berkomitmen meningkatkan derajat kesehatan masyarakat Lumajang melalui pelayanan prima.
            </p>
            
            {/* Social Media Icons with Interactive Backgrounds */}
            <div className="flex items-center gap-4 mt-2">
              <motion.a
                href="#"
                initial={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                whileHover={{ 
                  backgroundColor: "#00bba7",
                  y: -4,
                  transition: { duration: 0.3 }
                }}
                className="flex items-center justify-center size-[44px] rounded-full cursor-pointer transition-all duration-300"
              >
                <Facebook size={20} color="white" strokeWidth={2} />
              </motion.a>
              <motion.a
                href="#"
                initial={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                whileHover={{ 
                  backgroundColor: "#00bba7",
                  y: -4,
                  transition: { duration: 0.3 }
                }}
                className="flex items-center justify-center size-[44px] rounded-full cursor-pointer transition-all duration-300"
              >
                <Twitter size={20} color="white" strokeWidth={2} />
              </motion.a>
              <motion.a
                href="#"
                initial={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                whileHover={{ 
                  backgroundColor: "#00bba7",
                  y: -4,
                  transition: { duration: 0.3 }
                }}
                className="flex items-center justify-center size-[44px] rounded-full cursor-pointer transition-all duration-300"
              >
                <Instagram size={20} color="white" strokeWidth={2} />
              </motion.a>
            </div>
          </div>
          
          {/* Column 2: Layanan Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-['Poppins:Bold',sans-serif] text-[18px] text-white mb-1">Layanan</h4>
            <nav className="flex flex-col gap-3">
              {layananItems.map((item, index) => (
                <FooterLink key={index}>{item}</FooterLink>
              ))}
            </nav>
          </div>
          
          {/* Column 3: Informasi Publik Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-['Poppins:Bold',sans-serif] text-[18px] text-white mb-1">Informasi Publik</h4>
            <nav className="flex flex-col gap-3">
              {informasiItems.map((item, index) => (
                <FooterLink key={index}>{item}</FooterLink>
              ))}
            </nav>
          </div>
          
          {/* Column 4: Contact Information */}
          <div className="flex flex-col gap-5">
            <h4 className="font-['Poppins:Bold',sans-serif] text-[18px] text-white mb-1">Kontak Kami</h4>
            
            {/* Address with Icon */}
            <div className="flex gap-3 items-start">
              <MapPin size={20} color="#00bba7" className="mt-0.5 shrink-0" strokeWidth={2} />
              <p className="font-['Poppins:Regular',sans-serif] text-[15px] leading-relaxed text-gray-300">
                Jl Pramuka Gajah No. 2 Kepundung Kec. Lumajang, Jawa Timur
              </p>
            </div>
            
            {/* Phone with Icon */}
            <div className="flex gap-3 items-start">
              <Phone size={20} color="#00bba7" className="mt-0.5 shrink-0" strokeWidth={2} />
              <div className="flex flex-col gap-1">
                <a 
                  href="tel:0334881884" 
                  className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-white hover:text-[#00bba7] transition-colors duration-300"
                >
                  (0334) 881884
                </a>
                <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-gray-400">
                  Senin - Jumat, 08:00 - 16:00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section - Bottom Separator */}
        <div className="mt-10 pt-6 border-t border-gray-700/50">
          <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-gray-400 text-center">
            © 2025 Dinas Kesehatan Kabupaten Lumajang. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

// WhatsApp Floating Button with Bobbing Effect
function WhatsAppButton() {
  return (
    <motion.div 
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      animate={{
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      variants={buttonVariants}
      className="fixed bg-[#28aa69] flex items-center justify-center right-6 sm:right-12 lg:right-[60px] bottom-6 sm:bottom-12 lg:bottom-[60px] p-3 rounded-full size-[56px] sm:size-[60px] z-50 cursor-pointer shadow-[0px_4px_12px_rgba(0,0,0,0.2)]"
    >
      <div className="flex items-center">
        <div className="h-[22px] sm:h-[24.833px] w-[22px] sm:w-[24.729px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
            <g>
              <path d={svgPaths.p1947bc00} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="bg-white flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <HeroSection />
      <ServiceCardsSection />
      <LatestNewsSection />
      <EmergencyBanner />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}