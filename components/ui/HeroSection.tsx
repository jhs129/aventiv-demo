import * as React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImageUrl: string;
}

export default function HeroSection({
  title = "Empowering Rehabilitative Justice.",
  subtitle = "We create technology that builds bonds, improves safety, strengthens communities, and supports second chances.",
  buttonText = "Learn More",
  backgroundImageUrl = "https://cdn.builder.io/api/v1/image/assets/7bf199de15724d268c1417f75ca31ce1/f4e7cb274adfc1c616aea0b9a7d94c804c7d853f94c02ea0f35e1be0de978b13?apiKey=7bf199de15724d268c1417f75ca31ce1&"
}: HeroProps) {
  return (
    <section 
      className="flex relative flex-col justify-center items-center px-6 py-40 min-h-[686px] max-md:px-5 max-md:py-24"
      role="banner"
      aria-label="Hero section"
    >
      <img
        loading="lazy"
        src={backgroundImageUrl}
        alt=""
        className="object-cover absolute inset-0 size-full"
        role="presentation"
      />
      <div className="flex relative flex-col max-w-full text-white w-[862px]">
        <h1>
          {title}
        </h1>
        <p className="mt-4 text-2xl md:text-3xl">
          {subtitle}
        </p>
      </div>
      <div className="flex relative flex-col mt-8 leading-none">
        <button aria-label={buttonText}>
          {buttonText}
        </button>
      </div>
    </section>
  );
}