/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: "export",
  basePath: "/oryzo-ai",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
