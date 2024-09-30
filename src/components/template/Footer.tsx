import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col self-stretch pt-80 pb-24 mt-0 w-full max-md:pt-24 max-md:mt-0 max-md:max-w-full px-[20px]">
      <div className="flex flex-col self-center w-full max-w-[1641px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 max-w-full leading-none w-[792px]">
          <div className="flex flex-1 gap-4 text-teal-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c37072bda013c4b688f1c382e05baa49bed0b641cca7abd80dbae38c57c6c85?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
              alt="EduKid logo"
              className="object-contain shrink-0 aspect-square w-[72px]"
            />
            <div className="flex flex-col">
              <div className="text-5xl font-bold tracking-wider max-md:text-4xl">
                Ed<span className="text-teal-500 underline">u</span>Kid
              </div>
              <div className="mt-5 text-sm font-light tracking-wide max-md:mr-2">
                Making learning fun
              </div>
            </div>
          </div>
          <h3 className="self-start text-5xl font-bold tracking-widest text-black max-md:text-4xl">
            Quick Links
          </h3>
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-9 w-full max-md:max-w-full">
          <div className="flex-auto mt-1.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[84%] max-md:ml-0 max-md:w-full">
                <p className="self-stretch my-auto text-2xl tracking-wider leading-10 text-black max-md:mt-10">
                  It is our goal to provide age appropriate opportunity for
                  every child enrolled in EduKid Kids Club enrichment classes.
                </p>
              </div>
              <nav className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
                <ul className="flex flex-col grow items-start text-2xl tracking-wider leading-loose whitespace-nowrap text-stone-500 max-md:mt-10">
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li className="mt-10">
                    <a href="#courses">Courses</a>
                  </li>
                  <li className="mt-10">
                    <a href="#shop">Shop</a>
                  </li>
                  <li className="mt-9">
                    <a href="#contact">Contact</a>
                  </li>
                  <li className="mt-10">
                    <a href="#blog">Blog</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <nav className="flex flex-col items-start self-stretch my-auto text-2xl tracking-wider leading-loose text-stone-500">
            <ul>
              <li>
                <a href="#recently-viewed">Recently Viewed</a>
              </li>
              <li className="mt-9">
                <a href="#new-programs">New programs</a>
              </li>
              <li className="mt-9">
                <a href="#curriculums">Curriculums</a>
              </li>
              <li className="mt-10">
                <a href="#career">Career</a>
              </li>
              <li className="mt-10">
                <a href="#school-stuff">School stuff</a>
              </li>
            </ul>
          </nav>
          <div className="flex gap-6">
            <div className="flex flex-col self-start mt-1.5">
              <a href="#" aria-label="Facebook">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/530da095bab453138ab1e1a09d7423cf7847914881685abe3055861f6e9501b5?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
                  alt="Facebook icon"
                  className="object-contain w-6 aspect-square"
                />
              </a>
              <a href="#" aria-label="Twitter" className="mt-16 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/77b6a06e2d2b558eb7cfb2243c9f3d178aca60799417df10938b17f2e46a8428?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
                  alt="Twitter icon"
                  className="object-contain aspect-square w-[18px]"
                />
              </a>
              <a href="#" aria-label="Instagram" className="mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/567c2392d411cb2184f57ad51fad8116c90797060c90eb5141d9f22752c6d0d1?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
                  alt="Instagram icon"
                  className="object-contain w-6 aspect-square"
                />
              </a>
            </div>
            <address className="flex flex-col items-start text-2xl tracking-wider leading-10 text-stone-500 not-italic">
              <p>Kuntar</p>
              <p className="mt-9 leading-loose">012-345-6789</p>
              <p className="mt-10">edukidsupport@email.com</p>
            </address>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac183dd2ab5948be0e021842089d318e1ad0184d735a643ec38a5f0aaeea1a23?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
        alt="Footer decoration"
        className="object-contain mt-48 w-full aspect-[83.33] max-md:mt-10 max-md:max-w-full"
      />
    </footer>
  );
};

export default Footer;
