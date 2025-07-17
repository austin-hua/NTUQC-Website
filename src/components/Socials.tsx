import { cn } from "./ui/utils.ts";
import { Simple } from "./icons";

// NTU Quantum Club social links
const socials = [
  {
    href: "mailto:ntuquantumclub@gmail.com",
    name: "Email",
    icon: Simple.IconEmail,
  },
  {
    href: "https://www.linkedin.com/company/ntuqc",
    name: "LinkedIn",
    icon: Simple.IconLinkedIn,
  },
  {
    href: "https://github.com/organizations/NTUQC",
    name: "GitHub",
    icon: Simple.IconGitHub,
  },
  {
    href: "https://www.facebook.com/NTUQC",
    name: "Facebook",
    icon: Simple.IconFacebook,
  },
  {
    href: "https://www.instagram.com/ntuquantum",
    name: "Instagram",
    icon: Simple.IconInstagram,
  },
];

export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">Socials</h2>
      <ul className="flex items-center justify-center gap-3 p-1">
        {socials.map((social) => {
          return (
            <li key={social.name}>
              <a
                href={social.href}
                className={cn(
                  "group",
                  "flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20",
                  "bg-neutral-2 hover:bg-neutral-3",
                  "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
                )}
                target={social.name === "Email" ? "_self" : "_blank"}
                aria-label={social.name}
              >
                <social.icon className="transition size-1/3 text-neutral-10 group-hover:text-neutral-11 group-hover:scale-110 group-focus-visible:text-neutral-11 group-focus-visible:scale-110" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
