import Image from "next/image";
import Link from "next/link";
import teams from "@/data/teams.json";
import matches from "@/data/matches.json";
import ScoreChart from "@/components/ScoreChart";

export const metadata = {
  title: "Accueil",
  description:
    "Bienvenue sur la plateforme officielle de la African Basketball League. Consultez les résultats, classements et statistiques des meilleures équipes africaines.",
};

export default function HomePage() {
  const latestMatches = matches.slice(0, 3);
  const topTeams = teams.slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">
          African Basketball League 🏀
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Suivez les résultats, classements et statistiques des meilleures
          équipes africaines.
        </p>
      </section>

      {/* Chart des scores moyens */}
      <ScoreChart />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Top 3 équipes</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {topTeams.map((team) => (
            <Link
              key={team.id}
              href={`/teams/${team.id}`}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <Image
                src={team.logo}
                alt={team.name}
                width={150}
                height={150}
                priority
                className="mx-auto"
              />
              <h3 className="text-center mt-2 font-semibold">{team.name}</h3>
              <p className="text-center text-sm text-gray-500">{team.city}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Derniers résultats</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {latestMatches.map((match) => (
            <div
              key={match.id}
              className="p-4 border rounded-lg dark:border-gray-700"
            >
              <p className="font-medium text-center">
                {match.homeTeamId}{" "}
                <span className="text-orange-500">vs</span>{" "}
                {match.awayTeamId}
              </p>
              {match.score && (
                <p className="text-center text-gray-400 mt-1">
                  {match.score.home} - {match.score.away}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
