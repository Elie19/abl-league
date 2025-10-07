"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import teams from "@/data/teams.json";
import matches from "@/data/matches.json";

export default function ScoreChart() {
  // Calcul du score moyen par équipe
  const stats = teams.map((t) => {
    const teamMatches = matches.filter(
      (m) => m.homeTeamId === t.id || m.awayTeamId === t.id
    );
    const totalPoints = teamMatches.reduce((sum, m) => {
      if (!m.score) return sum;
      const points =
        m.homeTeamId === t.id ? m.score.home : m.score.away;
      return sum + points;
    }, 0);
    const avg = teamMatches.length ? totalPoints / teamMatches.length : 0;
    return { name: t.name, avg: avg.toFixed(1) };
  });

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">Score moyen par équipe</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={stats}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="avg" fill="#FF6B00" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
