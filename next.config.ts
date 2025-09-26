import type { NextConfig } from "next";

const nextConfig: NextConfig = {
        devIndicators:false,
         images: {
    domains: [
      "api.microlink.io",  
    ],
  },
  eslint: {
    // ⚠️ Warning: This allows production builds to succeed even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
