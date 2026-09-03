import { Avatar } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide } from "./icons";

import { STAFF, ROLE_DESCRIPTIONS, type StaffMember } from "~/data/staff.ts";

type Props = {
  year: string;
};

export default ({ year }: Props) => {
  const staffYear = STAFF.find((y) => y.year === year) ?? STAFF[0];

  const executives = staffYear.members.filter((member) => member.section === "executive");
  const advisors = staffYear.members.filter((member) => member.section === "advisor");

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

      <StaffSection title="Executive Team" members={executives} />

      {advisors.length > 0 && <StaffSection title="Advisors" members={advisors} />}
    </div>
  );
};

const StaffSection = ({ title, members }: { title: string; members: StaffMember[] }) => (
  <div className="flex flex-col gap-3">
    <h2 className="font-medium text-xl">{title}</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {members.map((member) => (
        <li key={`${member.role}-${member.name}`}>
          <StaffCard member={member} />
        </li>
      ))}
    </ul>
  </div>
);

const StaffCard = ({ member }: { member: StaffMember }) => {
  const jd = ROLE_DESCRIPTIONS[member.role];

  if (member.vacant) {
    return (
      <div
        className={cn(
          "flex flex-col gap-2 h-full px-4 py-4",
          "bg-neutral-2/50 border border-dashed border-neutral-5 rounded-3xl"
        )}
      >
        <h3 className="text-neutral-12 text-sm font-medium">{member.role}</h3>
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

  return (
    <div className={cn("flex flex-col gap-3 h-full px-4 py-4", "bg-neutral-2 border border-neutral-4 rounded-3xl")}>
      <div className="flex flex-row items-center gap-3">
        <Avatar src={member.image} alt={member.name}>
          <Lucide.IconUser className="size-1/2" />
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-neutral-12 text-sm font-medium">{member.name}</h3>
          <span className="text-neutral-10 text-xs">{member.role}</span>
        </div>
      </div>

      {jd && <p className="text-neutral-10 text-xs">{jd}</p>}
      {member.intro && <p className="text-neutral-11 text-xs italic">&ldquo;{member.intro}&rdquo;</p>}
    </div>
  );
};
