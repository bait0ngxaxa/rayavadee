import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚀 ปิด ESLint Warning ตอน Build
  },
  
};

export default nextConfig;
