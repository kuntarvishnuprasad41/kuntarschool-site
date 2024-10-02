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
import PageLayout from "./containers/PageLayout";
import Home from "./containers/Home";

const App: React.FC = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

export default App;
