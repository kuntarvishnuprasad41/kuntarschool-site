import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch py-16 w-full max-md:max-w-full">
      <div className="self-center mt-5   max-md:mt-10 w-screen lg:max-w-[1680px] md:max-w-[700px] sm:max-w-[390px] px-[20px]">
        <div className="flex gap-5 max-md:flex-col">
          {/* Left section */}
          <div className="flex flex-col w-[45%] max-lg:w-[50%] max-md:w-full ">
            <div className="flex flex-col lg:items-start md:items-start items-center self-stretch my-auto text-2xl font-medium tracking-wider leading-none max-md:mt-10 max-md:max-w-full">
              <h2 className="text-3xl font-semibold tracking-wider text-teal-500 max-md:text-xl">
                Kindergarten Program
              </h2>
              <h1 className="self-stretch mt-8 text-7xl font-bold text-black leading-[88px] tracking-[2.1px] max-lg:text-5xl max-lg:leading-[70px] max-md:text-4xl max-md:leading-[56px]">
                Best Children's Education Curriculum
              </h1>
              <p className="mt-5 text-zinc-800 max-md:mt-5 max-md:text-base">
                Admission Open 20-24 April
              </p>
              <button className="px-14 py-9 mt-12 text-white bg-orange-400 rounded-[94px] max-lg:px-10 max-lg:py-7 max-md:px-5 max-md:py-4 max-md:mt-6">
                Apply Now
              </button>
            </div>
          </div>

          {/* Right section (image) */}
          <div className="flex flex-col ml-5 w-[55%] max-lg:w-[50%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/485eac484ae3f8f29659bb2d77a1658f5fa7d512a26cf05b213129595629283c?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
              alt="Children learning"
              className="object-contain grow w-full aspect-[1.18] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
