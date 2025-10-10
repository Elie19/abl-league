import Link from "next/link";
import { teams } from "@/app/api/teams/data";

export default function TeamsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map((team) => (
          <Link
            key={team.id}
            href={`/teams/${team.id}`}
            className="block bg-blue-950 text-white rounded-lg p-6 hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-semibold">{team.name}</h2>
            <p>{team.city}</p>
            <p className="text-sm text-gray-300">
              Coach: {team.coach} | Fondée: {team.founded}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
