import type { LocalizedText } from "./staff.ts";

export type EventItem = {
  title: string;
  description: LocalizedText;
  href: string;
  image?: string;
};

// Club-run events (orientation, socials, workshops, etc.). Empty until scheduled.
export const UPCOMING_EVENTS: EventItem[] = [];

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
