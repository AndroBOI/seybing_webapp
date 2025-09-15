import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ui-avatars.com"], // whitelist external image hosts
  },
};

export default nextConfig;
