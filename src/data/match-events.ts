import rawData from "@/data/flamengo_juventude_with_events.json";

export type MatchEvent = {
  id: string;
  minute: number;
  type:
    | "Gol"
    | "Cartão Amarelo"
    | "Cartão Vermelho"
    | "Substituição"
    | "Fim de Jogo"
    | "Comentário";
  description: string;
  team: string;
  player?: string;
};

export const matchEvents: MatchEvent[] = rawData.events;
