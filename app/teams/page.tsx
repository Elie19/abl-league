import Link from "next/link";
import Image from "next/image";
import teams from "@/data/teams.json";

export const metadata = {
  title: "Équipes",
  description: "Découvrez toutes les équipes participantes à la African Basketball League.",
};

export default function TeamsPage() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold mb-6">Toutes les équipes</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Link
            key={team.id}
            href={`/teams/${team.id}`}
            className="block border rounded-xl p-4 hover:shadow-md transition"
          >
            <Image
              src={team.logo}
              alt={team.name}
              width={150}
              height={150}
              className="mx-auto"
            />
            <h2 className="text-xl font-semibold text-center mt-2">{team.name}</h2>
            <p className="text-center text-gray-500">{team.city}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
