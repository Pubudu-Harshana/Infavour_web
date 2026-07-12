import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
    localPatterns: [
      {
        pathname: "/Images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
