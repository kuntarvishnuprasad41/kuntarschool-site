import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="mt-52 w-full max-w-[1763px] max-md:mt-10 max-md:max-w-full px-[20px] ">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[55%] justify-center items-center max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a401bbff11d1a42e4d49bf886defd18b75f7774f98b62da79c5605f8e5585ac0?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
            alt="Children playing"
            className="object-contain w-full aspect-[1.25] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start mt-6 w-full max-md:mt-10 max-md:max-w-full">
            <h2 className="text-5xl font-bold tracking-wider leading-none text-black max-md:text-4xl">
              Our Programs
            </h2>
            <p className="self-stretch mt-14 text-2xl tracking-wider leading-10 text-black max-md:mt-10 max-md:max-w-full">
              Being brave isn't always a grand gesture sometimes it just means
              having a go attempting that difficult question, offering an answer
              in a lesson when you're simply really trying new.
            </p>
            <div className="self-stretch px-20 py-9 mt-14 bg-teal-500 rounded-[32px] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-10">
                    <div className="self-center text-3xl font-bold tracking-wider leading-none">
                      14+
                    </div>
                    <div className="mt-6 text-xl tracking-wide leading-8 text-center">
                      Years of experience
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-5 justify-between text-white max-md:mt-10">
                    Continuing from where we left off:
                    <div className="shrink-0 my-auto w-0.5 border-2 border-teal-300 border-solid h-[65px]" />
                    <div className="flex flex-col">
                      <div className="self-start ml-3.5 text-3xl font-bold tracking-wider leading-none max-md:ml-2.5">
                        14+
                      </div>
                      <div className="mt-6 text-xl tracking-wide leading-8 text-center">
                        Students each year
                      </div>
                    </div>
                    <div className="shrink-0 my-auto w-0.5 border-2 border-teal-300 border-solid h-[65px]" />
                    <div className="flex flex-col">
                      <div className="self-start text-3xl font-bold tracking-wider leading-none">
                        14+
                      </div>
                      <div className="mt-6 text-xl tracking-wide leading-8 text-center">
                        Award winning
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-10 text-2xl tracking-wider leading-loose text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81bff4578009300724b8252ff8c1f87db7c5286dd74451f32800f77a3a66f25a?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
                alt=""
                className="object-contain shrink-0 aspect-square w-[33px]"
              />
              <p className="flex-auto self-start max-md:max-w-full">
                We believe every child is intelligent so we care.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-5 text-2xl tracking-wider leading-loose text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b698d1d1f6c8f84536bc7459222888510bab4994ae09a5870d4eba17adb2a7?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
                alt=""
                className="object-contain shrink-0 aspect-square w-[33px]"
              />
              <p className="flex-auto self-start max-md:max-w-full">
                Teachers make a difference of your child.
              </p>
            </div>
            <div className="mt-10 max-w-full w-[599px]">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[47%] max-md:ml-0 max-md:w-full">
                  <button className="self-stretch px-16 pt-5 pb-10 my-auto w-full text-2xl font-medium tracking-wider leading-loose text-white bg-orange-400 rounded-[42px] max-md:px-5 max-md:mt-5">
                    View more
                  </button>
                </div>
                <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/defc6b4ba5faa456dca2140503ae895c85dbfa40dcdc2306aaaa93bbc212b2fe?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
                    alt=""
                    className="object-contain shrink-0 max-w-full aspect-square w-[115px]"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                  <p className="mt-10 text-2xl tracking-wider leading-loose text-black">
                    Promotional Video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
