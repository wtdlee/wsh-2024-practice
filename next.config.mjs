/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH, // Sets the base path to `/some-base-path`.
  distDir: './dist/', // Changes the build output directory to `./dist/`.
  output: 'standalone', // Outputs a Single-Page Application (SPA).
};

export default nextConfig;
