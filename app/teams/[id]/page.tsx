"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { teams } from "@/app/api/teams/data";
import { motion } from "framer-motion";

export default function TeamDetailPage() {
  const { id } = useParams();
  const team = teams.find((t) => t.id.toString() === id);

  if (!team) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 dark:text-gray-300">Équipe introuvable.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900">
      {/* Image de couverture */}
      <section className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src={team.cover || "/images/team-cover.png"}
          alt={`${team.name} cover`}
          fill
          priority
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />

        {/* Logo centré sur la couverture */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <Image
            src={team.logo}
            alt={team.name}
            width={120}
            height={120}
            className="rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
          />
        </div>
      </section>

      {/* 📋 Informations principales */}
      <section className="w-full max-w-4xl mt-20 px-6 text-center">
        <motion.h1
          className="text-3xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {team.name}
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {team.city}, {team.country}
        </p>

        <div className="flex justify-center items-center gap-6 mt-6">
          <div className="text-center">
            <p className="text-lg font-bold text-primary">{team.title || 0}</p>
            <p className="text-sm text-gray-500">Titres</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-primary">
              {team.founded || "—"}
            </p>
            <p className="text-sm text-gray-500">Fondée</p>
          </div>
        </div>
      </section>

      {/*  Liste des joueurs */}
      <section className="w-full max-w-4xl mt-12 mb-16 px-6">
        <h2 className="text-2xl font-bold mb-4 text-primary text-center">
          Effectif
        </h2>

        {team.players && team.players.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.players.map((player) => (
              <motion.div
                key={player.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={player.photo || "/images/player-placeholder.jpg"}
                    alt={player.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-2"
                  />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {player.name}
                  </h3>
                  <p className="text-sm text-gray-500">{player.position}</p>
                  <p className="text-xs text-gray-400">
                    #{player.number} — {player.nationality}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">
            Aucun joueur disponible pour cette équipe.
          </p>
        )}
      </section>
    </main>
  );
}
