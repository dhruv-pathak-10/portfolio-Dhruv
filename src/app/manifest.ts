import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dhruv Pathak — AI Solutions Engineer & Solution Architecture",
    short_name: "Dhruv Pathak",
    description: "AI Solutions Engineer focused on AI adoption, solution architecture, and business workflow transformation.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F1EB",
    theme_color: "#6D0305",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
