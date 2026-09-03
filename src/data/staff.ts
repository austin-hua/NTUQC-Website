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

export type StaffMember = {
  name: string;
  role: StaffRole;
  section: "executive" | "advisor";
  image: string;
  intro?: string;
  vacant?: boolean;
};

export type StaffYear = {
  year: string;
  label: string;
  members: StaffMember[];
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

export const CURRENT_YEAR = "115";

export const STAFF: StaffYear[] = [
  {
    year: "115",
    label: "115th Academic Year (2026-2027)",
    members: [
      {
        name: "Po-Sheng Huang",
        role: "President",
        section: "executive",
        image: DEFAULT_IMAGE,
        intro:
          "Hi, I'm Po-Sheng! I'm a huge fan of bubble tea and late-night debugging sessions. Looking forward to a great year of quantum exploration with everyone.",
      },
      {
        name: "Katie Chao",
        role: "Vice President",
        section: "executive",
        image: DEFAULT_IMAGE,
        intro:
          "Hey there, I'm Katie! When I'm not in class you can probably find me at the climbing gym. Excited to help make this year's events unforgettable.",
      },
      {
        name: "Maxence",
        role: "STEM Chair",
        section: "executive",
        image: DEFAULT_IMAGE,
        intro:
          "Hi, I'm Maxence! I got hooked on quantum computing after my first qubit simulation crashed spectacularly. Can't wait to share that same spark with new members.",
      },
      {
        name: "Haocheng Kan",
        role: "PR Chair",
        section: "executive",
        image: DEFAULT_IMAGE,
        intro:
          "Hi, I'm Haocheng! I spend more time picking fonts than I probably should. Let's make NTUQC's socials the best-looking feed on campus.",
      },
      {
        name: "Recruiting",
        role: "Administration Chair",
        section: "executive",
        image: DEFAULT_IMAGE,
        vacant: true,
      },
      {
        name: "Christian Rioflorido",
        role: "Competitions Chair",
        section: "executive",
        image: DEFAULT_IMAGE,
        intro:
          "Hey, I'm Christian! I once stayed up 30 hours straight for a hackathon and would happily do it again. Ready to help our team crush the next Qiskit Hackathon.",
      },
      {
        name: "Robin Fischer",
        role: "Events Chair",
        section: "executive",
        image: DEFAULT_IMAGE,
        intro:
          "Hi, I'm Robin! Ask me about the best boba spots near campus, I have strong opinions. Excited to plan events that bring our whole community together.",
      },
      {
        name: "Professor Hsi-Sheng Goan",
        role: "Club Advisor",
        section: "advisor",
        image: DEFAULT_IMAGE,
        intro:
          "I've spent my career researching quantum information and open quantum systems, and I'm delighted to support NTUQC's students as they explore this field. Looking forward to another exciting year of ideas and collaboration.",
      },
      {
        name: "Austin Hua",
        role: "Advisor",
        section: "advisor",
        image: DEFAULT_IMAGE,
        intro:
          "Hi, I'm Austin! I built the club's first website and I'm still not over how fun that was. Happy to stick around and help however I can.",
      },
      {
        name: "Mark Chen",
        role: "Advisor",
        section: "advisor",
        image: DEFAULT_IMAGE,
        intro:
          "Hey, I'm Mark! I'm always up for a good conversation about quantum algorithms or terrible puns. Glad to keep supporting NTUQC from the sidelines.",
      },
    ],
  },
];

export const getStaffYear = (year: string): StaffYear | undefined => STAFF.find((y) => y.year === year);
