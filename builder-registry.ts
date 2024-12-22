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
  dynamic(() => import("./components/ui/Logo")),
  {
    name: "Logo",
    inputs: [
      {
        name: "image",
        type: "file",
      },
      {
        name: "alt",
        type: "string",
        required: true,
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ui/Hero")),
  {
    name: "Hero",
    inputs: [
      {
        name: "body",
        type: "html",
        required: true,
        defaultValue: "Default Body",
      },
      {
        name: "image",
        type: "file",
      },
      {
        name: "color",
        friendlyName: "Background color",
        type: "string",
        enum: ["red", "green", "teal"],
        defaultValue: "teal",
      },
    ],
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
        defaultValue: "Empowering Rehabilitative Justice."
      },
      {
        name: "description",
        type: "string",
        required: true,
        defaultValue: "We create technology that builds bonds, improves safety, strengthens communities, and supports second chances."
      }
    ],
  }
);

