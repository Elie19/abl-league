// app/matches/MatchesClient.tsx
"use client";

import { useState } from "react";
import { generateICS } from "@/lib/calendar";
import { Match } from "@/lib/types";
import { matches } from "@/app/api/matches/data";
import { motion } from "framer-motion";

export default function MatchesClient() {
  const [icsContent, setIcsContent] = useState<string | null>(null);

  const handleExportCalendar = () => {
    // Filtrer les matchs valides et compléter les champs manquants
    const validMatches: Match[] = matches
      .filter(
        (m): m is Match =>
          m.date !== undefined &&
          m.teamA !== undefined &&
          m.teamB !== undefined
      )
      .map((m) => ({
        ...m,
        teamA: {
          title: m.teamA.title ?? 0,
          city: m.teamA.city ?? "",
          coach: m.teamA.coach ?? "",
          founded: m.teamA.founded ?? 0,
          ...m.teamA,
        },
        teamB: {
          title: m.teamB.title ?? 0,
          city: m.teamB.city ?? "",
          coach: m.teamB.coach ?? "",
          founded: m.teamB.founded ?? 0,
          ...m.teamB,
        },
      }));

    const ics = generateICS(validMatches);
    setIcsContent(ics);

    // Crée et télécharge le fichier .ics
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "abl-league-calendar.ics";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Matchs
      </motion.h1>

      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Consultez les résultats récents, les matchs à venir et ajoutez-les à
        votre calendrier.
      </p>

      {/* Bouton d’export */}
      <button
        onClick={handleExportCalendar}
        className="mb-8 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all"
      >
        Exporter le calendrier (.ics)
      </button>

      {/* Liste des matchs */}
      <div className="grid gap-6 md:grid-cols-2">
        {matches
          .filter((m): m is Match => m.date !== undefined)
          .map((match: Match) => (
            <motion.div
              key={match.id}
              className="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">
                  {match.teamA.name} vs {match.teamB.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(match.date).toLocaleDateString("fr-FR", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <p className="text-sm text-gray-400">
                📍 {match.stadium || "Stade non spécifié"}
              </p>

              {match.scoreA !== undefined && match.scoreB !== undefined ? (
                <p className="mt-2 text-lg font-medium text-green-600 dark:text-green-400">
                  Résultat : {match.scoreA} - {match.scoreB}
                </p>
              ) : (
                <p className="mt-2 text-sm text-yellow-500">À venir ⏳</p>
              )}
            </motion.div>
          ))}
      </div>

      {/* Affiche le contenu ICS (debug facultatif) */}
      {icsContent && (
        <pre className="mt-8 bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
          {icsContent}
        </pre>
      )}
    </div>
  );
}
