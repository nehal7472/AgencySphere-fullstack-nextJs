import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agency.teamrabbil.com",
      },
    ],
  },
};

export default nextConfig;
