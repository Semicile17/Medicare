import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w1.pngwing.com", // Replace with the external domain
      },
    ],
  },
};

export default nextConfig;
