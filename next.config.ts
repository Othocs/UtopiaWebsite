import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Improve Core Web Vitals with image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utopiaessec.fr",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // Temporarily disable redirects to troubleshoot
  /* 
  async redirects() {
    return [
      // Redirect www to non-www (or vice versa based on preference)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.utopiaessec.fr",
          },
        ],
        destination: "https://utopiaessec.fr/:path*",
        permanent: true,
      },
      // Redirect old URLs if needed
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },
  */

  // Add HTTP headers for security and caching
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },

  // Enable gzip compression
  compress: true,

  // Enable React strict mode for better performance and fewer bugs
  reactStrictMode: true,
};

export default nextConfig;
