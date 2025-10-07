import { Match } from "@/lib/types";

export function generateICS(matches: Match[]): string {
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ABL League//Calendar//EN",
  ];

  matches.forEach((match) => {
    lines.push("BEGIN:VEVENT");
    lines.push(`DTSTART:${match.date}`);
    lines.push(`SUMMARY:${match.teamA.name} vs ${match.teamB.name}`);
    lines.push(`LOCATION:${match.stadium || "Stade inconnu"}`);
    lines.push("END:VEVENT");
  });

  lines.push("END:VCALENDAR");
  return lines.join("\n");
}
