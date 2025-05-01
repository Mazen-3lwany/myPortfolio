import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // Required for static export
  basePath: isGithubPages ? '/your-repo-name' : '',
  trailingSlash: true, // Optional but recommended for static sites
};

export default nextConfig;

