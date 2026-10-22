import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  outputFileTracingRoot: process.cwd(),
  images: {
    qualities: [100, 75],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
