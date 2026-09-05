import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide, Simple } from "./icons";

const projects = [
  {
    title: { en: "NTUQC Website", zh: "NTUQC 網站" },
    description: { en: "Website for our club", zh: "我們社團的網站" },
    icon: Lucide.IconGlobe,
    url: "https://github.com/austin-hua/NTUQC-Website",
  },
  {
    title: { en: "Quantum Continual Learning", zh: "量子持續學習（QCL）" },
    description: {
      en: "2nd place at the Qiskit Hackathon — mitigating catastrophic forgetting in variational quantum circuits.",
      zh: "Qiskit Hackathon 亞軍作品——緩解變分量子電路中的災難性遺忘問題。",
    },
    icon: Simple.IconGitHub,
    url: "https://github.com/rich7420/qiskit-hackthon-2026",
  },
];

export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">
        <span className="i18n-en">Projects</span>
        <span className="i18n-zh">專案</span>
      </h2>
      <ul className="grid grid-cols-1 gap-3 p-1">
        {projects.map((project) => {
          return (
            <li
              key={project.title.en}
              className={cn(
                "group",
                "flex items-center justify-between px-4 py-3",
                "bg-neutral-2 hover:bg-neutral-3",
                "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              <div className="flex flex-row items-stretch gap-5 pl-2">
                <div className="flex items-center justify-center">
                  <project.icon
                    size={24}
                    className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                  />
                </div>

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">
                    <span className="i18n-en">{project.title.en}</span>
                    <span className="i18n-zh">{project.title.zh}</span>
                  </h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                    <span className="i18n-en">{project.description.en}</span>
                    <span className="i18n-zh">{project.description.zh}</span>
                  </div>
                </div>
              </div>

              <IconButton as="a" role="button" href={project.url} className="group/icon" target="_blank" aria-label="Open">
                <Lucide.IconExternalLink
                  aria-label="Open"
                  className="transition text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
                />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
