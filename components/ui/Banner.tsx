import * as React from "react";

interface BannerProps {
  imageUrl: string;
  title: string;
  description: string[];
}

const Banner: React.FC<BannerProps> = ({ imageUrl, title, description }) => {
  return (
    <main className="px-11 py-12 bg-primaryLight max-md:px-5" role="main">
      <section className="flex gap-5 max-md:flex-col" aria-label={title}>
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageUrl}
            alt="Banner Image"
            className="object-contain w-full aspect-square max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="self-start text-4xl font-bold text-primaryAccent leading-[50px] whitespace-pre-line">
              {title}
            </h1>
            <p className="mt-8 text-primaryDark max-md:max-w-full" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
