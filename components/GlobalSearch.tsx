"use client";
import { useState } from "react";
import { Team, Player, Match } from "@/lib/types";

type SearchItem = Team | Player | Match;

export default function GlobalSearch({ data }: { data: SearchItem[] }) {
  const [query, setQuery] = useState("");

  const results = data.filter((item) =>
    "name" in item
      ? item.name.toLowerCase().includes(query.toLowerCase())
      : false
  );

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Rechercher une équipe, un joueur..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
      />
      {query && (
        <ul className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border rounded-md shadow-lg mt-1 max-h-64 overflow-y-auto z-10">
          {results.map((r) => (
            <li
              key={("id" in r && r.id) || Math.random()}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
            >
              {"name" in r ? r.name : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
