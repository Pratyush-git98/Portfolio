import Link from "next/link";
import {
  BookOpenText,
  BriefcaseBusiness,
  MapPin,
  Mic2,
  UserRound,
} from "lucide-react";
import type { ReactNode } from "react";

export type PortfolioTab = "about" | "projects" | "speaking" | "blog";

const tabs: { id: PortfolioTab; label: string; href: string }[] = [
  { id: "about", label: "about.ts", href: "/" },
  { id: "projects", label: "projects.md", href: "/projects" },
  { id: "speaking", label: "speaking.md", href: "/speaking" },
  { id: "blog", label: "blog.md", href: "/blog" },
];

const quickLinks = [
  { label: "About", href: "/", icon: UserRound },
  { label: "Projects", href: "/projects", icon: BriefcaseBusiness },
  { label: "Speaking", href: "/speaking", icon: Mic2 },
  { label: "Writing", href: "/blog", icon: BookOpenText },
];

export function CodeLine({
  number,
  children,
}: {
  number: number;
  children?: ReactNode;
}) {
  return (
    <div className="code-line">
      <span className="line-number" aria-hidden="true">
        {number}
      </span>
      <code>{children}</code>
    </div>
  );
}

export function PortfolioShell({
  activeTab,
  children,
}: {
  activeTab: PortfolioTab;
  children: ReactNode;
}) {
  return (
    <>
      <main className="portfolio-window">
        <aside className="profile-panel">
          <div className="profile-content">
            <div className="profile-heading">
              <div className="profile-avatar" aria-hidden="true">
                PV
              </div>
              <div className="profile-details">
                <h1>Pratyush Verma</h1>
                <p className="profile-role">Student &amp; developer</p>
                <p className="profile-location">
                  <MapPin size={15} aria-hidden="true" />
                  <span>Gorakhpur, India</span>
                </p>
              </div>
            </div>

            <p className="profile-bio">
              I&apos;m a student from Gorakhpur, India, exploring web development
              and building projects as I learn. This is my corner of the
              internet to share what I&apos;m working on.
            </p>
          </div>

          <div className="profile-tools">
            <div className="terminal-card" aria-label="Portfolio status">
              <p className="terminal-command">
                <span>$</span> npx pratyush-portfolio
              </p>
              <p className="terminal-output">
                Initializing...
                <br />
                Portfolio loaded.
                <br />
                Ready to build.
              </p>
              <span className="terminal-cursor" aria-hidden="true" />
            </div>

            <nav className="quick-links" aria-label="Quick navigation">
              {quickLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  className="icon-link"
                  href={href}
                  key={label}
                  aria-label={label}
                  title={label}
                >
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <section className="editor-panel" aria-label="Portfolio">
          <nav className="editor-tabs" aria-label="Portfolio pages">
            {tabs.map((tab) => (
              <Link
                className={`editor-tab${activeTab === tab.id ? " active" : ""}`}
                href={tab.href}
                key={tab.id}
                aria-current={activeTab === tab.id ? "page" : undefined}
              >
                <span className="file-mark" aria-hidden="true" />
                <span>{tab.label}</span>
              </Link>
            ))}
          </nav>
          <div className="editor-content">{children}</div>
        </section>
      </main>

      <footer className="site-footer">
        Built with <span>Next.js</span> by <span>Pratyush Verma</span>
      </footer>
    </>
  );
}
