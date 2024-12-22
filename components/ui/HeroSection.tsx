import * as React from "react";

interface HeroContentProps {
  title: string;
  description: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ title, description }) => (
  <div className="text-2xl font-light leading-9 max-w-[725px] w-[90%] max-sm:hidden max-sm:max-w-none">
    <h1 className="my-10 text-6xl font-bold text-white border-0 border-white border-none outline-white decoration-white leading-[67.2px] max-sm:mb-8 max-sm:text-5xl max-sm:leading-[53px]">
      {title}
    </h1>
    <div className="mt-8 mr-10 mb-5 text-3xl font-light leading-10 text-white border-0 border-white border-none outline-white decoration-white max-sm:mt-5 max-sm:text-2xl max-sm:leading-7">
      {description}
    </div>
  </div>
);

const HeroSection: React.FC<{ title?: string; description?: string }> = ({ 
  title = "Empowering Rehabilitative Justice.",
  description = "We create technology that builds bonds, improves safety, strengthens communities, and supports second chances."
}) => {
  const heroData = {
    title,
    description,
  };

  return (
    <section
      role="banner"
      aria-label="Hero Section"
      className='flex flex-col justify-center px-5 py-24 text-2xl font-light leading-9 bg-no-repeat bg-cover bg-[55%_50%] bg-[url("https://www.aventiv.com/mp/images/hero-image-1.jpg")] h-[700px] max-sm:pb-16 max-sm:bg-[0px_0px,100%_30%] max-sm:bg-[auto,cover] max-sm:bg-[linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0)_61%),url("https://www.aventiv.com/mp/images/hero-image-1.jpg")] max-sm:h-[250px]'
    >
      <div className="flex justify-between items-center m-auto w-full text-2xl font-light leading-9 max-w-[1300px]">
        <HeroContent
          title={heroData.title}
          description={heroData.description}
        />
        <div className="text-2xl font-light leading-9 w-[70%]" />
      </div>
    </section>
  );
};

export default HeroSection;
