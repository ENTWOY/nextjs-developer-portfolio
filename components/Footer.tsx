import { developer } from "@/data/developer";
import SocialLink from "./SocialLink";

/** Minimal footer with copyright and social links */
export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted tracking-wide">
                    © {new Date().getFullYear()} {developer.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-5">
                    {developer.socials.map((social) => (
                        <SocialLink key={social.label} social={social} />
                    ))}
                </div>
            </div>
        </footer>
    );
}
