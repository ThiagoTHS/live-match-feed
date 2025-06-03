"use client";

import { useState, useEffect, useRef } from "react";
import clsx from "clsx";

type Props = {
  onTimeUpdate: (minutes: number) => void;
};

export default function GameClock({ onTimeUpdate }: Props) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [speed, setSpeed] = useState(1); // velocidade de avanço
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const GAME_DURATION_MINUTES = 90;
  const GAME_DURATION_SECONDS = GAME_DURATION_MINUTES * 60;

  // Carregar tempo salvo ao iniciar
  useEffect(() => {
    const savedSeconds = localStorage.getItem("gameClockSeconds");
    if (savedSeconds) {
      const parsed = parseInt(savedSeconds, 10);
      if (!isNaN(parsed)) {
        setSeconds(parsed);
        onTimeUpdate(Math.floor(parsed / 60));
        if (parsed >= GAME_DURATION_SECONDS) setIsRunning(false);
      }
    }
  }, [onTimeUpdate]);

  // Salvar tempo no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("gameClockSeconds", seconds.toString());
  }, [seconds]);

  // Atualização automática do relógio
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          const next = prev + speed;
          const limited = Math.min(next, GAME_DURATION_SECONDS);

          if (limited >= GAME_DURATION_SECONDS) {
            setIsRunning(false);
          }

          // Dispara atualização após atualização do estado
          setTimeout(() => {
            onTimeUpdate(Math.floor(limited / 60));
          }, 0);

          return limited;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, speed, onTimeUpdate]);

  const toggleRunning = () => setIsRunning(!isRunning);

  const resetClock = () => {
    setSeconds(0);
    onTimeUpdate(0);
    setIsRunning(false);
    localStorage.removeItem("gameClockSeconds");
  };

  const advanceClock = (value: number) => {
    const next = seconds + value;
    const limited = Math.min(next, GAME_DURATION_SECONDS);
    setSeconds(limited);
    onTimeUpdate(Math.floor(limited / 60));
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6 p-4 border rounded-lg bg-white dark:bg-zinc-900 shadow transition-all">
      <div className="text-4xl font-mono tabular-nums text-verde-grama dark:text-amarelo-ouro animate-pulse">
        {String(minutes).padStart(2, "0")}:{String(secs).padStart(2, "0")}
      </div>

      <div className="flex gap-2">
        <button
          onClick={toggleRunning}
          className={clsx(
            "px-4 py-2 rounded text-white font-semibold transition",
            isRunning ? "bg-red-600" : "bg-green-600"
          )}
        >
          {isRunning ? "Pausar" : "Iniciar"}
        </button>

        <button
          onClick={resetClock}
          className="px-4 py-2 rounded bg-zinc-300 text-black dark:bg-zinc-700 dark:text-white font-semibold"
        >
          Resetar
        </button>

        <button
          onClick={() => advanceClock(60)}
          className="px-4 py-2 rounded bg-blue-600 text-white font-semibold"
        >
          +1 Min
        </button>

        <button
          onClick={() => advanceClock(300)}
          className="px-4 py-2 rounded bg-blue-800 text-white font-semibold"
        >
          +5 Min
        </button>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <label className="text-sm font-medium">Velocidade:</label>
        <select
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 dark:text-white text-sm"
        >
          <option value={1}>1x</option>
          <option value={2}>2x</option>
          <option value={5}>5x</option>
          <option value={10}>10x</option>
        </select>
      </div>
    </div>
  );
}
