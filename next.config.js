/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["i.postimg.cc", "res.cloudinary.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
