import React from "react";

interface NewsItem {
  imageSrc: string;
  author: string;
  title: string;
}

const newsItems: NewsItem[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d000a3f589ef60414b287b932b22e43267bb91aaea86388b35a5cdb4db7e7410?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    author: "Ken",
    title: "Tips to Understand Your Child Better - A Guide for Parents!",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a30a9969dd98c524bd27f0d9da56c077b339c62b9978b635f35a8bc46ddaf812?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    author: "Ken",
    title: "Tips to Understand Your Child Better - A Guide for Parents!",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/040eac62e1ea06480f022fc4d2ac516da10d8413f12514d9d5e1a5841f08eddf?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    author: "Ken",
    title: "Tips to Understand Your Child Better - A Guide for Parents!",
  },
];

const NewsCard: React.FC<NewsItem> = ({ imageSrc, author, title }) => {
  return (
    <div className="flex flex-col grow pb-24 border border-solid border-stone-500 rounded-[32px] max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full aspect-[1.35] rounded-[32px_32px_0px_0px] max-md:max-w-full"
      />
      <div className="flex flex-col mt-7 ml-11 max-w-full w-[382px] max-md:ml-2.5">
        <div className="flex gap-5 justify-between max-w-full text-lg tracking-wide leading-loose text-stone-500 w-[279px]">
          <div className="flex gap-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b491d36c6a0eec3ecdf6cca49969adf762dd4f2d4b06f86a2920088d0f5b8a1?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
              alt={`${author} avatar`}
              className="object-contain shrink-0 aspect-square w-[35px]"
            />
            <div className="self-start">by {author}</div>
          </div>
          <div className="flex gap-2.5 items-start my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f09db84f0d14ed8ea5c30516404eef5437291453229cb1c22a55336e62659d0?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673"
              alt="Comment icon"
              className="object-contain shrink-0 aspect-square w-[25px]"
            />
            <div className="basis-auto">0 Comments</div>
          </div>
        </div>
        <h3 className="mt-8 text-3xl font-semibold tracking-wider leading-10 text-zinc-800">
          {title}
        </h3>
      </div>
    </div>
  );
};

const NewsSection: React.FC = () => {
  return (
    <section className="flex z-10 flex-col mt-24 w-full max-w-[1670px] max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-5xl font-bold tracking-widest leading-none text-black max-md:text-4xl">
        EduKid News
      </h2>
      <p className="self-start mt-14 text-2xl tracking-wider leading-loose text-black max-md:mt-10 max-md:max-w-full">
        It is our goal to provide age appropriate opportunity for every child
        enrolled in EduKid Kids Club enrichment classes.
      </p>
      <div className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <NewsCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
