"use client";

import {
  Instagram,
  Facebook,
  Youtube,
  MessageCircleMore,
  PhoneCall,
} from "lucide-react";

const links = [
  {
    name: "WhatsApp",
    href: "https://www.lance.com.br/canais-whatsapp",
    icon: <PhoneCall size={18} />,
    color: "text-green-500",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@lancedigital",
    icon: <MessageCircleMore size={18} />,
    color: "text-black dark:text-white",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/lancedigital/",
    icon: <Instagram size={18} />,
    color: "text-pink-500",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/lancedigital",
    icon: <Facebook size={18} />,
    color: "text-blue-600",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCmCHSxqI2jF3leCsMS9q-fg",
    icon: <Youtube size={18} />,
    color: "text-red-600",
  },
];

export default function Footer() {
  return (
    <footer className="bg-verde-grama dark:bg-zinc-900 text-white py-6 px-4 sm:px-8 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* redes sociais */}
        <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
              aria-label={link.name}
            >
              <span
                className={`${link.color} group-hover:scale-110 transition-transform`}
              >
                {link.icon}
              </span>
              <span className="text-sm font-medium hidden sm:inline">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-center sm:text-right text-black dark:text-white">
          © LANCE WEB LTDA. Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
