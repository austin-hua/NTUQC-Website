import { cn } from "./ui/utils.ts";

import { useLang } from "~/hooks/useLang.ts";
import { STAFF } from "~/data/staff.ts";
import { CLUB_EVENTS_BY_YEAR, EVENT_STATUS_LABELS, type ClubEvent } from "~/data/clubEvents.ts";

type Props = {
  year: string;
};

export default ({ year }: Props) => {
  const lang = useLang();
  const events = CLUB_EVENTS_BY_YEAR[year] ?? [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between gap-4">
        <h2 className="font-medium text-xl">
          <span className="i18n-en">Club Events</span>
          <span className="i18n-zh">社團活動</span>
        </h2>

        <label className="flex items-center gap-2 text-xs text-neutral-10">
          <span className="i18n-en">Year</span>
          <span className="i18n-zh">學年度</span>
          <select
            value={year}
            onChange={(event) => {
              window.location.href = `/events/${event.target.value}/`;
            }}
            className={cn(
              "bg-neutral-2 hover:bg-neutral-3 border border-neutral-4 hover:border-neutral-6 rounded-xl",
              "px-3 h-8 text-sm text-neutral-11 outline-none",
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

      {events.length === 0 ? (
        <p className="text-neutral-10 text-sm">
          <span className="i18n-en">No events recorded yet for this academic year.</span>
          <span className="i18n-zh">本學年度尚無活動紀錄。</span>
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {events.map((event, index) => (
            <li key={index}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const EventCard = ({ event }: { event: ClubEvent }) => {
  const statusLabel = event.status ? EVENT_STATUS_LABELS[event.status] : undefined;

  return (
    <div className="flex flex-col gap-2 px-4 py-4 bg-neutral-2 border border-neutral-4 rounded-3xl">
      <div className="flex flex-row items-start justify-between gap-3">
        <div className="flex flex-col">
          <h3 className="text-neutral-12 text-sm font-medium">
            <span className="i18n-en">{event.title.en}</span>
            <span className="i18n-zh">{event.title.zh}</span>
          </h3>
          <span className="text-neutral-10 text-xs">{event.date}</span>
        </div>

        {statusLabel && (
          <span className="shrink-0 px-2 h-6 inline-flex items-center bg-neutral-3 border border-neutral-5 text-neutral-10 text-[11px] font-medium rounded-full">
            <span className="i18n-en">{statusLabel.en}</span>
            <span className="i18n-zh">{statusLabel.zh}</span>
          </span>
        )}
      </div>

      {event.description && (
        <p className="text-neutral-10 text-xs">
          <span className="i18n-en">{event.description.en}</span>
          <span className="i18n-zh">{event.description.zh}</span>
        </p>
      )}
    </div>
  );
};
