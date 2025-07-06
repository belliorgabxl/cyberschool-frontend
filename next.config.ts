import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://68.183.236.122:3000/api/:path*', 
      },
    ];
  }
};

export default nextConfig;
