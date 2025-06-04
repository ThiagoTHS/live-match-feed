"use client";

import { narratorComments } from "@/data/narrator-comments";

type Props = {
  currentTime: number;
};

export default function NarratorComments({ currentTime }: Props) {
  const visibleComments = narratorComments
    .filter((c) => c.minute <= currentTime)
    .sort((a, b) => b.minute - a.minute); // Ordena do mais recente para o mais antigo

  return (
    <section>
      <h3 className="text-xl font-bold mb-2">Comentários do Narrador</h3>
      <div className="space-y-3">
        {visibleComments.map((comment) => (
          <div
            key={comment.id}
            className="p-3 bg-white dark:bg-zinc-800 rounded shadow border border-gray-200 dark:border-zinc-700"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {String(comment.minute).padStart(2, "0")}’ - Comentário
            </p>
            <p className="text-preto dark:text-branco">{comment.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
