import rawData from "@/data/flamengo_juventude_with_events.json";

export type MatchEvent = {
  id: string;
  minute: number;
  type: string;
  description: string;
  team: string;
  player?: string;
};

export const matchEvents: MatchEvent[] = rawData.events;
