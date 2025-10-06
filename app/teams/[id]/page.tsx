import Link from "next/link";
import teams from "@/data/teams.json";

export default function TeamsPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-display mb-6">Teams</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teams.map((t) => (
          <Link
            key={t.id}
            href={`/teams/${t.id}`}
            className="p-4 border dark:border-gray-700 rounded-lg hover:shadow-md bg-gray-50 dark:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold text-primary">{t.name}</h2>
            <p className="text-gray-500">{t.city}</p>
            <p className="text-sm text-gray-400 mt-2">
              Coach: {t.coach} | Founded: {t.founded}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
