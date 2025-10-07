import { Standing } from "@/lib/types";

export default function StandingsTable({ standings }: { standings: Standing[] }) {
  return (
    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
      <thead className="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th className="p-2 text-left">Équipe</th>
          <th className="p-2 text-center">Victoires</th>
          <th className="p-2 text-center">Défaites</th>
          <th className="p-2 text-center">Points</th>
        </tr>
      </thead>
      <tbody>
        {standings.map((s) => (
          <tr key={s.teamId} className="border-t border-gray-300 dark:border-gray-700">
            <td className="p-2">{s.teamName}</td>
            <td className="p-2 text-center">{s.wins}</td>
            <td className="p-2 text-center">{s.losses}</td>
            <td className="p-2 text-center">{s.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
