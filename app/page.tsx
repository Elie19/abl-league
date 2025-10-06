import Image from "next/image";
import Link from "next/link";
import teams from "@/data/teams.json";
import matches from "@/data/matches.json";

export default function Home() {
  const recentMatches = matches.slice(0, 2);
  const topTeams = teams.slice(0, 3);

  return (
    <div className="space-y-12 py-6">
      {/* Bannière */}
      <section className="relative bg-gradient-to-r from-primary to-orange-600 text-white rounded-2xl p-10 shadow-lg overflow-hidden">
        <h1 className="text-4xl font-display mb-4">African Basketball League</h1>
        <p className="text-lg opacity-90">Where African Passion Meets Basketball 🏀</p>
      </section>

      {/* Derniers résultats */}
      <section>
        <h2 className="text-2xl font-display mb-4">Latest Results</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {recentMatches.map((m) => (
            <div
              key={m.id}
              className="p-4 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800"
            >
              <p className="text-lg font-semibold">
                {m.homeTeamId} {m.score.home} - {m.score.away} {m.awayTeamId}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(m.date).toLocaleDateString()} — {m.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Top 3 équipes */}
      <section>
        <h2 className="text-2xl font-display mb-4">Top 3 Teams</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topTeams.map((t) => (
            <Link
              key={t.id}
              href={`/teams/${t.id}`}
              className="p-4 border dark:border-gray-700 rounded-lg hover:shadow-md transition"
            >
              <Image
                src={t.logo}
                alt={t.name}
                width={80}
                height={80}
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold text-center mt-2">{t.name}</h3>
              <p className="text-center text-sm text-gray-500">{t.city}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
