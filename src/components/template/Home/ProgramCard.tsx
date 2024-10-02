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
    ? "relative flex flex-col items-center justify-center grow min-h-[600px] rounded-[32px] max-md:mt-9 max-md:max-w-[100%] h-[600px]"
    : "flex flex-col items-center justify-center grow px-16 py-12 border-2 border-orange-400 border-dashed rounded-[32px] max-md:px-5 max-md:mt-9 max-md:max-w-[100%] h-[600px]";

  const contentClasses =
    "relative z-10 flex flex-col items-center justify-center px-14 py-12 rounded-[32px] max-md:px-5 max-md:max-w-full";

  const titleClasses = isHighlighted ? "text-white" : "text-black";
  const descriptionClasses = isHighlighted ? "text-white" : "text-black";

  const buttonClasses = isHighlighted
    ? "px-16 py-4 mt-4 max-w-full text-2xl tracking-wide leading-none text-center text-white border-2 border-white border-solid rounded-[61px] w-[268px] max-md:px-5"
    : "px-16 pt-4 pb-4 mt-10 max-w-full text-2xl tracking-wide leading-none text-center text-black border border-orange-400 border-solid rounded-[61px] w-[268px] max-md:px-5";

  return (
    <div className="relative">
      {isHighlighted && (
        <div className="absolute inset-0 w-full h-full bg-[#2CC4B9] bg-opacity-60 rounded-[32px]"></div>
      )}
      <div className={cardClasses}>
        {isHighlighted && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c282782386a901ddfdd454f8f9042b552c90ca348d9b8f485591cfbcf682fb?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
            alt=""
            className="object-cover absolute inset-0 w-full h-full rounded-[32px] z-0"
          />
        )}
        <div className={contentClasses}>
          <div className="flex items-center justify-center bg-orange-50 rounded-full h-[187px] w-[187px] max-md:px-5">
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
            className={`mt-8 text-2xl tracking-wider leading-10 text-center ${descriptionClasses}`}
          >
            {description}
          </p>
          <button className={buttonClasses}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
