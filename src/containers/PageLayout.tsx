import React from "react";
import Header from "../components/template/Header";
import Footer from "../components/template/Footer";
import Logo from "../components/template/Home/Logo";

import ApplyNowButton from "../components/template/Home/ApplyNow";
import Navigation from "../components/template/Home/Navigation";

type PageLayoutProps = {
  children: React.ReactNode;
};

const navigationItems = [
  { label: "Home", width: "w-[90px]" },
  { label: "About", width: "w-[93px]" },
  { label: "Programs", width: "w-[145px]" },
  { label: "Shops", width: "w-[93px]" },
  { label: "Pages", width: "w-[93px]" },
  { label: "News", width: "w-[93px]" },
  { label: "Contact", width: "w-[125px]" },
];

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-white w-screen overflow-y-none ">
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
        className="object-contain w-screen aspect-[83.33]   mt-16 -mb-10"
      />
      <div className="w-screen   flex flex-col justify-center overscroll-none">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
