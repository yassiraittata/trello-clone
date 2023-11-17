/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cloud.appwrite.io", "links.papareact.com"],
    env: {
      DATA_BASE_ID: process.env.DATA_BASE_ID,
    },
  },
};

module.exports = nextConfig;
