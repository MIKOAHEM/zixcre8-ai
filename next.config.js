/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.resolve.extensions.push(".glb", ".gltf");
    return config;
  },
};

module.exports = nextConfig;
