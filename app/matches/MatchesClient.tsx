"use client"; 

import { Match } from "@/lib/types";

interface MatchesClientProps {
  matches: Match[];
}

export default function MatchesClient({ matches }: MatchesClientProps) {
  const validMatches: Match[] = matches.filter(
    (m): m is Match =>
      m.date !== undefined &&
      m.teamA?.id !== undefined &&
      m.teamB?.id !== undefined
  );

  return (
    <div className="matches-container">
      {validMatches.length === 0 ? (
        <p>Aucun match à afficher.</p>
      ) : (
        <ul>
          {validMatches.map((match) => (
            <li key={match.id} className="match-card">
              <div className="teams">
                <span className="team-name">{match.teamA.name}</span>
                <span className="vs">vs</span>
                <span className="team-name">{match.teamB.name}</span>
              </div>
              <div className="match-info">
                <span className="date">{new Date(match.date).toLocaleString()}</span>
                <span className="stadium">{match.stadium}</span>
                {match.scoreA !== undefined && match.scoreB !== undefined && (
                  <span className="score">
                    {match.scoreA} - {match.scoreB}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .matches-container {
          padding: 1rem;
        }
        .match-card {
          border: 1px solid #ddd;
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          margin-bottom: 0.75rem;
        }
        .teams {
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
        .vs {
          margin: 0 0.5rem;
        }
        .match-info {
          font-size: 0.875rem;
          color: #555;
        }
        .score {
          margin-left: 1rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
