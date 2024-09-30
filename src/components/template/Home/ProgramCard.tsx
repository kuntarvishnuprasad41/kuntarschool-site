import React from "react";

interface ProgramCardProps {
  imageSrc: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  imageSrc,
  title,
  description,
  isHighlighted = false,
}) => {
  const cardClasses = isHighlighted
    ? "flex relative flex-col grow min-h-[600px]  rounded-[32px] max-md:mt-9 max-md:max-w-full h-[600px] "
    : "flex flex-col grow items-center px-16 py-12 border-2 border-orange-400 border-dashed rounded-[32px] max-md:px-5 max-md:mt-9 max-md:max-w-full h-[600px]";
  const contentClasses = isHighlighted
    ? "flex relative flex-col content-center justify-center items-center px-14 py-12 bg-[#2CC4B9] bg-opacity-60 rounded-[32px] max-md:px-5 max-md:max-w-full "
    : "";
  const titleClasses = isHighlighted ? "text-white" : "text-black";
  const descriptionClasses = isHighlighted ? "text-white" : "text-black";
  const buttonClasses = isHighlighted
    ? "px-16 py-4 mt-4 max-w-full text-2xl tracking-wide leading-none text-center text-white border-2 border-white border-solid rounded-[61px] w-[268px] max-md:px-5"
    : "px-16 pt-4 pb-4 mt-20 max-w-full text-2xl tracking-wide leading-none text-center text-black border border-orange-400 border-solid rounded-[61px] w-[268px] max-md:px-5 max-md:mt-10";

  return (
    <div className={cardClasses}>
      {isHighlighted && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c282782386a901ddfdd454f8f9042b552c90ca348d9b8f485591cfbcf682fb?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
          alt=""
          className="object-cover absolute inset-0 size-full   rounded-[32px]"
        />
      )}
      <div className={contentClasses}>
        <div className="flex flex-col justify-center items-center content-center px-9 bg-orange-50 rounded-full h-[187px] w-[187px] max-md:px-5">
          <img
            loading="lazy"
            src={imageSrc}
            alt={`${title} icon`}
            className="object-contain w-full aspect-square"
          />
        </div>
        <h3
          className={`mt-2 text-3xl font-semibold tracking-wider leading-none ${titleClasses}`}
        >
          {title}
        </h3>
        <p
          className={`self-stretch mt-8 text-2xl tracking-wider leading-10 text-center ${descriptionClasses}`}
        >
          {description}
        </p>
        <button className={buttonClasses}>View Details</button>
      </div>
    </div>
  );
};

export default ProgramCard;
