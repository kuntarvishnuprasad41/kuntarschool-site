import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch py-16 w-full max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3037467ed8ff2ec6104ce4533b5628750cbde319cf549b935a401da725127236?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
        alt="Hero background"
        className="object-contain w-full aspect-[83.33] max-md:max-w-full"
      />
      <div className="self-center mt-11 w-full max-w-[1680px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto text-2xl font-medium tracking-wider leading-none max-md:mt-10 max-md:max-w-full">
              <h2 className="text-3xl font-semibold tracking-wider text-teal-500">
                Kindergarten Program
              </h2>
              <h1 className="self-stretch mt-8 text-7xl font-bold text-black leading-[88px] tracking-[2.1px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
                Best Children's Education Curriculum
              </h1>
              <p className="mt-24 text-zinc-800 max-md:mt-10">
                Admission Open 20-24 April
              </p>
              <button className="px-14 py-9 mt-12 text-white bg-orange-400 rounded-[94px] max-md:px-5 max-md:mt-10">
                Apply Now
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
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
