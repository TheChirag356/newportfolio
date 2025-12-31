// oneliners.ts
import {
  IconCode,
  IconPhone,
  IconMail,
  IconGlobe,
  IconFileCvFilled
} from "@tabler/icons-svelte";

export const OneLiners = [
  {
    icon: IconCode,
    text: "Full Stack Developer",
    isLink: false,
    href: "",
  },
  {
    icon: IconPhone,
    text: "+91 8595055783",
    isLink: true,
    href: "tel:+918595055783",
  },
  {
    icon: IconMail,
    text: "chiragarora.work@gmail.com",
    isLink: true,
    href: "mailto:chiragarora.work@gmail.com",
  },
  {
    icon: IconGlobe,
    text: "chiragarora.xyz",
    isLink: true,
    href: "https://chiragarora.xyz",
  },
  {
    icon: IconFileCvFilled,
    text: "chiragarora.xyz/cv",
    isLink: true,
    href: "/cv",
  },
];
