import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "188.166.177.147", 
      "cyberschool.sgp1.cdn.digitaloceanspaces.com", 
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://188.166.177.147:3001/api/:path*",
      },
    ];
  },
};

export default nextConfig;