/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          pathname: "**",
        },
      ],
    },
    async redirects() { 
      return [ 
        { 
          source: "/viewBlog/:slug*", 
          destination: "/view-blog/:slug*", 
          permanent: true, 
        }, 
      ]; 
    },
  };
  
  export default nextConfig;
