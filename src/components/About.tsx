// TODO : update about

import { Avatar, Button } from "./ui";
import { Lucide, Simple } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/fav.png" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">台大量子應用社</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">NTU Quantum Club</h2>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          我們的使命是推廣量子科學與技術在台大校園的普及化，讓學生了解量子物理、量子計算等前沿領域，並應用於未來產業與科研發展。我們致力於打造一個跨領域、跨世代的學習與交流平台，讓學生認識志同道合的夥伴、業界先驅、教授與研究者，一同邁向量子時代的未來。
        </p>
        <p>
          Our mission is to promote the popularization of quantum science and technology on the NTU campus, enabling students to understand cutting-edge fields such as quantum physics and quantum computing, and apply them to future industry and scientific research development. We are committed to creating an interdisciplinary, cross-generational learning and exchange platform, allowing students to meet like-minded partners, industry pioneers, professors, and researchers to advance together into the quantum era.
        </p>
      </div>

      <div className="flex self-stretch justify-end">
        <Button as="a" href="https://discord.gg/rXgwHxQNaq" target="_blank" aria-label="Discord">
          <Simple.IconDiscord />
          Join our Discord
        </Button>
      </div>
    </div>
  );
};
