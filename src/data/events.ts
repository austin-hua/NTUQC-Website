export type EventItem = {
  title: string;
  description: string;
  href: string;
};

// Club-run events (orientation, socials, workshops, etc.). Empty until scheduled.
export const UPCOMING_EVENTS: EventItem[] = [];

// External conferences and competitions NTUQC co-organizes or participates in.
export const PARTNER_EVENTS: EventItem[] = [
  {
    title: "Summit on Quantum AI (SQAI)",
    description: "An international academic conference on quantum AI, co-organized by NTUQC.",
    href: "https://sqai.org",
  },
  {
    title: "Qiskit Hackathon Taiwan",
    description: "A hands-on quantum computing hackathon hosted at NTU.",
    href: "https://quantum.ntu.edu.tw/?p=10004",
  },
];
