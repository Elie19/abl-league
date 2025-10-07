// app/api/teams/data.ts
import { Team } from "@/lib/types";

export const teams: Team[] = [
  {
    id: 1,
    name: "Dakar Lions",
    logo: "/logos/dakar-lions.png",
    country: "Sénégal",
    coach: "Mamadou Diop",
    founded: 2010,
    record: { wins: 12, losses: 4 },
    players: [
      { id: 1, name: "Ousmane Ndiaye", position: "PG", teamId: 1 },
      { id: 2, name: "Cheikh Faye", position: "SG", teamId: 1 },
      { id: 3, name: "Mouhamed Thiam", position: "SF", teamId: 1 },
      { id: 4, name: "Lamine Sow", position: "PF", teamId: 1 },
      { id: 5, name: "Ibrahima Ndiaye", position: "C", teamId: 1 },
    ],
  },
  {
    id: 2,
    name: "Abidjan Warriors",
    logo: "/logos/abidjan-warriors.png",
    country: "Côte d’Ivoire",
    coach: "Franck Kouamé",
    founded: 2012,
    record: { wins: 10, losses: 6 },
    players: [
      { id: 6, name: "Jean Kouadio", position: "PG", teamId: 2 },
      { id: 7, name: "Yao Kouassi", position: "SG", teamId: 2 },
      { id: 8, name: "Serge Traoré", position: "SF", teamId: 2 },
      { id: 9, name: "Guy Koffi", position: "PF", teamId: 2 },
      { id: 10, name: "Patrick Kouamé", position: "C", teamId: 2 },
    ],
  },
  {
    id: 3,
    name: "Lagos Panthers",
    logo: "/logos/lagos-panthers.png",
    country: "Nigeria",
    coach: "Olu Adebayo",
    founded: 2015,
    record: { wins: 8, losses: 8 },
    players: [
      { id: 11, name: "Tunde Okoro", position: "PG", teamId: 3 },
      { id: 12, name: "Femi Ojo", position: "SG", teamId: 3 },
      { id: 13, name: "Chuka Obi", position: "SF", teamId: 3 },
      { id: 14, name: "Amadi Uche", position: "PF", teamId: 3 },
      { id: 15, name: "Bayo Akin", position: "C", teamId: 3 },
    ],
  },
];
