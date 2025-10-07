"use client";
import { useEffect, useState } from "react";

export default function LivePage() {
  const [score, setScore] = useState({ home: 0, away: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((s) => ({
        home: s.home + Math.floor(Math.random() * 3),
        away: s.away + Math.floor(Math.random() * 3),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-6">Mode Spectateur Live</h1>
      <div className="text-2xl font-mono">
        <span className="text-orange-500">Dakar Lions</span>{" "}
        <span className="font-bold">{score.home}</span> -{" "}
        <span className="font-bold">{score.away}</span>{" "}
        <span className="text-blue-500">Lagos Titans</span>
      </div>
      <p className="mt-4 text-gray-500">Score mis à jour automatiquement 🕒</p>
    </div>
  );
}
