/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output pour Docker / Cloud Run (bundle minimal)
  output: "standalone",

  // Turbopack (Next.js 15+)
  turbopack: {},
};

export default nextConfig;
