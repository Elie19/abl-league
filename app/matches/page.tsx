// app/matches/page.tsx
import MatchesClient from "./MatchesClient";

export const metadata = {
  title: "Matchs | ABL League",
  description:
    "Consultez les résultats récents, les matchs à venir et ajoutez-les à votre calendrier.",
};

export default function MatchesPage() {
  return <MatchesClient />;
}
