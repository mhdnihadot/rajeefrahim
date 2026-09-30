import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/config/site";

const items = [
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: FaLinkedinIn },
  { label: "X", href: siteConfig.socials.x, Icon: FaXTwitter },
  { label: "Instagram", href: siteConfig.socials.instagram, Icon: FaInstagram },
];

type Props = {
  /** "plain" = bare gold icons (header), "circle" = outlined round buttons (hero) */
  variant?: "plain" | "circle";
  className?: string;
  /** Overrides the icon size classes. */
  iconClassName?: string;
};

export default function SocialLinks({ variant = "plain", className = "", iconClassName }: Props) {
  return (
    <ul className={`flex items-center ${className}`}>
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={
              variant === "circle"
                ? "flex size-12 items-center justify-center rounded-full border border-white/40 text-gold transition-colors hover:border-gold md:size-10"
                : "flex items-center text-gold transition-opacity hover:opacity-80"
            }
          >
            <Icon className={iconClassName ?? (variant === "circle" ? "size-5 md:size-4" : "size-[18px] md:size-4")} />
          </a>
        </li>
      ))}
    </ul>
  );
}
