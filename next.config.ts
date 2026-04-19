import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: '/hma-kechito', 
  assetPrefix: '/hma-kechito',
};

export default nextConfig;
