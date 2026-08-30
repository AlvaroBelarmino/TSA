import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
