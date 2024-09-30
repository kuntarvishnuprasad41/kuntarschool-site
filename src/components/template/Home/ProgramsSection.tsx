import React from "react";
import ProgramCard from "./ProgramCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { Card, CardContent } from "../../ui/card";

const programsData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/824f1825f9a468896169f18c6b0619f048f47dd7335512a65204debc68928ce2?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    title: "Sport Class",
    description:
      "Each day at EduKid is a celebration. We celebrate all sports!",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/690f563b1bdb7335809c1cf1186d5ae91aa93d395708fcbf7c9f75d2e64fdc06?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    title: "Music Class",
    description:
      "Musical indoor and outdoor activities that cater to all domains development!",
    isHighlighted: true,
    bg: "#2CC4B9",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b86daa636a2bfd53d9f340d45010665c1f425fe654927e3358fce284870c7bbe?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    title: "Drawing Class",
    description:
      "Fun Arts and Crafts projects for the children to work on together!",
  },
];

const ProgramsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  return (
    <section className="mt-16 max-md:mt-10   ">
      <div className="flex flex-col justify-center items-center px-[20px]">
        <h2 className="text-5xl font-bold tracking-widest leading-none text-black max-md:mt-10 max-md:text-4xl">
          Our Programs
        </h2>
        <p className="mt-11 text-2xl tracking-wider leading-10 text-center text-black max-md:mt-10 max-md:max-w-full">
          Our multi-level kindergarten cater to the age groups 2-5 years with a
          curriculum focussing children.
        </p>
        <div className="mt-28 w-full max-w-[1674px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <Carousel className="w-screen mx-[20px] ">
              <CarouselContent className="  ">
                {programsData.map((program, index) => (
                  <CarouselItem
                    key={index}
                    className=" md:basis-1/2 lg:basis-1/3"
                  >
                    <ProgramCard {...program} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        {/* <div className="flex justify-center mt-4">
          <div className="flex gap-2 mt-20 w-[98px] max-md:mt-10">
            {programsData.map((_, index) => (
              <div
                key={index}
                className={`flex flex-col flex-1 rounded-2xl ${
                  index === currentSlide ? "bg-zinc-800" : "bg-zinc-100"
                }`}
              >
                <div
                  className={`flex shrink-0 rounded-2xl ${
                    index === currentSlide ? "bg-zinc-800" : "bg-zinc-100"
                  } h-[13px]`}
                />
              </div>
            ))}
          </div>
        </div> */}

        <div className="flex gap-2 mt-20 w-[98px] max-md:mt-10">
          {programsData.map((_, index) => (
            <>
              <div
                className={`flex flex-col flex-1 rounded-2xl ${
                  currentSlide == index ? "bg-zinc-800" : "bg-zinc-100"
                }`}
                title=""
              >
                <div
                  className={`flex shrink-0 rounded-2xl ${
                    currentSlide == index ? "bg-zinc-800" : "bg-zinc-100"
                  } h-[13px]`}
                />
              </div>
            </>
          ))}
        </div>

        {/* <div className="flex gap-2 mt-20 w-[98px] max-md:mt-10">
          <div className="flex flex-col flex-1 rounded-2xl bg-zinc-800">
            <div className="flex shrink-0 rounded-2xl bg-zinc-800 h-[13px]" />
          </div>

           <div className="flex flex-col flex-1 rounded-2xl bg-zinc-100">
            <div className="flex shrink-0 rounded-2xl bg-zinc-100 h-[13px]" />
          </div>
         
          <div className="flex flex-col flex-1 rounded-2xl bg-zinc-100">
            <div className="flex shrink-0 rounded-2xl bg-zinc-100 h-[13px]" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProgramsSection;
