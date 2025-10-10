"use client";

import { useState } from "react";
import { Match } from "types";
import { generateICS } from "../utils/icsGenerator"; //fonction utilitaire pour générer le .ics

interface MatchesClientProps {
  matches: Match[];
}

export default function MatchesClient({ matches }: MatchesClientProps) {
  const [icsContent, setIcsContent] = useState<string | null>(null);

  const handleExportCalendar = () => {
    // Filtrer pour obtenir uniquement les matchs valides
    const validMatches: Match[] = matches.filter(
      (m): m is Match => m.date !== undefined && m.teamA.id !== undefined && m.teamB.id !== undefined
    );

    const ics = generateICS(validMatches);
    setIcsContent(ics);

    // Téléchargement du fichier .ics
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "matches.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="matches-client">
      <button
        className="px-4 py-2 mb-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleExportCalendar}
      >
        Exporter le calendrier
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((match) => (
          <div key={match.id} className="p-4 border rounded shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <img src={match.teamA.logo} alt={match.teamA.name} className="w-8 h-8" />
                <span>{match.teamA.name}</span>
              </div>
              <span>VS</span>
              <div className="flex items-center gap-2">
                <img src={match.teamB.logo} alt={match.teamB.name} className="w-8 h-8" />
                <span>{match.teamB.name}</span>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              {new Date(match.date).toLocaleDateString("fr-FR", {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>

            <p className="text-sm text-gray-500">Stade: {match.stadium}</p>
            <p className="text-sm text-gray-500">
              Score: {match.scoreA} - {match.scoreB}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
