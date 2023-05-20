/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.notion.so", "s3.us-west-2.amazonaws.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
