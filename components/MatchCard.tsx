"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Match {
  id: string;
  date: string;
  location: string;
  homeTeamId: string;
  awayTeamId: string;
  score?: { home: number; away: number };
}

export default function MatchCard({ match }: { match: Match }) {
  const isPast = new Date(match.date).getTime() < Date.now();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="p-4 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
    >
      <Link href={`/matches/${match.id}`} className="block">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">
              {match.homeTeamId} {isPast && match.score ? `${match.score.home} - ${match.score.away}` : "vs"} {match.awayTeamId}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(match.date).toLocaleString()} • {match.location}
            </p>
          </div>

          <div className="text-xs text-gray-400">
            {isPast ? <span className="text-green-400">Finished</span> : <span className="text-blue-400">Upcoming</span>}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
