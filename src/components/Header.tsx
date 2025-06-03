"use client";

import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-verde-grama dark:bg-black text-white shadow-md">
      <div className="w-[93px] h-[24px]">
        <Image
          src="https://lncimg.lance.com.br/assets/lance-global/v1/logo-lance.svg"
          alt="Logo Lance"
          width={93}
          height={24}
          className="object-contain transition-all dark:invert"
        />
      </div>
      <ThemeToggle />
    </header>
  );
}
