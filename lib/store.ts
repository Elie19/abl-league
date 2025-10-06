import { create } from "zustand";
import { Team, Player, Match, Standing } from "@/types";

interface StoreState {
  teams: Team[];
  players: Player[];
  matches: Match[];
  standings: Standing[];
  setTeams: (t: Team[]) => void;
  setPlayers: (p: Player[]) => void;
  setMatches: (m: Match[]) => void;
  setStandings: (s: Standing[]) => void;
}

export const useABLStore = create<StoreState>((set) => ({
  teams: [],
  players: [],
  matches: [],
  standings: [],
  setTeams: (t) => set({ teams: t }),
  setPlayers: (p) => set({ players: p }),
  setMatches: (m) => set({ matches: m }),
  setStandings: (s) => set({ standings: s }),
}));
