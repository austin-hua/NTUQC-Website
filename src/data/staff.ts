export type StaffRole =
  | "President"
  | "Vice President"
  | "STEM Chair"
  | "PR Chair"
  | "Administration Chair"
  | "Competitions Chair"
  | "Events Chair"
  | "Club Advisor"
  | "Advisor";

export type Person = {
  name: string;
  image: string;
  intro?: string;
  link?: string;
};

export type StaffPosition = {
  personId: string;
  role: StaffRole;
  section: "executive" | "advisor";
  note?: string;
};

export type VacantPosition = {
  vacant: true;
  role: StaffRole;
  section: "executive" | "advisor";
};

export type StaffYear = {
  year: string;
  label: string;
  positions: (StaffPosition | VacantPosition)[];
};

// Job descriptions sourced from the NTUQC constitution (Articles 12-20).
export const ROLE_DESCRIPTIONS: Record<StaffRole, string> = {
  President:
    "Represents the club externally and oversees all internal affairs, coordinating the work of every department. Sets the club's direction for the year and convenes the General Assembly each semester.",
  "Vice President":
    "Assists the President in carrying out their duties and steps in to lead if the President's seat becomes vacant. Works closely with each department chair to keep the club's day-to-day operations running smoothly.",
  "STEM Chair":
    "Promotes quantum science and quantum computing knowledge on campus through technical lectures, courses, and workshops. Manages the club's technical resources, including this website, cloud tools, and quantum simulators, and supports members with learning and research consultation.",
  "PR Chair":
    "Leads graphic design and manages the club's presence across social platforms like Facebook and Instagram. Writes promotional content and drives officer and member recruitment campaigns.",
  "Administration Chair":
    "Keeps the club running behind the scenes: recording attendance, meeting minutes, and General Assemblies, and handling venue reservations. Manages financial planning and member records.",
  "Competitions Chair":
    "Organizes member participation in quantum-related competitions such as the Qiskit Hackathon and QuHack, and passes on strategy from past competitions. Designs projects and challenges that connect quantum computing to the UN Sustainable Development Goals and real industry needs.",
  "Events Chair":
    "Plans orientation events, midterm and final socials, and other community gatherings throughout the year. Co-organizes exhibitions, corporate visits, international exchanges, and academic conferences such as the Summit on Quantum AI (SQAI).",
  "Club Advisor":
    "A faculty advisor invited to provide regular teaching and research guidance to the club. Helps connect members with academic opportunities and lends scientific credibility to the club's initiatives.",
  Advisor:
    "A senior advisor who offers guidance and mentorship to the club's officers, drawing on prior experience with NTUQC. Helps maintain continuity and institutional knowledge as leadership changes each academic year.",
};

const DEFAULT_IMAGE = "/staff/default-avatar.svg";

// People are keyed by id so the same person can hold different roles in
// different years (e.g. a past president who is now an advisor) without
// duplicating their bio/photo/link in more than one place.
export const PEOPLE: Record<string, Person> = {
  "po-sheng-huang": {
    name: "Po-Sheng Huang",
    image: DEFAULT_IMAGE,
    intro:
      "Hi, I'm Po-Sheng! I'm a huge fan of bubble tea and late-night debugging sessions. Looking forward to a great year of quantum exploration with everyone.",
  },
  "katie-chao": {
    name: "Katie Chao",
    image: DEFAULT_IMAGE,
    intro:
      "Hey there, I'm Katie! When I'm not in class you can probably find me at the climbing gym. Excited to help make this year's events unforgettable.",
  },
  maxence: {
    name: "Maxence",
    image: DEFAULT_IMAGE,
    intro:
      "Hi, I'm Maxence! I got hooked on quantum computing after my first qubit simulation crashed spectacularly. Can't wait to share that same spark with new members.",
  },
  "haocheng-kan": {
    name: "Haocheng Kan",
    image: DEFAULT_IMAGE,
    intro: "Hi, I'm Haocheng! I spend more time picking fonts than I probably should. Let's make NTUQC's socials the best-looking feed on campus.",
  },
  "christian-rioflorido": {
    name: "Christian Rioflorido",
    image: DEFAULT_IMAGE,
    intro:
      "Hey, I'm Christian! I once stayed up 30 hours straight for a hackathon and would happily do it again. Ready to help our team crush the next Qiskit Hackathon.",
  },
  "robin-fischer": {
    name: "Robin Fischer",
    image: DEFAULT_IMAGE,
    intro:
      "Hi, I'm Robin! Ask me about the best boba spots near campus, I have strong opinions. Excited to plan events that bring our whole community together.",
  },
  "hsi-sheng-goan": {
    name: "Professor Hsi-Sheng Goan",
    image: DEFAULT_IMAGE,
    intro:
      "I've spent my career researching quantum information and open quantum systems, and I'm delighted to support NTUQC's students as they explore this field. Looking forward to another exciting year of ideas and collaboration.",
  },
  "austin-hua": {
    name: "Austin Hua",
    image: "/staff/austin-hua.jpg",
    link: "https://www.linkedin.com/in/austin-hua/",
    intro:
      "Hi! I am Austin, an NTU CSIE MS graduate and co-founder of NTUQC. For this academic year I am assisting the President and Vice President in forming strategic partnerships in both academia and industry and contributing to the overall direction, development, and growth of the club. Feel free to reach out to me on my provided LinkedIn if you have any questions.",
  },
  "mark-chen": {
    name: "Mark Chen",
    image: DEFAULT_IMAGE,
    intro: "Hey, I'm Mark! I'm always up for a good conversation about quantum algorithms or terrible puns. Glad to keep supporting NTUQC from the sidelines.",
  },
};

export const CURRENT_YEAR = "115";

export const STAFF: StaffYear[] = [
  {
    year: "115",
    label: "115th Academic Year (2026-2027)",
    positions: [
      { personId: "po-sheng-huang", role: "President", section: "executive" },
      { personId: "katie-chao", role: "Vice President", section: "executive" },
      { personId: "maxence", role: "STEM Chair", section: "executive" },
      { personId: "haocheng-kan", role: "PR Chair", section: "executive" },
      { vacant: true, role: "Administration Chair", section: "executive" },
      { personId: "christian-rioflorido", role: "Competitions Chair", section: "executive" },
      { personId: "robin-fischer", role: "Events Chair", section: "executive" },
      { personId: "hsi-sheng-goan", role: "Club Advisor", section: "advisor" },
      { personId: "austin-hua", role: "Advisor", section: "advisor" },
      { personId: "mark-chen", role: "Advisor", section: "advisor" },
    ],
  },
  {
    year: "114",
    label: "114th Academic Year (2025-2026)",
    positions: [{ personId: "austin-hua", role: "President", section: "executive" }],
  },
  {
    year: "113",
    label: "113th Academic Year (2024-2025)",
    positions: [{ personId: "katie-chao", role: "President", section: "executive", note: "Founding President" }],
  },
];

export const getStaffYear = (year: string): StaffYear | undefined => STAFF.find((y) => y.year === year);
