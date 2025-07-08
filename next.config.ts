import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "68.183.236.122", 
      "cyberschool.sgp1.cdn.digitaloceanspaces.com", 
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://68.183.236.122:3000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
