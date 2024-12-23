/** @type {import('next').NextConfig} */

import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname), path.join(__dirname, 'src')],
    additionalData: `@import "styles/global.scss";`,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  webpack(config) {
    return config;
  },
};

export default nextConfig;
