import { MatchEvent } from "@/data/match-events";
import {
  Goal,
  ShieldAlert,
  ShieldCheck,
  ArrowLeftRight,
  Clock,
  Flag,
  XCircle,
} from "lucide-react";

type Props = {
  events: MatchEvent[];
};

const typeConfig: Record<
  string,
  { label: string; icon: JSX.Element; color: string }
> = {
  goal: {
    label: "Gol",
    icon: <Goal size={20} />,
    color: "bg-green-500 text-white",
  },
  foul: {
    label: "Falta",
    icon: <Flag size={20} />,
    color: "bg-yellow-400 text-black",
  },
  yellow_card: {
    label: "Cartão Amarelo",
    icon: <ShieldCheck size={20} />,
    color: "bg-yellow-500 text-black",
  },
  red_card: {
    label: "Cartão Vermelho",
    icon: <ShieldAlert size={20} />,
    color: "bg-red-600 text-white",
  },
  substitution: {
    label: "Substituição",
    icon: <ArrowLeftRight size={20} />,
    color: "bg-blue-500 text-white",
  },
  half_time: {
    label: "Intervalo",
    icon: <Clock size={20} />,
    color: "bg-zinc-400 text-white",
  },
  end: {
    label: "Fim de Jogo",
    icon: <XCircle size={20} />,
    color: "bg-black text-white",
  },
};

export default function EventList({ events }: Props) {
  return (
    <div className="space-y-4">
      {events.map((event) => {
        const config = typeConfig[event.type] ?? {
          label: event.type,
          icon: <Clock size={20} />,
          color: "bg-gray-300 text-black",
        };

        const showPlayer =
          event.player &&
          event.player !== "0" &&
          event.team &&
          event.team !== "0";

        return (
          <div
            key={event.id}
            className={`p-4 border border-gray-200 dark:border-zinc-700 rounded-md shadow-sm bg-white dark:bg-zinc-900 flex items-start gap-4
            transition-all duration-500 ease-in-out transform hover:scale-[1.015] hover:shadow-md animate-fade-up`}
          >
            <div className={`p-2 rounded-full ${config.color} shrink-0`}>
              {config.icon}
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-semibold">
                {event.minute}′ — {config.label}
              </div>
              <p className="font-medium text-preto dark:text-branco">
                {event.description}
              </p>
              {showPlayer && (
                <p className="text-sm italic text-gray-600 dark:text-gray-300">
                  {event.player} ({event.team})
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
