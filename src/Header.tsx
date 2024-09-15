import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="flex flex-col justify-center self-stretch py-5 text-2xl tracking-wide leading-none text-white bg-teal-500 px-[720px] max-md:px-5 max-md:mr-1.5 max-md:max-w-full">
      <div className="flex gap-3 w-full max-w-[475px] max-md:max-w-full">
        <div className="flex flex-auto gap-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0031c8100294515bb08b5882f861e27d69ddc9b4c91edb828b201d58b6f23ce5?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
            alt=""
            className="object-contain shrink-0 aspect-[1.03] w-[37px]"
          />
          <div className="flex-auto self-start">{title}</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0031c8100294515bb08b5882f861e27d69ddc9b4c91edb828b201d58b6f23ce5?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
          alt=""
          className="object-contain shrink-0 aspect-[1.03] w-[37px]"
        />
      </div>
      <p className="mt-2 text-base">{subtitle}</p>
    </header>
  );
};

export default Header;
