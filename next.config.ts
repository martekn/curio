import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.noroff.dev",
        port: "",
        pathname: "/api/online-shop/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
