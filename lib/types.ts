// lib/types.ts
export interface Player {
  id: number;
  name: string;
  position: string;
  teamId: number;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
  country: string;
  record?: { wins: number; losses: number }; // Ajout pour éviter l'erreur dans [id]
  players?: Player[];
}

export interface Match {
  id: number;
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
