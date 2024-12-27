import * as React from "react";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  backgroundImageUrl: string;
}

export default function HeroSection({
  title = "[Title]",
  subtitle = "[Subtitle",
  buttonText,
  backgroundImageUrl = "https://www.aventiv.com/mp/images/hero-image-1.jpg",
}: HeroProps) {
  return (
    <section
      className="flex relative flex-col justify-center px-6 py-40 min-h-[686px] max-md:px-5 max-md:py-24"
      role="banner"
      aria-label="Hero section"
    >
      <Image
        src={backgroundImageUrl}
        alt="hero background image"
        className="object-cover"
        role="presentation"
        fill
        priority
      />
      <div className="flex relative flex-col text-primaryLight max-w-full w-full lg:w-[800px]">
        <div className="px-4 md:px-20">
          <h1 className="text-left w-full">{title} this is an update</h1>
          <p className="mt-4 text-xl md:text-3xl text-left w-full">
            {subtitle}
          </p>
          {buttonText && <button aria-label={buttonText}>{buttonText}</button>}
        </div>
      </div>
    </section>
  );
}
