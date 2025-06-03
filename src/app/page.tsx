"use client";

import { useState } from "react";
import { matchEvents } from "@/data/match-events";
import EventList from "@/components/EventList";
import EventFilter from "@/components/EventFilter";
import GameClock from "@/components/GameClock";
import NarratorComments from "@/components/NarratorComments";

import rawData from "@/data/flamengo_juventude_with_events.json";
import LiveScore from "@/components/LiveScore";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [currentTime, setCurrentTime] = useState(0);

  const filteredEvents = matchEvents.filter((event) => {
    const matchFilter = filter === "all" || event.type === filter;
    const matchTime = event.minute <= currentTime;
    return matchFilter && matchTime;
  });

  const teamA = rawData.match.team_a;
  const teamB = rawData.match.team_b;

  const teamAGoals = matchEvents.filter(
    (e) => e.type === "goal" && e.team === teamA.name && e.minute <= currentTime
  ).length;

  const teamBGoals = matchEvents.filter(
    (e) => e.type === "goal" && e.team === teamB.name && e.minute <= currentTime
  ).length;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Lance a Lance</h2>

      <LiveScore
        teamA={{ name: teamA.name, logo: teamA.logo }}
        teamB={{ name: teamB.name, logo: teamB.logo }}
        teamAGoals={teamAGoals}
        teamBGoals={teamBGoals}
        slug={rawData.match.slug}
        time={"21:30"} //não achei esse informação no JSON
        stadium={rawData.match.stadium.name}
      />

      <GameClock onTimeUpdate={setCurrentTime} />

      <EventFilter onChange={setFilter} />

      {/* Layout em duas colunas */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 lg:flex-[3]">
          <EventList events={filteredEvents} />
        </div>
        <div className="flex-1 lg:flex-[2]">
          <NarratorComments currentTime={currentTime} />
        </div>
      </div>
    </section>
  );
}
