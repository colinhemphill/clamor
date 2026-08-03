import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: { useTypeScriptCli: true },
  reactStrictMode: true,
  reactCompiler: true,
  turbopack: {},
};

export default nextConfig;
