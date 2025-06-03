"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Clock4 } from "lucide-react";
import clsx from "clsx";

export default function MatchTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"auto" | "manual">("auto");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (mode === "auto" && isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [isRunning, mode]);

  function toggleRunning() {
    setIsRunning((prev) => !prev);
  }

  function reset() {
    setIsRunning(false);
    setSeconds(0);
    clearInterval(intervalRef.current as NodeJS.Timeout);
  }

  function adjustTime(amount: number) {
    setSeconds((prev) => Math.max(0, prev + amount));
  }

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Clock4 className="w-5 h-5" /> Cronômetro da Partida
        </h2>
        <button
          onClick={() => {
            reset();
            setMode((prev) => (prev === "auto" ? "manual" : "auto"));
          }}
          className="px-3 py-1 text-sm rounded bg-zinc-300 dark:bg-zinc-700 text-black dark:text-white"
        >
          Modo: {mode === "auto" ? "Automático" : "Manual"}
        </button>
      </div>

      <div className="text-center text-6xl font-bold tracking-widest mb-4 transition-all duration-300 animate-pulse">
        {formatTime(seconds)}
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        <button
          onClick={toggleRunning}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded transition-colors",
            isRunning
              ? "bg-yellow-500 text-white hover:bg-yellow-600"
              : "bg-green-600 text-white hover:bg-green-700"
          )}
        >
          {isRunning ? <Pause size={18} /> : <Play size={18} />}
          {isRunning ? "Pausar" : "Iniciar"}
        </button>

        <button
          onClick={reset}
          className="flex items-center gap-2 px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
        >
          <RotateCcw size={18} />
          Resetar
        </button>

        {mode === "manual" && (
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => adjustTime(-60)}
              className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800"
            >
              -1 min
            </button>
            <button
              onClick={() => adjustTime(-10)}
              className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800"
            >
              -10 s
            </button>
            <button
              onClick={() => adjustTime(10)}
              className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800"
            >
              +10 s
            </button>
            <button
              onClick={() => adjustTime(60)}
              className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800"
            >
              +1 min
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
