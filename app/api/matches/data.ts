// app/api/matches/data.ts
import { Match } from "@/lib/types";

export const matches: Match[] = [
  {
    id: 1,
    date: "2025-10-10T18:00:00Z",
    teamA: { id: 1, name: "Dakar Lions", logo: "/logos/dakar-lions.png", country: "Sénégal" },
    teamB: { id: 2, name: "Abidjan Warriors", logo: "/logos/abidjan-warriors.png", country: "Côte d’Ivoire" },
    scoreA: 87,
    scoreB: 80,
    stadium: "Stade Léopold Sédar Senghor",
  },
  {
    id: 2,
    date: "2025-10-14T19:30:00Z",
    teamA: { id: 3, name: "Lagos Panthers", logo: "/logos/lagos-panthers.png", country: "Nigeria" },
    teamB: { id: 4, name: "Kinshasa Eagles", logo: "/logos/kinshasa-eagles.png", country: "RDC" },
    scoreA: 95,
    scoreB: 101,
    stadium: "National Arena Kinshasa",
  },
  {
    id: 3,
    date: "2025-10-20T17:00:00Z",
    teamA: { id: 2, name: "Abidjan Warriors", logo: "/logos/abidjan-warriors.png", country: "Côte d’Ivoire" },
    teamB: { id: 5, name: "Cairo Falcons", logo: "/logos/cairo-falcons.png", country: "Égypte" },
    stadium: "Cairo Indoor Stadium",
  },
  {
    id: 4,
    date: "2025-10-25T20:00:00Z",
    teamA: { id: 1, name: "Dakar Lions", logo: "/logos/dakar-lions.png", country: "Sénégal" },
    teamB: { id: 4, name: "Kinshasa Eagles", logo: "/logos/kinshasa-eagles.png", country: "RDC" },
    stadium: "Stade Demba Diop",
  },
];
