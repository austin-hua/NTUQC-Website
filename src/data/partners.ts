export type Partner = {
  name: string;
  href?: string;
  status: "confirmed" | "pending";
  image?: string;
  about?: string;
  partnership?: string;
};

// Only "confirmed" partners are rendered on the public Partners page.
// Pending entries are kept here (name/link only, no logo asset) so the
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
  },
  {
    name: "BTQ",
    href: "https://btq.com",
    status: "pending",
  },
  {
    name: "EntangleTech",
    href: "https://entangletech.tw",
    status: "pending",
  },
  {
    name: "NTUFC",
    href: "https://www.instagram.com/ntu_fc/",
    status: "pending",
  },
  {
    name: "NTU European Student Association",
    href: "https://www.instagram.com/ntu_esa/",
    status: "pending",
  },
  {
    name: "IBM Quantum Hub at NTU",
    href: "https://quantum.ntu.edu.tw/",
    status: "pending",
  },
  {
    name: "NTU Consensus Labs (NTUCL)",
    status: "pending",
    // TODO: add href once a website/social link is confirmed
  },
  {
    name: "QISCA (Quantum Information Science Club Association)",
    status: "pending",
    // TODO: add href once a website/social link is confirmed
  },
];
