import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return ['/apartments/:path*', '/api/apartments/:path*'].map(source => ({source,headers:[
      {key:'X-Robots-Tag',value:'noindex, nofollow, noarchive'},
      {key:'Cache-Control',value:'private, no-store, max-age=0'},
      {key:'Referrer-Policy',value:'no-referrer'},
      {key:'X-Frame-Options',value:'DENY'},
      {key:'X-Content-Type-Options',value:'nosniff'},
    ]}));
  },
};

export default nextConfig;
