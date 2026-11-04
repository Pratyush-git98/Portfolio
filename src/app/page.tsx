import { CodeLine, PortfolioShell } from "@/components/portfolio-shell";

export default function HomePage() {
  return (
    <PortfolioShell activeTab="about">
      <div className="code-document">
        <CodeLine number={1}>
          <span className="syntax-keyword">interface</span>{" "}
          <span className="syntax-type">Developer</span>{" "}
          <span className="syntax-punctuation">{"{"}</span>
        </CodeLine>
        <CodeLine number={2}>
          {"  "}
          <span className="syntax-property">name</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={3}>
          {"  "}
          <span className="syntax-property">interests</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string[]</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={4}>
          <span className="syntax-punctuation">{"}"}</span>
        </CodeLine>
        <CodeLine number={5} />
        <CodeLine number={6}>
          <span className="syntax-comment">{"// A little about me"}</span>
        </CodeLine>
        <CodeLine number={7}>
          <span className="syntax-keyword">const</span>{" "}
          <span className="syntax-variable">pratyush</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">Developer</span>
          <span className="syntax-punctuation"> = {"{"}</span>
        </CodeLine>
        <CodeLine number={8}>
          {"  "}
          <span className="syntax-property">name</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-string">&quot;Pratyush Verma 😎&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={9}>
          {"  "}
          <span className="syntax-property">interests</span>
          <span className="syntax-punctuation">: [</span>
        </CodeLine>
        <CodeLine number={10}>
          {"    "}
          <span className="syntax-string">&quot;Music 🎵&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={11}>
          {"    "}
          <span className="syntax-string">&quot;Games 🎮&quot;</span>
        </CodeLine>
        <CodeLine number={12}>
          {"    "}
          <span className="syntax-string">&quot;Drawing 🎨&quot;</span>
        </CodeLine>
        <CodeLine number={13}>
          {"    "}
          <span className="syntax-string">&quot;Learning new skills 📚&quot;</span>
        </CodeLine>
        <CodeLine number={14}>
          {"  "}
          <span className="syntax-punctuation">]</span>
        </CodeLine>
        <CodeLine number={15}>
          <span className="syntax-punctuation">{"};"}</span>
        </CodeLine>
      </div>
    </PortfolioShell>
  );
}
