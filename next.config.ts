import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.102"],
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
