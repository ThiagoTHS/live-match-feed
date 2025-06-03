/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    domains: [
      "temporeal.lance.com.br",
      // adicione outros domínios que usar aqui se necessário
    ],
    // unoptimized: true, // Desativa otimização de imagens para exportação
  },
  // basePath: "/live-match-feed", // importante para GitHub Pages
  // assetPrefix: "/live-match-feed", // garante que assets carreguem do path certo
};
