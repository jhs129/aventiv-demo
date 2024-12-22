import * as React from "react";

// Types
interface HeroButtonProps {
  variant: "light" | "dark";
  text: string;
  className: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  heroImage: string;
  buttons: HeroButtonProps[];
}

// HeroButton Component
function HeroButton({ text, className }: HeroButtonProps) {
  return (
    <button
      className={`w-full sm:w-auto px-6 py-3 rounded-lg border transition-all duration-200 ${className} hover:opacity-90`}
      type="button"
      aria-label={text}
    >
      {text}
    </button>
  );
}

// HeroSection Component
export function HeroSection({
  title,
  subtitle,
  heroImage,
  buttons,
}: HeroSectionProps) {
  return (
    <section
      className="min-h-[400px] sm:min-h-[524px] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`
      }}
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 
          id="hero-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        {buttons?.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            {buttons.map((button, index) => (
              <HeroButton
                key={index}
                {...button}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
