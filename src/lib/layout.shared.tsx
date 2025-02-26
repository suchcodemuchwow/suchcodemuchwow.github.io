import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "suchcodemuchwow",
    },
    searchToggle: {
      enabled: false,
    },
    links: [
      {
        type: "icon",
        label: "Visit my Github",
        icon: <GithubIcon />,
        text: "Github",
        url: "https://github.com/suchcodemuchwow",
      },
      {
        type: "icon",
        label: "Visit my LinkedIn",
        icon: <LinkedinIcon />,
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/batugurdin",
      },
    ],
  };
}
