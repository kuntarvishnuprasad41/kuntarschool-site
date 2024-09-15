import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="flex flex-col justify-center self-stretch py-2 text-2xl tracking-wide leading-none text-white bg-teal-500 px-[720px] max-md:px-5 max-md:mr-1.5 max-md:max-w-full ">
      <div className="flex gap-1 w-full max-w-[475px] max-md:max-w-full">
        <div className="flex flex-auto gap-1.5">
          <div className="flex-auto self-start">{title}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
