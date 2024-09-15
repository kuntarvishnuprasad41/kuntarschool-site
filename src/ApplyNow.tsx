import React from "react";

const ApplyNowButton: React.FC = () => {
  return (
    <div className="flex gap-6 self-stretch my-auto text-2xl font-medium tracking-wide rounded-none min-w-[240px] w-[325px]">
      <button className="grow px-8 pt-5 pb-8 bg-orange-50 rounded-[94px] w-fit max-md:px-5">
        Apply now
      </button>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e8eb4e693e798c870a6ee19c1e3eb35284c276a16251a33acfc8950f6e3d3c1?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
        alt=""
        className="object-contain shrink-0 my-auto rounded-md aspect-square w-[37px]"
      />
    </div>
  );
};

export default ApplyNowButton;
