import React from "react";

const TeachersSection: React.FC = () => {
  const teachers = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/22597fd545deecd4468f002318585b18ffed603cea6b7281c72f34ce5a99dfc8?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c2ad35727f9c90ae8a985b33a11530b0d9a85644cbfe389039fde8189086c076?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0aa7931b4bb7f99bc8f80c6ddfb3bae9584ac7b9c0931ad06cf70f772513ffb9?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f5eee3142ef40b6868b8eca081e43cc6033c920abf001cabd1216c7eaed752?placeholderIfAbsent=true&apiKey=69b6bc2ce7e445dc86378964c554c673",
    },
  ];

  return (
    <section className="mt-44 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold tracking-widest leading-none text-black max-md:text-4xl">
        Our Best Teachers
      </h2>
      <p className="mt-14 text-2xl tracking-wider leading-10 text-center text-black max-md:mt-10 max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc
        posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus
        sagittis pellentesque eget convallis commodo. Sit pellentesque dolor
        neque a diam malesuada.
      </p>
      <div className="mt-16 w-full max-w-[1672px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
            >
              <img
                loading="lazy"
                src={teacher.imageSrc}
                alt={`Teacher ${index + 1}`}
                className="object-contain grow shrink-0 max-w-full rounded-none aspect-[0.65] w-[397px] max-md:mt-7"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2.5 mt-20 ml-3.5 max-w-full w-[135px] max-md:mt-10">
        <div className="flex shrink-0 bg-black rounded-2xl h-[13px] w-[27px]" />
        <div className="flex shrink-0 rounded-2xl bg-zinc-100 h-[13px] w-[27px]" />
        <div className="flex shrink-0 rounded-2xl bg-zinc-100 h-[13px] w-[27px]" />
        <div className="flex shrink-0 rounded-2xl bg-zinc-100 h-[13px] w-[27px]" />
      </div>
    </section>
  );
};

export default TeachersSection;
