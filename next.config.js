/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      };
    }

    // Performance boosts for three.js & r3f
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      layers: true
    };

    config.ignoreWarnings = [
      { module: /node_modules\/three/ }
    ];

    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      three: require.resolve("three")
    };

    return config;
  }
};

module.exports = nextConfig;
