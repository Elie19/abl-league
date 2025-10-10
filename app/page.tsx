"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { matches } from "@/app/api/matches/data";
import { standings } from "@/app/api/standings/data";
import { teams } from "@/app/api/teams/data";

export const metadata = {
  title: "ABL League | Accueil",
  description:
    "Bienvenue sur la plateforme officielle de l’African Basketball League (ABL). Découvrez les équipes, les résultats récents et les classements à jour.",
};

export default function HomePage() {
  const recentMatches = matches
    .filter((m) => m.scoreA !== null && m.scoreB !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const topTeams = standings
    .slice(0, 3)
    .map((s) => teams.find((t) => t.id === s.teamId))
    .filter(Boolean);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start">
      {/* Background image  */}
      <div className="absolute inset-0 h-1/2 w-full overflow-hidden">
        <Image
          src="/images/basket-bg.jpg"
          alt="Background basketball"
          fill
          priority
          className="object-cover object-center opacity-60 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/*  Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 space-y-16 text-center w-full">
        {/* Section bannière */}
        <motion.section
          className="max-w-3xl space-y-6 text-white"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl font-extrabold sm:text-5xl text-white drop-shadow-lg"
            variants={fadeUp}
          >
            African Basketball League 2025
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 dark:text-gray-300 drop-shadow"
            variants={fadeUp}
          >
            Suivez la compétition africaine de basketball la plus palpitante !
            Consultez les scores, classements et performances des 20 meilleures équipes du continent.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="/teams"
              className="inline-block px-6 py-3 mt-4 text-white bg-primary rounded-xl hover:bg-primary/80 transition shadow-lg"
            >
              Voir les équipes
            </Link>
          </motion.div>
        </motion.section>

        {/* Derniers Résultats */}
        <motion.section
          className="w-full max-w-5xl text-left bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 mt-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl font-bold mb-4 text-primary"
            variants={fadeUp}
          >
             Derniers Résultats
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recentMatches.map((match) => (
              <motion.div
                key={match.id}
                className="p-4 border rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition"
                variants={fadeUp}
              >
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(match.date).toLocaleDateString()}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center">
                    <Image
                      src={match.teamA.logo}
                      alt={match.teamA.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-sm">{match.teamA.name}</span>
                  </div>
                  <span className="text-lg font-bold">
                    {match.scoreA} - {match.scoreB}
                  </span>
                  <div className="flex flex-col items-center">
                    <Image
                      src={match.teamB.logo}
                      alt={match.teamB.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-sm">{match.teamB.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/*  Top Équipes */}
        <motion.section
          className="w-full max-w-5xl text-left"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl font-bold mb-4 text-primary"
            variants={fadeUp}
          >
           Top 3 Équipes
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {topTeams.map((team) => (
              <motion.div key={team!.id} variants={fadeUp}>
                <Link
                  href={`/teams/${team!.id}`}
                  className="flex flex-col items-center p-4 border rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition"
                >
                  <Image
                    src={team!.logo}
                    alt={team!.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-2"
                  />
                  <h3 className="font-bold text-lg text-center">
                    {team!.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {team!.city}, {team!.country}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 🚀 CTA */}
        <motion.section
          className="mt-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/matches"
            className="inline-block px-6 py-3 text-white bg-secondary rounded-xl hover:bg-secondary/80 transition"
          >
            Voir tous les matchs
          </Link>
        </motion.section>
      </div>
    </main>
  );
}
