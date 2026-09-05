import type { LocalizedText } from "./staff.ts";

export type EventStatus = "confirmed" | "in-progress" | "attendee-only" | "pending" | "blockout";

export const EVENT_STATUS_LABELS: Record<EventStatus, LocalizedText> = {
  confirmed: { en: "Confirmed", zh: "已確認" },
  "in-progress": { en: "In Progress", zh: "籌備中" },
  "attendee-only": { en: "Attendee Only", zh: "僅出席" },
  pending: { en: "Pending Approval", zh: "審核中" },
  blockout: { en: "Academic Blockout", zh: "考試週" },
};

export type ClubEvent = {
  title: LocalizedText;
  date: string;
  description?: LocalizedText;
  status?: EventStatus;
};

// Sourced from the club's internal 115-1 Master Event Schedule.
export const CLUB_EVENTS_BY_YEAR: Record<string, ClubEvent[]> = {
  "115": [
    {
      title: { en: "Staff Recruitment", zh: "招募新幹部" },
      date: "7/2026 - 8/2026",
      description: {
        en: "Find and onboard the next staff team for the 115-1 semester.",
        zh: "招募並培訓115-1學期的新任幹部團隊。",
      },
      status: "in-progress",
    },
    {
      title: { en: "NTUQC Founders Dinner", zh: "NTUQC 創辦人晚宴" },
      date: "7/18/2026 · 18:00",
      description: {
        en: "An evening gathering for the club founders and core members.",
        zh: "社團創辦人與核心成員的晚間聚會。",
      },
      status: "confirmed",
    },
    {
      title: { en: "Summit on Quantum Artificial Intelligence 2026 (SQAI 2026)", zh: "2026 量子人工智慧研討會" },
      date: "8/7/2026 · 9:00-16:00",
      description: {
        en: "International academic event exploring the intersection of quantum computing and artificial intelligence.",
        zh: "探討量子計算與人工智慧交會領域的國際學術活動。",
      },
      status: "confirmed",
    },
    {
      title: { en: "COSCUP 2026 (Day 1)", zh: "開源人年會 2026（第一天）" },
      date: "8/8/2026",
      description: {
        en: "Conference for open-source software developers and enthusiasts. NTUQC participating as attendees.",
        zh: "開源軟體開發者與愛好者的年度研討會，NTUQC 以參與者身份出席。",
      },
      status: "attendee-only",
    },
    {
      title: { en: "IBM Quantum: Scaling for Quantum Advantage and Beyond", zh: "IBM 量子論壇與報名" },
      date: "8/10/2026 - 8/11/2026",
      description: {
        en: "IBM Quantum event focused on scaling quantum systems. NTUQC participating as attendees.",
        zh: "IBM 量子活動，聚焦於量子系統的規模化發展，NTUQC 以參與者身份出席。",
      },
      status: "attendee-only",
    },
    {
      title: {
        en: "NTU-IBM Quantum System Users Meeting 2026 & Qiskit Hackathon Taiwan 2026",
        zh: "NTU-IBM 量子系統用戶年會暨 Qiskit 黑客松台灣 2026",
      },
      date: "8/12/2026 - 8/14/2026",
      description: {
        en: "Annual users meeting combined with the Qiskit Hackathon Taiwan. NTUQC participating as attendees.",
        zh: "年度用戶大會結合 Qiskit Hackathon Taiwan，NTUQC 以參與者身份出席。",
      },
      status: "attendee-only",
    },
    {
      title: { en: "NTUQC 115-1 Convention", zh: "NTUQC 115-1 社員大會" },
      date: "8/15/2026 · 19:00-21:00",
      description: {
        en: "General assembly and convention for all club members to open the semester, hosted by Austin Hua and Chao Hsien.",
        zh: "由 Austin Hua 與 Chao Hsien 主持，全體社員參與的開學社員大會。",
      },
      status: "confirmed",
    },
    {
      title: { en: "NTU Club Fair", zh: "NTU 社團聯展" },
      date: "9/12/2026 · 9:00-17:00",
      description: {
        en: "Annual university-wide club fair to recruit new members and promote NTUQC.",
        zh: "全校性社團聯展，招募新社員並推廣 NTUQC。",
      },
      status: "confirmed",
    },
    {
      title: { en: "NTUQC Orientation and Introduction to Quantum", zh: "NTUQC 迎新暨量子計算簡介" },
      date: "9/16/2026 · 19:00-21:00",
      description: {
        en: "Welcome orientation for new members paired with an introductory talk on quantum concepts.",
        zh: "迎新活動，並搭配量子概念入門講座。",
      },
      status: "confirmed",
    },
    {
      title: { en: "Quantum AI", zh: "量子人工智慧專題演講" },
      date: "10/7/2026",
      description: {
        en: "Special presentation on the convergence of quantum computing and AI, hosted by Mark Chen and Austin Hua.",
        zh: "由 Mark Chen 與 Austin Hua 主講，探討量子計算與人工智慧交會的專題演講。",
      },
      status: "confirmed",
    },
    {
      title: { en: "STEM Department Class", zh: "技術部社課" },
      date: "10/14/2026",
    },
    {
      title: { en: "Midterm Exam Week", zh: "期中考週" },
      date: "10/26/2026 - 10/30/2026",
      description: {
        en: "National Taiwan University midterm examinations. No club events scheduled.",
        zh: "國立臺灣大學期中考試週，無社團活動。",
      },
      status: "blockout",
    },
    {
      title: { en: "Qiskit Fall Fest", zh: "Qiskit 秋季狂歡節" },
      date: "10/2026 - 11/2026",
      description: {
        en: "Potential extension event under IBM's global Qiskit Fall Fest banner.",
        zh: "可能作為 IBM 全球 Qiskit Fall Fest 系列的延伸活動。",
      },
      status: "pending",
    },
    {
      title: { en: "Guest Speaker Class", zh: "外部講者" },
      date: "11/4/2026",
    },
    {
      title: { en: "Guest Speaker Class", zh: "外部講者" },
      date: "11/18/2026",
    },
    {
      title: { en: "End-of-Semester Exchange Mixer", zh: "期末交流期末聚會" },
      date: "12/2/2026",
      description: {
        en: "End-of-semester social gathering, networking mixer, and project exchange.",
        zh: "期末社交聚會，包含交流與專題成果分享。",
      },
      status: "confirmed",
    },
    {
      title: { en: "Finals Exam Week", zh: "期末考週" },
      date: "12/21/2026 - 12/25/2026",
      status: "blockout",
    },
  ],
  "114": [],
  "113": [],
  "112": [],
};
