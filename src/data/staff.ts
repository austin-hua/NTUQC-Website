export type StaffRole =
  | "President"
  | "Vice President"
  | "STEM Chair"
  | "PR Chair"
  | "Administration Chair"
  | "Competitions Chair"
  | "Events Chair"
  | "Club Advisor"
  | "Advisor"
  | "Co-Founder";

export type LocalizedText = { en: string; zh: string };

export type Person = {
  name: string;
  image: string;
  intro?: LocalizedText;
  link?: string;
};

export type StaffPosition = {
  personId: string;
  role: StaffRole;
  section: "executive" | "advisor";
  note?: LocalizedText;
  // Overrides the person's default intro for this specific position, for
  // someone whose bio text is tied to a different year/role (e.g. it
  // references "this academic year" for their current role).
  intro?: LocalizedText;
};

export type VacantPosition = {
  vacant: true;
  role: StaffRole;
  section: "executive" | "advisor";
};

export type StaffYear = {
  year: string;
  label: LocalizedText;
  positions: (StaffPosition | VacantPosition)[];
  // Years the club had no formally registered staff (see the Our Story page for context).
  inactive?: boolean;
};

export const ROLE_NAMES: Record<StaffRole, LocalizedText> = {
  President: { en: "President", zh: "社長" },
  "Vice President": { en: "Vice President", zh: "副社長" },
  "STEM Chair": { en: "STEM Chair", zh: "學術長" },
  "PR Chair": { en: "PR Chair", zh: "公關長" },
  "Administration Chair": { en: "Administration Chair", zh: "行政長" },
  "Competitions Chair": { en: "Competitions Chair", zh: "競賽長" },
  "Events Chair": { en: "Events Chair", zh: "活動長" },
  "Club Advisor": { en: "Club Advisor", zh: "指導教授" },
  Advisor: { en: "Advisor", zh: "顧問" },
  "Co-Founder": { en: "Co-Founder", zh: "共同創辦人" },
};

// Job descriptions sourced from the NTUQC constitution (Articles 12-20).
export const ROLE_DESCRIPTIONS: Record<StaffRole, LocalizedText> = {
  President: {
    en: "Represents the club externally and oversees all internal affairs, coordinating the work of every department. Sets the club's direction for the year and convenes the General Assembly each semester.",
    zh: "對外代表社團，對內綜理社務並協調各部門運作。訂定本學年度社團發展方向，並於每學期召開社員大會。",
  },
  "Vice President": {
    en: "Assists the President in carrying out their duties and steps in to lead if the President's seat becomes vacant. Works closely with each department chair to keep the club's day-to-day operations running smoothly.",
    zh: "協助社長執行社務，於社長職缺時代理其職務。與各部部長密切合作，確保社團日常運作順暢。",
  },
  "STEM Chair": {
    en: "Promotes quantum science and quantum computing knowledge on campus through technical lectures, courses, and workshops. Manages the club's technical resources, including this website, cloud tools, and quantum simulators, and supports members with learning and research consultation.",
    zh: "透過技術講座、課程與工作坊，在校園推廣量子科學與量子計算知識。管理社團的技術資源，包括本網站、雲端工具與量子模擬器，並提供社員學習與研究諮詢。",
  },
  "PR Chair": {
    en: "Leads graphic design and manages the club's presence across social platforms like Facebook and Instagram. Writes promotional content and drives officer and member recruitment campaigns.",
    zh: "負責平面設計，並管理社團在 Facebook、Instagram 等社群平台的形象。撰寫宣傳內容，並推動幹部與社員招募活動。",
  },
  "Administration Chair": {
    en: "Keeps the club running behind the scenes: recording attendance, meeting minutes, and General Assemblies, and handling venue reservations. Manages financial planning and member records.",
    zh: "在幕後維持社團運作：記錄出席、會議紀錄與社員大會，並處理場地借用。負責財務規劃與社員資料管理。",
  },
  "Competitions Chair": {
    en: "Organizes member participation in quantum-related competitions such as the Qiskit Hackathon and QuHack, and passes on strategy from past competitions. Designs projects and challenges that connect quantum computing to the UN Sustainable Development Goals and real industry needs.",
    zh: "籌組社員參與 Qiskit Hackathon、QuHack 等量子相關競賽，並傳承過往競賽經驗與策略。設計結合聯合國永續發展目標（SDGs）與產業需求的專案與挑戰。",
  },
  "Events Chair": {
    en: "Plans orientation events, midterm and final socials, and other community gatherings throughout the year. Co-organizes exhibitions, corporate visits, international exchanges, and academic conferences such as the Summit on Quantum AI (SQAI).",
    zh: "規劃迎新活動、期中期末社課聚會及其他社群活動。共同舉辦展覽、企業參訪、國際交流，以及量子人工智慧高峰會（SQAI）等學術會議。",
  },
  "Club Advisor": {
    en: "A faculty advisor invited to provide regular teaching and research guidance to the club. Helps connect members with academic opportunities and lends scientific credibility to the club's initiatives.",
    zh: "受邀提供社團定期教學與研究指導的指導教授。協助社員接觸學術資源，並為社團活動提供科學專業支持。",
  },
  Advisor: {
    en: "A senior advisor who offers guidance and mentorship to the club's officers, drawing on prior experience with NTUQC. Helps maintain continuity and institutional knowledge as leadership changes each academic year.",
    zh: "資深顧問，憑藉過往在 NTUQC 的經驗為幹部提供指導與建議，協助在每學年幹部交接之際維持社團的傳承與經驗延續。",
  },
  "Co-Founder": {
    en: "One of the students who co-founded the club alongside its founding president.",
    zh: "與創社社長一同創立社團的共同創辦人之一。",
  },
};

const DEFAULT_IMAGE = "/staff/default-avatar.svg";

// People are keyed by id so the same person can hold different roles in
// different years (e.g. a past president who is now an advisor) without
// duplicating their bio/photo/link in more than one place.
export const PEOPLE: Record<string, Person> = {
  "po-sheng-huang": {
    name: "Po-Sheng Huang",
    image: DEFAULT_IMAGE,
    intro: {
      en: "Hi, I'm Po-Sheng! I'm a huge fan of bubble tea and late-night debugging sessions. Looking forward to a great year of quantum exploration with everyone.",
      zh: "大家好，我是柏昇！我超愛珍珠奶茶，也很享受半夜除錯的時光。期待和大家一起展開精彩的量子探索之旅！",
    },
  },
  "katie-chao": {
    name: "Katie Chao",
    image: DEFAULT_IMAGE,
    intro: {
      en: "Hey there, I'm Katie! When I'm not in class you can probably find me at the climbing gym. Excited to help make this year's events unforgettable.",
      zh: "大家好，我是Katie！沒有課的時候，通常可以在攀岩館找到我。很期待這學年能把每場活動辦得令人難忘！",
    },
  },
  maxence: {
    name: "Maxence",
    image: DEFAULT_IMAGE,
    intro: {
      en: "Hi, I'm Maxence! I got hooked on quantum computing after my first qubit simulation crashed spectacularly. Can't wait to share that same spark with new members.",
      zh: "嗨，我是Maxence！我第一次做量子位元模擬就慘烈當機，卻也因此徹底愛上了量子計算。迫不及待想把這份熱情分享給新社員！",
    },
  },
  "haocheng-kan": {
    name: "Haocheng Kan",
    image: DEFAULT_IMAGE,
    intro: {
      en: "Hi, I'm Haocheng! I spend more time picking fonts than I probably should. Let's make NTUQC's socials the best-looking feed on campus.",
      zh: "嗨，我是浩正！我花在挑選字體上的時間可能有點太多了。讓我們把 NTUQC 的社群經營成校園裡最好看的版面吧！",
    },
  },
  "christian-rioflorido": {
    name: "Christian Rioflorido",
    image: DEFAULT_IMAGE,
    intro: {
      en: "Hey, I'm Christian! I once stayed up 30 hours straight for a hackathon and would happily do it again. Ready to help our team crush the next Qiskit Hackathon.",
      zh: "嗨，我是Christian！我曾經為了一場黑客松連續熬夜30小時，而且還很樂意再來一次。準備好帶領大家在下一屆 Qiskit Hackathon 大展身手！",
    },
  },
  "robin-fischer": {
    name: "Robin Fischer",
    image: DEFAULT_IMAGE,
    intro: {
      en: "Hi, I'm Robin! Ask me about the best boba spots near campus, I have strong opinions. Excited to plan events that bring our whole community together.",
      zh: "嗨，我是Robin！歡迎問我校園附近哪裡的珍奶最好喝，我有非常堅定的意見。很期待規劃能凝聚整個社群的活動！",
    },
  },
  "hsi-sheng-goan": {
    name: "Professor Hsi-Sheng Goan",
    image: DEFAULT_IMAGE,
    intro: {
      en: "I've spent my career researching quantum information and open quantum systems, and I'm delighted to support NTUQC's students as they explore this field. Looking forward to another exciting year of ideas and collaboration.",
      zh: "我的學術生涯致力於量子資訊與開放量子系統的研究，很樂意支持 NTUQC 的同學們探索這個領域。期待新的一年能有更多精彩的想法交流與合作。",
    },
  },
  "chao-hsien": {
    name: "Chao Hsien",
    image: DEFAULT_IMAGE,
  },
  "jordan-chiao": {
    name: "Jordan Chiao",
    image: "/staff/jordan-chiao.jpg",
  },
  "chengwei-huang": {
    name: "Cesare Huang",
    image: "/staff/chengwei-huang.jpg",
  },
  "austin-hua": {
    name: "Austin Hua",
    image: "/staff/austin-hua.jpg",
    link: "https://www.linkedin.com/in/austin-hua/",
    intro: {
      en: "Hi! I am Austin, an NTU CSIE MS graduate and co-founder of NTUQC. For this academic year I am assisting the President and Vice President in forming strategic partnerships in both academia and industry and contributing to the overall direction, development, and growth of the club. Feel free to reach out to me on my provided LinkedIn if you have any questions.",
      zh: "大家好，我是Austin，台大資工所碩士畢業，也是 NTUQC 的共同創辦人。這學年我協助社長與副社長建立學術界與產業界的策略夥伴關係，並參與社團整體方向、發展與成長的規劃。若有任何問題，歡迎透過我的 LinkedIn 與我聯繫。",
    },
  },
  "mark-chen": {
    name: "Mark Chen",
    image: DEFAULT_IMAGE,
    intro: {
      en: "Hey, I'm Mark! I'm always up for a good conversation about quantum algorithms or terrible puns. Glad to keep supporting NTUQC from the sidelines.",
      zh: "嗨，我是Mark！我隨時樂於聊量子演算法，或是講一些很爛的雙關笑話。很高興能持續在幕後支持 NTUQC。",
    },
  },
};

export const CURRENT_YEAR = "115";

export const STAFF: StaffYear[] = [
  {
    year: "115",
    label: { en: "115th Academic Year (2026-2027)", zh: "115學年度（2026-2027）" },
    positions: [
      {
        personId: "po-sheng-huang",
        role: "President",
        section: "executive",
        note: { en: "3rd President", zh: "第3任社長" },
      },
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
    label: { en: "114th Academic Year (2025-2026)", zh: "114學年度（2025-2026）" },
    positions: [
      {
        personId: "austin-hua",
        role: "President",
        section: "executive",
        note: { en: "Not formally registered with the university", zh: "未向校方正式立案" },
        intro: {
          en: "As NTUQC's president that year, I worked to restructure the club and its staff team even before we were able to formally register with the university.",
          zh: "身為當年 NTUQC 的社長，我在正式向校方立案之前，便著手重組了社團與幹部團隊。",
        },
      },
    ],
  },
  {
    year: "113",
    label: { en: "113th Academic Year (2024-2025)", zh: "113學年度（2024-2025）" },
    positions: [],
    inactive: true,
  },
  {
    year: "112",
    label: { en: "112th Academic Year (2023-2024)", zh: "112學年度（2023-2024）" },
    positions: [
      {
        personId: "chao-hsien",
        role: "President",
        section: "executive",
        note: { en: "Founding President", zh: "創社社長" },
      },
      { personId: "jordan-chiao", role: "Co-Founder", section: "executive" },
      { personId: "chengwei-huang", role: "Co-Founder", section: "executive" },
      { personId: "hsi-sheng-goan", role: "Club Advisor", section: "advisor" },
    ],
  },
];

export const getStaffYear = (year: string): StaffYear | undefined => STAFF.find((y) => y.year === year);
