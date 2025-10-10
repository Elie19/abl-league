import MatchesClient from "./MatchesClient";
import { Match } from "@/lib/types";

export default function MatchesPage() {
  const matches: Match[] = [
    {
      id: "1",
      date: "2025-10-10T15:00:00Z",
      stadium: "Stade A",
      teamA: { id: "team1", name: "Équipe A" },
      teamB: { id: "team2", name: "Équipe B" },
      scoreA: 2,
      scoreB: 1,
    },
    // autres matchs ici
  ];

  return <MatchesClient matches={matches} />;
}
