type Props = {
  teamA: { name: string; logo: string };
  teamB: { name: string; logo: string };
  teamAGoals: number;
  teamBGoals: number;
  slug: string;
  time: string;
  stadium: string;
};

function formatDate(slugDate: string): string {
  const [day, month, year] = slugDate.split("-").map(Number);
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return `${day} de ${meses[month - 1]} de ${year}`;
}

export default function LiveScore({
  teamA,
  teamB,
  teamAGoals,
  teamBGoals,
  slug,
  time,
  stadium,
}: Props) {
  const [championship, date] = (() => {
    const parts = slug.split("-");
    const champ = parts.slice(0, 4).join(" ").toUpperCase();
    const gameDate = formatDate(parts.slice(4, 7).join("-"));
    const teamNames = parts[7]?.replace("x", " x ").toUpperCase();
    return [champ, gameDate, teamNames];
  })();

  return (
    <div className="mb-6 text-center">
      <div className="flex items-center justify-center gap-6 mb-2 text-xl font-bold">
        <div className="flex flex-col items-center">
          <img src={teamA.logo} alt={teamA.name} className="w-10 h-10" />
          <span>{teamA.name}</span>
        </div>
        <span className="text-2xl font-extrabold text-preto dark:text-branco">
          {teamAGoals} × {teamBGoals}
        </span>
        <div className="flex flex-col items-center">
          <img src={teamB.logo} alt={teamB.name} className="w-10 h-10" />
          <span>{teamB.name}</span>
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-300">
        {championship} – {date} – {time} – {stadium}
      </div>
    </div>
  );
}
