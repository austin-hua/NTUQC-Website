import type { LocalizedText } from "./staff.ts";

export type StoryMilestone = {
  year: string;
  text: LocalizedText;
};

export const STORY_MILESTONES: StoryMilestone[] = [
  {
    year: "112",
    text: {
      en: "Chao Hsien founded the NTU Quantum Computing Club (NTUQCC), working closely with EntangleTech from the very beginning. Professor Hsi-Sheng Goan has served as the club's faculty advisor ever since.",
      zh: "Chao Hsien 創立了 NTU Quantum Computing Club（NTUQCC），創社初期便與 EntangleTech 密切合作。Hsi-Sheng Goan 教授自創社以來便一直擔任社團的指導教授。",
    },
  },
  {
    year: "113",
    text: {
      en: "The club had no activity during the 113th academic year.",
      zh: "113學年度，社團沒有任何活動。",
    },
  },
  {
    year: "Summer before 114",
    text: {
      en: "Austin Hua began independently working on forming a new club, NTU Quantum Club (NTUQC). NTU's Office of Student Affairs (課外活動組) strongly advised him to coordinate with NTUQCC's original founders instead, so he restructured the club and its staff team together with them.",
      zh: "在114學年度開始前的暑假，Austin Hua 原本獨自著手籌組一個新社團「臺大量子應用社」（NTUQC）。台大課外活動組強烈建議他應與 NTUQCC 的原創社成員協調合作，因此他與原創社團隊共同重組了社團與幹部團隊。",
    },
  },
  {
    year: "114",
    text: {
      en: "However, personal circumstances prevented the coordinators from completing formal registration in time, and the club went unregistered for a second consecutive year.",
      zh: "然而，由於個人因素，協調團隊未能及時完成正式立案，社團因此連續第二年處於未立案狀態。",
    },
  },
  {
    year: "115",
    text: {
      en: "Having gone unregistered for two consecutive years, the club was, per school protocol, on the verge of being permanently disbanded. Austin acted quickly, returned to Taiwan, and assembled a strong new leadership team — including our 3rd President, Po-Sheng Huang. The new staff team registered the club just in time to save it, going into the 115th academic year.",
      zh: "連續兩年未完成立案，依校方規定，社團面臨被永久解散的處境。Austin 迅速行動，返回台灣，並集結了一支堅強的新任幹部團隊——包括我們的第3任社長 Po-Sheng Huang。新任幹部團隊及時完成立案，成功挽救了社團，正式邁入115學年度。",
    },
  },
];

export const HACKATHON_VIDEO = {
  youtubeId: "kSrZDAjru-A",
  caption: {
    en: "During the Qiskit Hackathon, Professor Goan invited Austin Hua to introduce NTUQC to all the hackathon participants.",
    zh: "在 Qiskit Hackathon 期間，Goan 教授邀請 Austin Hua 向所有黑客松參與者介紹 NTUQC。",
  },
};
