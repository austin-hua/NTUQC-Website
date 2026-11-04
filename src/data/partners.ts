import type { LocalizedText } from "./staff.ts";

export type Partner = {
  name: string;
  href?: string;
  status: "confirmed" | "pending";
  image?: string;
  about?: LocalizedText;
  partnership?: LocalizedText;
};

// Only "confirmed" partners are rendered on the public Partners page.
// Pending entries are kept here (name/link/about, no logo asset) so the
// page needs no rebuild beyond adding a logo and flipping the status
// once each partnership is confirmed and cleared to display publicly.
export const PARTNERS: Partner[] = [
  {
    name: "BTQ",
    href: "https://btq.com",
    status: "confirmed",
    image: "/partners/btq.png",
    about: {
      en: "A quantum technology company advancing quantum technologies and post-quantum cryptography.",
      zh: "一家致力於推動量子技術與後量子密碼學發展的量子科技公司。",
    },
    partnership: {
      en: "BTQ sponsors NTUQC from October 2026 to September 2027, supporting our events and contributing technical talks, career sessions, industry visits, and co-hosted events that connect students with quantum industry professionals.",
      zh: "BTQ 於 2026 年 10 月至 2027 年 9 月贊助 NTUQC，支持社團活動，並提供技術講座、職涯分享、企業參訪及共同舉辦的活動，協助學生與量子產業專業人士交流。",
    },
  },
  {
    name: "ULTRACOMPUTE",
    href: "https://ultracompute.com",
    status: "confirmed",
    image: "/partners/ultracompute.png",
    about: {
      en: "A Washington D.C.-based nonprofit corporation dedicated to building the world's most powerful supercomputers that allow for Artificial Ultraintelligence (AUI).",
      zh: "位於美國華盛頓特區的非營利法人組織，致力於打造全球最強大的超級電腦，以實現人工超智慧（AUI）。",
    },
    partnership: {
      en: "ULTRACOMPUTE serves as a close collaborator for NTUQC.",
      zh: "ULTRACOMPUTE 是 NTUQC 的密切合作夥伴。",
    },
  },
  {
    name: "NTU CQSE",
    href: "https://cqse.ntu.edu.tw",
    status: "confirmed",
    image: "/partners/cqse.png",
    about: {
      en: "The Center for Quantum Science and Engineering at National Taiwan University, an academic research center that coordinates with IBM to advance quantum research, education, and computing access.",
      zh: "國立臺灣大學量子科學與工程研究中心，與 IBM 合作推動量子研究、教育及運算資源的學術研究中心。",
    },
  },
  {
    name: "EntangleTech",
    href: "https://entangletech.tw",
    status: "pending",
    about: {
      en: "A quantum learning platform helping students explore and understand quantum science.",
      zh: "一個協助學生探索並理解量子科學的學習平台。",
    },
  },
  {
    name: "NTUFC",
    href: "https://www.instagram.com/ntu_fc/",
    status: "pending",
    about: {
      en: "NTU Fintech Club (台大金融科技研究社), a student club focused on financial technology.",
      zh: "台大金融科技研究社（NTU Fintech Club），專注於金融科技領域的學生社團。",
    },
  },
  {
    name: "NTU European Student Association",
    href: "https://www.instagram.com/ntu_esa/",
    status: "confirmed",
    image: "/partners/ntuesa.png",
    about: {
      en: "NTU European Student Association (台大歐洲同學會), a student association connecting NTU's European student community.",
      zh: "台大歐洲同學會（NTU European Student Association），連結台大歐洲學生社群的學生組織。",
    },
  },
  {
    name: "IBM Quantum Hub at NTU",
    href: "https://quantum.ntu.edu.tw/",
    status: "confirmed",
    image: "/partners/ntuibmq.png",
    about: {
      en: "A research and education platform at NTU, backed by government support, giving Taiwan's academic community cloud access to IBM's quantum computers.",
      zh: "由政府支持、設於台大的研究教育平台，讓台灣學術界能透過雲端使用 IBM 的量子電腦。",
    },
  },
  {
    name: "NTU Consensus Labs (NTUCL)",
    href: "https://www.csie.ntu.edu.tw/~liao/",
    status: "confirmed",
    image: "/partners/ntucl.png",
    about: {
      en: "Professor Shih-Wei Liao's lab at NTU CSIE, researching quantum computing and, more recently, neuroengineering.",
      zh: "廖世偉教授於台大資工系的研究實驗室，研究領域包含量子計算，近期也開始投入神經工程研究。",
    },
  },
  {
    name: "QISCA (Quantum Information Science Club Association)",
    href: "https://qisca.org",
    status: "confirmed",
    image: "/partners/qisca.png",
    about: {
      en: "A nationwide network of student-led quantum clubs across South Korea, spanning universities including Seoul National University, KAIST, Korea University, Yonsei, DGIST, and Kyung Hee University.",
      zh: "由南韓多所大學學生自主成立的量子社團聯盟，成員涵蓋首爾大學、KAIST、高麗大學、延世大學、大邱慶北科學技術院（DGIST）與慶熙大學等校。",
    },
  },
  {
    name: "Western Quantum Club (WQC)",
    href: "https://www.westernquantumclub.ca/",
    status: "confirmed",
    image: "/partners/wqc.png",
    about: {
      en: "A student club at Western University in London, Ontario, Canada, equipping students to understand and work with quantum computers. Its research, software, and consulting teams explore quantum developments, build open-source applications with IBM's Qiskit, and help businesses adopt quantum computing.",
      zh: "加拿大安大略省倫敦市西安大略大學（Western University）的學生社團，致力於培養學生理解並運用量子電腦的能力。社團設有研究、軟體與顧問團隊，追蹤量子領域最新發展、以 IBM Qiskit 開發開源應用，並協助企業導入量子運算。",
    },
  },
];
