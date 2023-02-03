import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const ANALYZE = process.env.ANALYZE === "true";

/**
 * @type {import('next/config').PublicConfig}
 **/
const publicRuntimeConfig = {
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  publicRuntimeConfig,
  webpack: (config, { isServer }) => {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
};

export default nextConfig;
