// app/teams/[id]/page.tsx
import { teams } from "@/app/api/teams/data";
import Image from "next/image";

interface TeamPageProps {
  params: { id: string };
}

export default function TeamDetail({ params }: TeamPageProps) {
  const team = teams.find((t) => t.id === Number(params.id));

  if (!team) {
    return (
      <div className="text-center py-20 text-gray-500">
        Équipe introuvable.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src={team.logo}
          alt={team.name}
          width={120}
          height={120}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{team.name}</h1>
          <p className="text-gray-400">
            {team.country} — Fondée en {team.founded}
          </p>
          <p className="mt-2 text-gray-400">Coach : {team.coach}</p>
          <p className="mt-2 font-medium text-green-600">
            Bilan : {team.record?.wins}V / {team.record?.losses}D
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Joueurs</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {team.players?.map((player) => (
          <div
            key={player.id}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow text-center"
          >
            <p className="font-medium">{player.name}</p>
            <p className="text-sm text-gray-500">{player.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
