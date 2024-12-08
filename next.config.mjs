/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        port: "",
        pathname: "/content/**",
      }, //Squarespace
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      }, //Lorem Picsum
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["*.execute-api.us-east-1.amazonaws.com"],
    },
  },
  output: "standalone", //for AWS SAM deployment
};

export default nextConfig;
