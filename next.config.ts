import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['image.tmdb.org'],
    unoptimized:true
  }
};

export default nextConfig;