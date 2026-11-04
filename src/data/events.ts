import type { LocalizedText } from "./staff.ts";

export type EventItem = {
  title: string;
  description: LocalizedText;
  href: string;
  image?: string;
};

// External conferences and competitions NTUQC co-organizes or participates in.
export const PARTNER_EVENTS: EventItem[] = [
  {
    title: "Summit on Quantum AI (SQAI)",
    description: {
      en: "An international academic conference on quantum AI, co-organized by NTUQC.",
      zh: "由 NTUQC 共同主辦的量子人工智慧國際學術會議。",
    },
    href: "https://sqai.org",
    image: "/events/sqai.png",
  },
  {
    title: "Qiskit Hackathon Taiwan",
    description: {
      en: "A hands-on quantum computing hackathon hosted at NTU.",
      zh: "在台大舉辦的實作型量子計算黑客松。",
    },
    href: "https://quantum.ntu.edu.tw/?p=10004",
    image: "/events/qiskit-hackathon.jpg",
  },
];

// The kinds of events NTUQC runs, shown on the Events page in place of a
// hand-maintained list. Specific dates live in the Google Sheets calendar.
export type EventType = {
  title: LocalizedText;
  description: LocalizedText;
  examples: LocalizedText;
};

export const EVENT_TYPES: EventType[] = [
  {
    title: { en: "Classes & Talks", zh: "社課與講座" },
    description: {
      en: "Regular sessions led by our STEM department and invited guest speakers, ranging from beginner-friendly introductions to research-level topics.",
      zh: "由技術部與受邀講者帶領的定期社課，內容從入門介紹到研究等級的主題皆有。",
    },
    examples: {
      en: "Introduction to Quantum, a special talk on Quantum AI, guest speaker classes",
      zh: "量子計算簡介、量子人工智慧專題演講、外部講者社課",
    },
  },
  {
    title: { en: "Conferences & Hackathons", zh: "研討會與黑客松" },
    description: {
      en: "Academic conferences and hands-on competitions we co-organize, join as a team, or attend together.",
      zh: "我們共同主辦、組隊參加或一同出席的學術研討會與實作競賽。",
    },
    examples: {
      en: "Summit on Quantum AI (SQAI), Qiskit Hackathon Taiwan, Qiskit Fall Fest, IBM Quantum events",
      zh: "量子人工智慧研討會（SQAI）、Qiskit 黑客松台灣、Qiskit 秋季狂歡節、IBM 量子活動",
    },
  },
  {
    title: { en: "Industry & Partner Events", zh: "產業與夥伴活動" },
    description: {
      en: "Career sessions, company visits, and joint events with partner organizations in Taiwan and abroad.",
      zh: "職涯分享、企業參訪，以及與國內外合作夥伴共同舉辦的活動。",
    },
    examples: {
      en: "talks and visits with BTQ, joint events with Western Quantum Club",
      zh: "與 BTQ 合作的講座與參訪、與 Western Quantum Club 合辦的活動",
    },
  },
  {
    title: { en: "Community & Social", zh: "社群與交流" },
    description: {
      en: "Gatherings that welcome new members and bring the club together each semester.",
      zh: "每學期迎接新社員、凝聚社團成員的聚會活動。",
    },
    examples: {
      en: "NTU Club Fair, new member orientation, semester convention, end-of-semester exchange mixer",
      zh: "台大社團聯展、迎新活動、學期社員大會、期末交流聚會",
    },
  },
];
