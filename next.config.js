/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
