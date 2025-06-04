"use client";

import { useEffect, useState } from "react";
import { matchEvents } from "@/data/match-events";
import { narratorComments } from "@/data/narrator-comments"; // <-- Correção aqui
import EventList from "@/components/EventList";
import EventFilter from "@/components/EventFilter";
import GameClock from "@/components/GameClock";
import NarratorComments from "@/components/NarratorComments";
import rawData from "@/data/flamengo_juventude_with_events.json";
import LiveScore from "@/components/LiveScore";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [currentTime, setCurrentTime] = useState(0);
  const [view, setView] = useState<"events" | "comments">("events");
  const [lastEventTime, setLastEventTime] = useState(0);
  const [lastCommentTime, setLastCommentTime] = useState(0);
  const [newEvent, setNewEvent] = useState(false);
  const [newComment, setNewComment] = useState(false);

  const filteredEvents = matchEvents.filter((event) => {
    const matchFilter = filter === "all" || event.type === filter;
    const matchTime = event.minute <= currentTime;
    return matchFilter && matchTime;
  });

  const visibleComments = narratorComments.filter(
    (c) => c.minute <= currentTime
  );

  useEffect(() => {
    const latestEvent = Math.max(...filteredEvents.map((e) => e.minute), 0);
    const latestComment = Math.max(...visibleComments.map((c) => c.minute), 0);

    if (latestEvent > lastEventTime) {
      setNewEvent(true);
      setLastEventTime(latestEvent);
    }

    if (latestComment > lastCommentTime) {
      setNewComment(true);
      setLastCommentTime(latestComment);
    }
  }, [
    currentTime,
    filteredEvents,
    visibleComments,
    lastEventTime,
    lastCommentTime,
  ]);

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
        time={"21:30"}
        stadium={rawData.match.stadium.name}
        currentMinute={currentTime}
      />

      <GameClock onTimeUpdate={setCurrentTime} />

      <EventFilter onChange={setFilter} />

      {/* Mobile View Toggle */}
      <div className="flex justify-around sm:hidden mb-4">
        <button
          className={`px-4 py-2 rounded-md font-semibold transition ${
            view === "events"
              ? "bg-verde-grama text-white"
              : "bg-zinc-200 dark:bg-zinc-700"
          } relative`}
          onClick={() => {
            setView("events");
            setNewEvent(false);
          }}
        >
          Lances
          {newEvent && (
            <span className="absolute top-0 right-0 mt-0.5 mr-0.5 w-2 h-2 rounded-full bg-red-500 animate-ping" />
          )}
        </button>
        <button
          className={`px-4 py-2 rounded-md font-semibold transition ${
            view === "comments"
              ? "bg-verde-grama text-white"
              : "bg-zinc-200 dark:bg-zinc-700"
          } relative`}
          onClick={() => {
            setView("comments");
            setNewComment(false);
          }}
        >
          Central do Jogo
          {newComment && (
            <span className="absolute top-0 right-0 mt-0.5 mr-0.5 w-2 h-2 rounded-full bg-red-500 animate-ping" />
          )}
        </button>
      </div>

      {/* Layout adaptativo */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 lg:flex-[3]">
          {view === "events" ||
          (typeof window !== "undefined" && window.innerWidth >= 1024) ? (
            <EventList events={filteredEvents} />
          ) : null}
        </div>
        <div className="flex-1 lg:flex-[2]">
          {view === "comments" ||
          (typeof window !== "undefined" && window.innerWidth >= 1024) ? (
            <NarratorComments currentTime={currentTime} />
          ) : null}
        </div>
      </div>
    </section>
  );
}
