import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "verde-grama": "#2E7D32",
        "amarelo-ouro": "#FBC02D",
        "vermelho-vibrante": "#D32F2F",
        preto: "#212121",
        branco: "#FFFFFF",
      },
    },
  },
  darkMode: "class",
};

export default config;
