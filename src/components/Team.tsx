import { Avatar } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide } from "./icons";

import { STAFF, PEOPLE, ROLE_DESCRIPTIONS, type StaffPosition, type VacantPosition } from "~/data/staff.ts";

type Props = {
  year: string;
};

export default ({ year }: Props) => {
  const staffYear = STAFF.find((y) => y.year === year) ?? STAFF[0];

  const executives = staffYear.positions.filter((position) => position.section === "executive");
  const advisors = staffYear.positions.filter((position) => position.section === "advisor");

  return (
    <div className="flex flex-col gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-col items-start gap-3">
        <div className="flex flex-row items-center justify-between self-stretch gap-4">
          <h1 className="font-medium text-2xl lg:text-3xl">Staff Team</h1>

          <label className="flex items-center gap-2 text-xs text-neutral-10">
            Year
            <select
              value={staffYear.year}
              onChange={(event) => {
                window.location.href = `/team/${event.target.value}/`;
              }}
              className={cn(
                "bg-neutral-2 hover:bg-neutral-3 border border-neutral-4 hover:border-neutral-6 rounded-xl",
                "px-3 h-8 text-sm text-neutral-11 outline-none",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              {STAFF.map((y) => (
                <option key={y.year} value={y.year}>
                  {y.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="text-sm text-neutral-10">{staffYear.label}</p>
      </div>

      <StaffSection title="Executive Team" positions={executives} />

      {advisors.length > 0 && <StaffSection title="Advisors" positions={advisors} />}
    </div>
  );
};

const StaffSection = ({ title, positions }: { title: string; positions: (StaffPosition | VacantPosition)[] }) => (
  <div className="flex flex-col gap-3">
    <h2 className="font-medium text-xl">{title}</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {positions.map((position) => (
        <li key={"personId" in position ? `${position.role}-${position.personId}` : `${position.role}-vacant`}>
          <StaffCard position={position} />
        </li>
      ))}
    </ul>
  </div>
);

const StaffCard = ({ position }: { position: StaffPosition | VacantPosition }) => {
  const jd = ROLE_DESCRIPTIONS[position.role];

  if ("vacant" in position) {
    return (
      <div
        className={cn(
          "flex flex-col gap-2 h-full px-4 py-4",
          "bg-neutral-2/50 border border-dashed border-neutral-5 rounded-3xl"
        )}
      >
        <h3 className="text-neutral-12 text-sm font-medium">{position.role}</h3>
        {jd && <p className="text-neutral-10 text-xs">{jd}</p>}
        <a
          href="https://discord.gg/rXgwHxQNaq"
          target="_blank"
          className="mt-auto text-primary-10 hover:text-primary-11 text-xs font-medium underline underline-offset-2 w-fit"
        >
          Position open — join our Discord to apply
        </a>
      </div>
    );
  }

  const person = PEOPLE[position.personId];

  const content = (
    <>
      <div className="flex flex-row items-center gap-3">
        <Avatar src={person.image} alt={person.name}>
          <Lucide.IconUser className="size-1/2" />
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-neutral-12 text-sm font-medium">{person.name}</h3>
          <span className="text-neutral-10 text-xs">{position.role}</span>
          {position.note && <span className="text-primary-10 text-[11px] font-medium">{position.note}</span>}
        </div>
      </div>

      {jd && <p className="text-neutral-10 text-xs">{jd}</p>}
      {person.intro && <p className="text-neutral-11 text-xs italic">&ldquo;{person.intro}&rdquo;</p>}
    </>
  );

  const cardClasses = "group relative flex flex-col gap-3 h-full px-4 py-4 bg-neutral-2 border border-neutral-4 rounded-3xl";

  if (person.link) {
    return (
      <a
        href={person.link}
        target="_blank"
        rel="noreferrer"
        aria-label={person.name}
        className={cn(
          cardClasses,
          "outline-none transition hover:bg-neutral-3 hover:border-neutral-6",
          "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
        )}
      >
        {content}
        <Lucide.IconExternalLink
          aria-hidden
          size={16}
          className="absolute top-4 right-4 text-neutral-10 transition group-hover:text-primary-11"
        />
      </a>
    );
  }

  return <div className={cardClasses}>{content}</div>;
};
