"use client";

import Image from "next/image";
import Link from "next/link";
import { teams } from "@/app/api/teams/data";

export default function HomeClient() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* En-tête */}
      <section className="text-center py-16 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
        <h1 className="text-5xl font-extrabold mb-4">
          African Basketball League 
        </h1>
        <p className="text-lg">
          Suivez les résultats, classements et statistiques des meilleures équipes africaines.
        </p>
      </section>

      {/* Liste des équipes */}
      <section className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-8">
        {teams.slice(0, 8).map((team) => (
          <Link
            key={team.id}
            href={`/teams/${team.id}`}
            className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition-transform flex flex-col items-center"
          >
            <Image
              src={team.logo}
              alt={team.name}
              width={96}
              height={96}
              className="object-contain mb-2"
            />
            <h2 className="text-lg font-semibold text-gray-800">{team.name}</h2>
            <p className="text-sm text-gray-500">{team.city}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
