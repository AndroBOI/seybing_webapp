import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  images: {
    domains: [
      "ui-avatars.com",
      "lh3.googleusercontent.com",
       "cdn-icons-png.flaticon.com",
    ], 
  },
};

export default nextConfig;
