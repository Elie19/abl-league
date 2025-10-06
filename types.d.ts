// types de données pour une application de gestion d'équipe sportive

export interface Player {
  id: string;
  name: string;
  number: number;
  position: "Guard" | "Forward" | "Center";
  age: number;
  nationality: string;
  teamId: string;
  stats: {
    pointsPerGame: number;
    reboundsPerGame: number;
    assistsPerGame: number;
  };
}

export interface Team {
  id: string;
  name: string;
  city: string;
  logo: string;
  coach: string;
  founded: number;
  players: Player[];
  record: {
    wins: number;
    losses: number;
  };
}

export interface Match {
  id: string;
  date: string;
  location: string;
  homeTeamId: string;
  awayTeamId: string;
  score: {
    home: number;
    away: number;
  };
}

export interface Standing {
  teamId: string;
  rank: number;
  wins: number;
  losses: number;
  pointsFor: number;
  pointsAgainst: number;
}
