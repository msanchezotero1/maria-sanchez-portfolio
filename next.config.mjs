/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/how-i-can-help", destination: "/services", permanent: true }];
  },
};

export default nextConfig;
