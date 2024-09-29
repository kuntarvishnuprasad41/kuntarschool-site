import React from "react";

interface LogoProps {
  title: string;
  subtitle: string;
}

const Logo: React.FC<LogoProps> = ({ title, subtitle }) => {
  return (
    <div className="flex gap-4 self-stretch px-0.5 pb-2.5 my-auto text-teal-500 w-[233px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d53397417e3e6602d4b913cdf52c2f381e79e6573b184b6f6426252f1cb259?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
        alt="EduKid Logo"
        className="object-contain shrink-0 self-start aspect-square w-[72px]"
      />
      <div className="flex flex-col">
        <div className="text-5xl font-bold tracking-wider max-md:text-4xl">
          {title.split("").map((char, index) =>
            char.toLowerCase() === "u" ? (
              <span key={index} className="text-teal-500 underline">
                {char}
              </span>
            ) : (
              char
            )
          )}
        </div>
        <div className="mt-5 text-sm font-light tracking-wide max-md:mr-2">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default Logo;
