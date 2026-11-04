import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import type { ReactNode } from "react";
import Image from "next/image";
import profilePic from '../public/profile.jpg';

export type PortfolioTab = "about" | "projects" | "toolbox" | "experience";

const tabs: { id: PortfolioTab; label: string; href: string }[] = [
  { id: "about", label: "about.ts", href: "/" },
  { id: "projects", label: "projects.md", href: "/projects" },
  { id: "toolbox", label: "toolbox.md", href: "/toolbox" },
  { id: "experience", label: "experience.md", href: "/experience" },
];

const quickLinks = [
  {
    label: "GitHub",
    href: "https://github.com/pratyush-git98",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pratyush-verma-314713332/",
    icon: FaLinkedin,
  },
  {
    label: "X",
    href: "https://x.com/PratyushVe5877",
    icon: FaSquareXTwitter
  }
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
                <Image src={profilePic} alt="pfp" width={100} height={100} />
              </div>
              <div className="profile-details">
                <h1>Pratyush Verma</h1>
                <p className="profile-role">Student &amp; developer</p>
                <p className="profile-location">
                  <FaMapMarkerAlt size={15} aria-hidden="true" />
                  <span>Gorakhpur, India</span>
                </p>
              </div>
            </div>

            <p className="profile-bio">I&apos;m a student exploring web development, machine learning and building projects as I learn. Currently building full-stack web applications, learning new tools for development and learning about machine learning and AI.
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

            <nav className="quick-links" aria-label="Social links">
              {quickLinks.map(({ label, href, icon: Icon }) => (
                <a
                  className="icon-link"
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </a>
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
