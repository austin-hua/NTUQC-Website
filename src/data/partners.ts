export type Partner = {
  name: string;
  href?: string;
  status: "confirmed" | "pending";
  image?: string;
  about?: string;
  partnership?: string;
};

// Only "confirmed" partners are rendered on the public Partners page.
// Pending entries are kept here (name/link/about, no logo asset) so the
// page needs no rebuild beyond adding a logo and flipping the status
// once each partnership is confirmed and cleared to display publicly.
export const PARTNERS: Partner[] = [
  {
    name: "ULTRACOMPUTE",
    href: "https://ultracompute.com",
    status: "confirmed",
    image: "/partners/ultracompute.png",
    about:
      "A Washington D.C.-based nonprofit corporation dedicated to building the world's most powerful supercomputers that allow for Artificial Ultraintelligence (AUI).",
    partnership: "ULTRACOMPUTE serves as a close collaborator for NTUQC.",
  },
  {
    name: "NTU CQSE",
    href: "https://cqse.ntu.edu.tw",
    status: "pending",
    about:
      "The Center for Quantum Science and Engineering at National Taiwan University, an academic research center that coordinates with IBM to advance quantum research, education, and computing access.",
  },
  {
    name: "BTQ",
    href: "https://btq.com",
    status: "pending",
    about: "BTQ builds quantum-safe security infrastructure spanning silicon, blockchain networks, and quantum computing systems.",
  },
  {
    name: "EntangleTech",
    href: "https://entangletech.tw",
    status: "pending",
    about: "A quantum learning platform helping students explore and understand quantum science.",
  },
  {
    name: "NTUFC",
    href: "https://www.instagram.com/ntu_fc/",
    status: "pending",
    about: "NTU Fintech Club (台大金融科技研究社), a student club focused on financial technology.",
  },
  {
    name: "NTU European Student Association",
    href: "https://www.instagram.com/ntu_esa/",
    status: "pending",
    about: "NTU European Student Association (台大歐洲同學會), a student association connecting NTU's European student community.",
  },
  {
    name: "IBM Quantum Hub at NTU",
    href: "https://quantum.ntu.edu.tw/",
    status: "pending",
    about:
      "A research and education platform at NTU, backed by government support, giving Taiwan's academic community cloud access to IBM's quantum computers.",
  },
  {
    name: "NTU Consensus Labs (NTUCL)",
    href: "https://www.csie.ntu.edu.tw/~liao/",
    status: "pending",
    about: "Professor Shih-Wei Liao's lab at NTU CSIE, researching quantum computing and, more recently, neuroengineering.",
  },
  {
    name: "QISCA (Quantum Information Science Club Association)",
    href: "https://qisca.org",
    status: "pending",
    about:
      "A nationwide network of student-led quantum clubs across South Korea, spanning universities including Seoul National University, KAIST, Korea University, Yonsei, DGIST, and Kyung Hee University.",
  },
];
