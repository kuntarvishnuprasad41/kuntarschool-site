import React from "react";
import Header from "./components/template/Header";
import Navigation from "./components/template/Home/Navigation";
import Logo from "./components/template/Home/Logo";
import ApplyNowButton from "./components/template/Home/ApplyNow";
import HeroSection from "./components/template/Home/Hero";
import ProgramsSection from "./components/template/Home/ProgramsSection";
import AboutSection from "./components/template/Home/AboutSection";
import ProgramDetailsSection from "./components/template/Home/ProgramDetailsSection";
import TeachersSection from "./components/template/Home/TeachersSection";
import TestimonialSection from "./components/template/Home/TestimonialSection";
import NewsSection from "./components/template/Home/NewsSection";
import NewsLetterSection from "./components/template/Home/NewsLetter";
import Footer from "./components/template/Footer";

const App: React.FC = () => {
  const navigationItems = [
    { label: "Home", width: "w-[90px]" },
    { label: "About", width: "w-[93px]" },
    { label: "Programs", width: "w-[145px]" },
    { label: "Shops", width: "w-[93px]" },
    { label: "Pages", width: "w-[93px]" },
    { label: "News", width: "w-[93px]" },
    { label: "Contact", width: "w-[125px]" },
  ];

  return (
    <div className="flex   flex-col items-center bg-white   justify-center w-screen overflow-y-hidden">
      <Header
        title="Applications open 20-24 April!!!"
        subtitle="Don't miss out on this opportunity"
      />
      <div className="flex flex-col justify-between self-stretch px-16 py-7 w-screen leading-none bg-white text-zinc-800 max-md:px-5 max-md:mr-1.5 max-md:max-w-full">
        <div className="flex  justify-around gap-12 items-center max-md:max-w-full -mb-20">
          <Logo title="EduKid" subtitle="Making learning fun" />
          <div className="lg:flex  hidden gap-2">
            <Navigation items={navigationItems} />
            <ApplyNowButton />
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3037467ed8ff2ec6104ce4533b5628750cbde319cf549b935a401da725127236?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
        alt="Hero background"
        className="object-contain w-full aspect-[83.33] max-md:max-w-full mt-16 -mb-10"
      />
      <div className="px-48">
        <HeroSection />
        <ProgramsSection />
        <AboutSection />
        <ProgramDetailsSection />
        <TeachersSection />
        <TestimonialSection />
        <NewsSection />
        <NewsLetterSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;
