// lib/types.ts
export interface Player {
  id: number;
  name: string;
  position: string;
  teamId: number;
  photo?: string;
  nationality?: string;
  number?: number;
}

export interface Team {
  id: string;
  name: string;
  logo?: string;
  country?: string;
  title?: number; // Ajout du champ title
  city?: string;
  coach?: string;
  founded?: number;
  record?: { wins: number; losses: number }; // Ajout pour éviter l'erreur dans [id]
  players?: Player[];
}

export interface Match {
  id: string;
  date: string;
  teamA: Team;
  teamB: Team;
  scoreA?: number;
  scoreB?: number;
  stadium?: string;
}

export interface Standing {
  teamId: number;
  teamName: string;
  wins: number;
  losses: number;
  points: number;
}
