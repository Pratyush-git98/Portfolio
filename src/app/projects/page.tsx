import { CodeLine, PortfolioShell } from "@/components/portfolio-shell";

export default function ProjectsPage() {
  return (
    <PortfolioShell activeTab="projects">
      <div className="code-document">
        <CodeLine number={1}>
          <span className="syntax-comment"># Things I&apos;m building</span>
        </CodeLine>
        <CodeLine number={2} />
        <CodeLine number={3}>
          <span className="syntax-keyword">const</span>{" "}
          <span className="syntax-variable">projects</span>{" "}
          <span className="syntax-punctuation">= [</span>
        </CodeLine>
        <CodeLine number={4}>
          {"  "}
          <span className="syntax-punctuation">{"{"}</span>
        </CodeLine>
        <CodeLine number={5}>
          {"    "}
          <span className="syntax-property">name</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-string">&quot;My portfolio&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={6}>
          {"    "}
          <span className="syntax-property">description</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-string">
            &quot;A home for my work and experiments.&quot;
          </span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={7}>
          {"    "}
          <span className="syntax-property">stack</span>
          <span className="syntax-punctuation">: [</span>
          <span className="syntax-string">&quot;Next.js&quot;</span>
          <span className="syntax-punctuation">, </span>
          <span className="syntax-string">&quot;TypeScript&quot;</span>
          <span className="syntax-punctuation">],</span>
        </CodeLine>
        <CodeLine number={8}>
          {"    "}
          <span className="syntax-property">status</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-string">&quot;In progress&quot;</span>
        </CodeLine>
        <CodeLine number={9}>
          {"  "}
          <span className="syntax-punctuation">{"}"}</span>
        </CodeLine>
        <CodeLine number={10}>
          <span className="syntax-punctuation">];</span>
        </CodeLine>
        <CodeLine number={11} />
        <CodeLine number={12}>
          <span className="syntax-comment">
            {"// More projects will land here as I build them."}
          </span>
        </CodeLine>
        <CodeLine number={13}>
          <span className="syntax-comment">{"// Check back soon for updates."}</span>
        </CodeLine>
      </div>
    </PortfolioShell>
  );
}
