import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Utopia ESSEC - AI Association",
    short_name: "Utopia ESSEC",
    description:
      "Utopia is the AI association of ESSEC Business School, dedicated to exploring and sharing knowledge about artificial intelligence and its applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcf2ff",
    theme_color: "#3c3c3c",
    icons: [
      {
        src: "/utopia.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/utopia.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
