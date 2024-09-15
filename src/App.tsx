import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Logo from "./Logo";
import ApplyNowButton from "./ApplyNow";
import HeroSection from "./Hero";
import ProgramsSection from "./ProgramsSection";
import AboutSection from "./AboutSection";
import ProgramDetailsSection from "./ProgramDetailsSection";
import TeachersSection from "./TeachersSection";
import TestimonialSection from "./TestimonialSection";
import NewsSection from "./NewsSection";
import NewsLetterSection from "./NewsLetter";
import Footer from "./Footer";

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
          <Navigation items={navigationItems} />
          <ApplyNowButton />
        </div>
      </div>
      <HeroSection />
      <div className="px-28">
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
