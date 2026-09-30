import Link from "next/link";
import { siteConfig } from "@/config/site";
import SocialLinks from "@/components/ui/SocialLinks";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-white/60">{siteConfig.description}</p>
        </div>

        <div>
          <p className="text-sm text-gold">Quick links</p>
          <ul className="mt-3 space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/70 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-gold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.phone}</li>
          </ul>
          <SocialLinks className="mt-4 gap-5" />
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
