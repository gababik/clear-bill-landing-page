/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/clear-bill-landing-page",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig