"use client";

import { standings } from "@/app/api/standings/data";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function StandingsPage() {
  const [sortKey, setSortKey] = useState<"wins" | "losses" | "points">("points");

  // Sécurise le tri
  const sorted = Array.isArray(standings)
    ? [...standings].sort((a, b) => (b[sortKey] || 0) - (a[sortKey] || 0))
    : [];

  // Sécurise les données du graphique
  const chartData = Array.isArray(standings)
    ? standings.map((team) => ({
        name: team.teamName || "Inconnu",
        score:
          team.wins + team.losses > 0
            ? Math.round((team.points / (team.wins + team.losses)) * 10) / 10
            : 0,
      }))
    : [];

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Classement & Performances des équipes 
      </motion.h1>

      <div className="flex justify-center mb-6">
        <select
          onChange={(e) =>
            setSortKey(e.target.value as "wins" | "losses" | "points")
          }
          value={sortKey}
          className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
        >
          <option value="points">Trier par Points</option>
          <option value="wins">Trier par Victoires</option>
          <option value="losses">Trier par Défaites</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg mb-10">
        <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Équipe</th>
              <th className="px-6 py-3 text-left">Victoires</th>
              <th className="px-6 py-3 text-left">Défaites</th>
              <th className="px-6 py-3 text-left">Points</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((team, index) => (
              <motion.tr
                key={team.teamId || index}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <td className="px-6 py-3 font-semibold text-gray-600 dark:text-gray-300">
                  {index + 1}
                </td>
                <td className="px-6 py-3 font-medium">{team.teamName}</td>
                <td className="px-6 py-3">{team.wins}</td>
                <td className="px-6 py-3">{team.losses}</td>
                <td className="px-6 py-3 font-bold text-blue-600 dark:text-blue-400">
                  {team.points}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {chartData.length > 0 && (
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Performances moyennes par équipe 
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis dataKey="name" tick={{ fill: "#555" }} />
              <YAxis tick={{ fill: "#555" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
              <Legend />
              <Bar dataKey="score" fill="#f97316" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      )}

      <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
         Classement mis à jour selon les performances récentes des équipes.
      </p>
    </div>
  );
}
