import React from "react";

const TestimonialSection: React.FC = () => {
  return (
    <section className="self-stretch mt-28 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col grow justify-center items-center px-20 py-96 min-h-[1020px] max-md:px-5 max-md:py-24 max-md:mr-0 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6c95f9bbac7cda8153492c7b1cecde9b0f076980b5f69fde4128610259618a6?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
              alt="Background"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bc9543b783615121f90b14b8d8ce6ad7abc44072168d8fb4d68f3ccc8bd277c?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
              alt="Quotation mark"
              className="object-contain max-w-full aspect-square w-[189px]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-px w-full bg-teal-400 bg-opacity-90 max-md:max-w-full">
            <div className="flex relative flex-col items-center px-20 pt-32 pb-52 min-h-[1020px] max-md:px-5 max-md:py-24 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4001a9e03c749ec74e337d027eea29238d905c37c985e9a1018b3f764c665302?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
                alt="Background pattern"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col items-start -mb-10 max-w-full w-[713px] max-md:mb-2.5">
                <h2 className="text-5xl font-bold tracking-widest leading-none text-white max-md:text-4xl">
                  Parent Says
                </h2>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/24cc169d6d827ef9006622530afb97623387b23f048729f192fdcc77e63e87c6?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
                  alt="Rating stars"
                  className="object-contain mt-5 max-w-full rounded-sm aspect-[5.81] w-[261px]"
                />
                <p className="self-stretch mt-14 text-2xl font-medium tracking-wider leading-10 text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Senectus tellus eget
                  nunc posuere quis at vitae consequat. At nulla erat nisi nunc.
                  Sit risus sagittis pellentesque eget convallis commodo. Sit
                  pellentesque dolor neque a diam malesuada.
                </p>
                <div className="flex flex-wrap gap-5 justify-between self-stretch mt-52 w-full text-2xl font-semibold tracking-wider leading-loose text-white max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/259b23bb28d107fff2b41da636bd87d477d720a2e9cb5a3b4a44091bcca95606?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
                      alt="Heidi Turner"
                      className="object-contain shrink-0 rounded-full aspect-square w-[98px]"
                    />
                    <div className="my-auto basis-auto">Heidi Turner</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/09fbbfe55814669eb669a242016856e44118a060d44d97e46401fefe54527ae0?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
                    alt="Quotation marks"
                    className="object-contain shrink-0 self-start max-w-full aspect-[1.49] w-[130px]"
                  />
                </div>
                <div className="flex gap-2.5 mt-16 w-[99px] max-md:mt-10">
                  <div className="flex flex-col flex-1 bg-black rounded-2xl">
                    <div className="flex shrink-0 bg-black rounded-2xl h-[13px]" />
                  </div>
                  <div className="flex flex-col flex-1 rounded-2xl bg-zinc-100">
                    <div className="flex shrink-0 rounded-2xl bg-zinc-100 h-[13px]" />
                  </div>
                  <div className="flex flex-col flex-1 rounded-2xl bg-zinc-100">
                    <div className="flex shrink-0 rounded-2xl bg-zinc-100 h-[13px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
