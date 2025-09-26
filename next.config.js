// @ts-ignore
/** @type {import("next").NextConfig} */
const config = {
  // Ensure trailing slashes for consistency
  trailingSlash: true,
  
  // Disable React strict mode to prevent double rendering in development
  reactStrictMode: false,
  
  // Base path configuration - set this to match your deployment path
  // For production, this will be empty since we're deploying to the root
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Asset prefix for CDN support if needed
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Image optimization settings
  images: {
    unoptimized: true, // Disable default Image Optimization API
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all external images
      },
    ],
  },
  
  // Disable ESLint during builds for now
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable TypeScript type checking during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: true,
  webpack: (config, { isServer }) => {
    config.stats = "verbose";
    config.devtool = 'source-map'
    // Enhanced node polyfills for postgres and other modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // File system - never needed in browser
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        'perf_hooks': false,

        // Definitely not needed in browser
        child_process: false,
        dns: false,
      };
    }
    return config;
  },
  async rewrites() {
    return [
      // Preserve source maps
      {
        source: '/_next/:path*.map',
        destination: '/_next/:path*.map',
      },
      // Add any specific rewrites you need for your routes
      // Example:
      // {
      //   source: '/blog/:slug*',
      //   destination: '/posts/:slug*',
      // },
    ];
  },
  
  // Ensure public files are properly cached
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|gif|ico|woff|woff2|ttf|eot)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
export default config;
