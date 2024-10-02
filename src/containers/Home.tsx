import React from "react";
import HeroSection from "../components/template/Home/Hero";
import ProgramsSection from "../components/template/Home/ProgramsSection";
import AboutSection from "../components/template/Home/AboutSection";
import ProgramDetailsSection from "../components/template/Home/PorgramDetails";
import TeachersSection from "../components/template/Home/TeachersSection";
import TestimonialSection from "../components/template/Home/TestimonialSection";
import NewsSection from "../components/template/Home/NewsSection";
import NewsLetterSection from "../components/template/Home/NewsLetter";

function Home() {
  return (
    <div className=" ">
      <HeroSection />
      <ProgramsSection />
      <AboutSection />
      <ProgramDetailsSection />
      <TeachersSection />
      <TestimonialSection />
      <NewsSection />
      <NewsLetterSection />
    </div>
  );
}

export default Home;
