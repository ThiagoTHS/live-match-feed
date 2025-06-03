"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const filters = [
  "all",
  "goal",
  "foul",
  "yellow_card",
  "red_card",
  "substitution",
  "half_time",
  "end",
];

const filterLabels: Record<string, string> = {
  all: "Todos",
  goal: "Gol",
  foul: "Falta",
  yellow_card: "Cartão Amarelo",
  red_card: "Cartão Vermelho",
  substitution: "Substituição",
  half_time: "Intervalo",
  end: "Fim do Jogo",
};

type Props = {
  onChange: (filter: string) => void;
};

export default function EventFilter({ onChange }: Props) {
  const [selected, setSelected] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  function handleFilterChange(filter: string) {
    setSelected(filter);
    onChange(filter);
    setIsOpen(false); // fecha dropdown ao escolher
  }

  return (
    <div className="mb-4">
      {/* Mobile Dropdown */}
      <div className="relative sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2 border rounded-md bg-white dark:bg-zinc-800 dark:text-white"
        >
          <span>{filterLabels[selected]}</span>
          <ChevronDown
            className={`w-5 h-5 ml-2 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown list */}
        <ul
          className={`mt-2 border rounded-md bg-white dark:bg-zinc-800 dark:text-white overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {filters.map((f) => (
            <li
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`px-4 py-2 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700 ${
                selected === f ? "font-semibold text-verde-grama" : ""
              }`}
            >
              {filterLabels[f]}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Botões */}
      <div className="hidden sm:flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => handleFilterChange(f)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selected === f
                ? "bg-verde-grama text-white"
                : "bg-zinc-200 dark:bg-zinc-700 dark:text-white"
            }`}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>
    </div>
  );
}
