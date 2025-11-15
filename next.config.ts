import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_DISABLE_DEVTOOLS: "1",
  },
};

export default nextConfig;
