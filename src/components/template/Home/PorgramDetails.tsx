import React from "react";

interface ProgramDetail {
  imageSrc: string;
  title: string;
  description: string;
  age: string;
  days: string;
  period: string;
  color: string;
}

const programDetails: ProgramDetail[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6a65a7eae3164241e79c555428b68077048bb2449347f9d0b49157e7e6534a97?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    title: "Settling",
    description:
      "To round out our weekend of celebrations, we are holding our reunion.",
    age: "4-5 yrs",
    days: "3 days",
    period: "3.30 hrs",
    color: "teal",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/77c92ef247cae9a0d8682485a9ca8da5d17ba866fd81f40cd70f776ec903d66e?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    title: "Play Group",
    description:
      "We will be magically transforming the School's Sports Center into a full game area.",
    age: "4-5 yrs",
    days: "3 days",
    period: "3.30 hrs",
    color: "orange",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/52b2f6c87e58cac54083019d9de6a38238ef1a30d35b271aff27607e96fd0d65?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    title: "Pre-Nursery",
    description:
      "EduKid is thrilled to teach pre-nursery courses to better the lives of our children.",
    age: "4-5 yrs",
    days: "3 days",
    period: "3.30 hrs",
    color: "rose",
  },
];

const ProgramDetailsCard: React.FC<ProgramDetail> = ({
  imageSrc,
  title,
  description,
  age,
  days,
  period,
  color,
}) => {
  return (
    <div className="flex flex-col pb-24 border border-solid border-stone-500 rounded-[32px] max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full aspect-[1.35] rounded-[32px_32px_0px_0px] max-md:max-w-full"
      />
      <div className="flex flex-col mt-7 ml-11 w-96 max-w-full max-md:ml-2.5">
        <h3 className="self-start mt-10 text-3xl font-semibold tracking-wider leading-none text-black">
          {title}
        </h3>
        <p className="mt-10 text-2xl tracking-wider leading-10 text-black max-md:mr-1 max-md:max-w-full">
          {description}
        </p>
        <div
          className={`px-12 pt-4 pb-8 mt-12 w-full bg-${color}-400 rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full`}
        >
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-white max-md:mt-10">
                <div className="text-3xl font-bold tracking-wider leading-10">
                  {age}
                </div>
                <div className="self-start mt-3.5 ml-3 text-lg tracking-wide leading-loose text-center max-md:ml-2.5">
                  age
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 text-center text-white max-md:mt-10">
                <div
                  className={`shrink-0 self-end mt-7 w-0.5 h-14 border-2 border-${color}-300 border-solid`}
                />
                <div className="flex flex-col">
                  <div className="text-3xl font-bold tracking-wider leading-10">
                    {days}
                  </div>
                  <div className="self-start mt-3 text-lg tracking-wide leading-loose">
                    weekly
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 justify-between text-center text-white max-md:mt-10">
                <div
                  className={`shrink-0 self-end mt-7 w-0.5 h-14 border-2 border-${color}-300 border-solid`}
                />
                <div className="flex flex-col">
                  <div className="text-3xl font-bold tracking-wider leading-10">
                    {period}
                  </div>
                  <div className="self-start mt-4 text-lg tracking-wide leading-loose">
                    period
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramDetailsSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center self-stretch px-20 py-40 mt-44 w-full bg-[linear-gradient(280deg,#EDFEFC_13.84%,#FEF6EC_96.14%)] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center mb-0 w-full max-w-[1668px] max-md:mb-2.5 max-md:max-w-full">
        <h2 className="text-5xl font-bold tracking-widest leading-none text-black max-md:text-4xl">
          Our Programs
        </h2>
        <p className="mt-10 text-2xl tracking-wider leading-10 text-center text-black max-md:max-w-full">
          EduKid opened its doors in 1998 with a unique vision to provide
          students with a globally focused study of arts
        </p>
        <div className="self-stretch mt-32 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {programDetails.map((program, index) => (
              <div
                key={index}
                className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
              >
                <ProgramDetailsCard {...program} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 mt-16 w-[98px] max-md:mt-10">
          <div className="flex shrink-0 rounded-2xl bg-zinc-800 h-[13px] w-[27px]" />
          <div className="flex shrink-0 rounded-2xl bg-zinc-100 h-[13px] w-[27px]" />
          <div className="flex shrink-0 rounded-2xl bg-zinc-100 h-[13px] w-[27px]" />
        </div>
      </div>
    </section>
  );
};

export default ProgramDetailsSection;
