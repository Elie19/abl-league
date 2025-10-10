// app/utils/icsGenerator.ts
import { Match } from "types";

export function generateICS(matches: Match[]): string {
  const header = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ABL League//EN
CALSCALE:GREGORIAN
`;

  const events = matches.map(match => {
    const start = new Date(match.date).toISOString().replace(/[-:]|\.\d{3}/g, '');
    const endDate = new Date(new Date(match.date).getTime() + 2 * 60 * 60 * 1000); // 2h de match
    const end = endDate.toISOString().replace(/[-:]|\.\d{3}/g, '');
    return `BEGIN:VEVENT
UID:${match.id}@abl-league
DTSTAMP:${start}
DTSTART:${start}
DTEND:${end}
SUMMARY:${match.teamA.name} vs ${match.teamB.name}
LOCATION:${match.stadium}
END:VEVENT`;
  }).join("\n");

  const footer = `END:VCALENDAR`;

  return `${header}${events}\n${footer}`;
}
