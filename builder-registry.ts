import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";
import { fileURLToPath } from "url";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(
  dynamic(() => import("@/components/layout/Header")),
  {
    name: "Header",
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/layout/Footer")),
  {
    name: "Footer",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ui/Banner50")),
  {
    name: "Banner50",
    inputs: [
      {
        name: "heading",
        type: "string",
        required: true,
        defaultValue: "Main Heading",
      },
      {
        name: "subheading",
        type: "string",
        required: false,
        defaultValue: "Subheading text",
      },
      {
        name: "bodyText",
        type: "html",
        required: true,
        defaultValue: "Main body text goes here",
      },
      {
        name: "extendedText",
        type: "text",
        defaultValue: "Additional text content",
      },
      {
        name: "imageSrc",
        type: "file",
        required: true,
        allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      },
      {
        name: "imageAlt",
        type: "string",
        required: true,
        defaultValue: "Banner image",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/ui/HeroSection")),
  {
    name: "HeroSection",
    inputs: [
      {
        name: "title",
        type: "string",
        required: true,
        defaultValue: "[Headline]",
      },
      {
        name: "subtitle",
        type: "string",
        required: true,
        defaultValue: "[Subheadline]",
      },
      {
        name: "buttonText",
        type: "string",
        required: true,
        defaultValue: "Learn More",
      },
      {
        name: "backgroundImageUrl",
        type: "file",
        required: false,
        allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/ui/Banner")),
  {
    name: "Banner",
    inputs: [
      {
        name: "imageUrl",
        type: "file",
        required: false,
        defaultValue: "https://cdn.builder.io/api/v1/image/assets/676a64f96e2d4faca81be7ca51ab5911/98e95f5e06a909c2f1faacd8626e7c7d731d06abd2630cd6d88ad1e12af39931?apiKey=676a64f96e2d4faca81be7ca51ab5911&",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      },
      {
        name: "title",
        type: "string",
        required: true,
        defaultValue: "[Title]",
      },
      {
        name: "description",
        type: "html",
        defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  }
);
