const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
            },
            {
                protocol: "https",
                hostname: "ecommerce-coffe-backend-rely.onrender.com",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            }
        ]
    }
}

export default nextConfig