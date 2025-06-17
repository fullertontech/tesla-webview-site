import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["beta-image.idealcard.com.tw", "image.idealcard.com.tw"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://beta-image.idealcard.com.tw",
        port: "",
      },
      {
        protocol: "https",
        hostname: "https://image.idealcard.com.tw",
        port: "",
      },
    ],
  },
};

export default nextConfig;
