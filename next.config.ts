/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Desativa otimização de imagens para exportação
  },
  basePath: "/live-match-feed", // importante para GitHub Pages
  assetPrefix: "/live-match-feed", // garante que assets carreguem do path certo
};

module.exports = nextConfig;
