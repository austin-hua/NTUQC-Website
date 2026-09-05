import { Avatar, Button } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide } from "./icons";

import { useLang } from "~/hooks/useLang.ts";
import { STAFF, PEOPLE, ROLE_NAMES, ROLE_DESCRIPTIONS, CURRENT_YEAR, type StaffPosition, type VacantPosition } from "~/data/staff.ts";

const APPLY_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSflTuozgkncE9890t-uhRoetRpwXMJrCCHxCDq4z4CHpsGInA/viewform";

type Props = {
  year: string;
};

export default ({ year }: Props) => {
  const lang = useLang();
  const staffYear = STAFF.find((y) => y.year === year) ?? STAFF[0];

  const executives = staffYear.positions.filter((position) => position.section === "executive");
  const advisors = staffYear.positions.filter((position) => position.section === "advisor");

  return (
    <div className="flex flex-col gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-col items-start gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between self-stretch gap-3 sm:gap-4">
          <h1 className="font-medium text-2xl lg:text-3xl">
            <span className="i18n-en">Staff Team</span>
            <span className="i18n-zh">幹部團隊</span>
          </h1>

          <label className="flex items-center gap-2 text-xs text-neutral-10 min-w-0">
            <span className="i18n-en shrink-0">Year</span>
            <span className="i18n-zh shrink-0">學年度</span>
            <select
              value={staffYear.year}
              onChange={(event) => {
                window.location.href = `/team/${event.target.value}/`;
              }}
              className={cn(
                "bg-neutral-2 hover:bg-neutral-3 border border-neutral-4 hover:border-neutral-6 rounded-xl",
                "px-3 h-8 min-w-0 max-w-full text-sm text-neutral-11 outline-none",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              {STAFF.map((y) => (
                <option key={y.year} value={y.year}>
                  {y.label[lang]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="text-sm text-neutral-10">
          <span className="i18n-en">{staffYear.label.en}</span>
          <span className="i18n-zh">{staffYear.label.zh}</span>
        </p>

        {year === CURRENT_YEAR && (
          <Button as="a" href={APPLY_FORM_URL} target="_blank" rel="noreferrer" className="px-5 h-11 text-base">
            <span className="i18n-en">Apply to Join Our Staff Team</span>
            <span className="i18n-zh">申請加入幹部團隊</span>
          </Button>
        )}
      </div>

      {staffYear.inactive ? (
        <p className="text-neutral-10 text-sm">
          <span className="i18n-en">The club had no formally registered staff this academic year.</span>
          <span className="i18n-zh">本學年度社團未正式立案，因此沒有幹部紀錄。</span>
        </p>
      ) : (
        <>
          <StaffSection titleEn="Executive Team" titleZh="執行團隊" positions={executives} />

          {advisors.length > 0 && <StaffSection titleEn="Advisors" titleZh="顧問群" positions={advisors} />}
        </>
      )}
    </div>
  );
};

const StaffSection = ({
  titleEn,
  titleZh,
  positions,
}: {
  titleEn: string;
  titleZh: string;
  positions: (StaffPosition | VacantPosition)[];
}) => (
  <div className="flex flex-col gap-3">
    <h2 className="font-medium text-xl">
      <span className="i18n-en">{titleEn}</span>
      <span className="i18n-zh">{titleZh}</span>
    </h2>
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
  const roleName = ROLE_NAMES[position.role];
  const jd = ROLE_DESCRIPTIONS[position.role];

  if ("vacant" in position) {
    return (
      <div
        className={cn(
          "flex flex-col gap-2 h-full px-4 py-4",
          "bg-neutral-2/50 border border-dashed border-neutral-5 rounded-3xl"
        )}
      >
        <h3 className="text-neutral-12 text-sm font-medium">
          <span className="i18n-en">{roleName.en}</span>
          <span className="i18n-zh">{roleName.zh}</span>
        </h3>
        {jd && (
          <p className="text-neutral-10 text-xs">
            <span className="i18n-en">{jd.en}</span>
            <span className="i18n-zh">{jd.zh}</span>
          </p>
        )}
        <a
          href="https://discord.gg/rXgwHxQNaq"
          target="_blank"
          className="mt-auto text-primary-10 hover:text-primary-11 text-xs font-medium underline underline-offset-2 w-fit"
        >
          <span className="i18n-en">Position open — join our Discord to apply</span>
          <span className="i18n-zh">職缺開放中 — 歡迎透過 Discord 應徵</span>
        </a>
      </div>
    );
  }

  const person = PEOPLE[position.personId];
  const intro = position.intro ?? person.intro;

  const content = (
    <>
      <div className="flex flex-row items-center gap-3">
        <Avatar src={person.image} alt={person.name}>
          <Lucide.IconUser className="size-1/2" />
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-neutral-12 text-sm font-medium">{person.name}</h3>
          <span className="text-neutral-10 text-xs">
            <span className="i18n-en">{roleName.en}</span>
            <span className="i18n-zh">{roleName.zh}</span>
          </span>
          {position.note && (
            <span className="text-primary-10 text-[11px] font-medium">
              <span className="i18n-en">{position.note.en}</span>
              <span className="i18n-zh">{position.note.zh}</span>
            </span>
          )}
        </div>
      </div>

      {jd && (
        <p className="text-neutral-10 text-xs">
          <span className="i18n-en">{jd.en}</span>
          <span className="i18n-zh">{jd.zh}</span>
        </p>
      )}
      {intro && (
        <p className="text-neutral-11 text-xs italic">
          <span className="i18n-en">&ldquo;{intro.en}&rdquo;</span>
          <span className="i18n-zh">&ldquo;{intro.zh}&rdquo;</span>
        </p>
      )}
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
