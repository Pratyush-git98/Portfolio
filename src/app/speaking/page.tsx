import { CodeLine, PortfolioShell } from "@/components/portfolio-shell";

export default function SpeakingPage() {
  return (
    <PortfolioShell activeTab="speaking">
      <div className="code-document">
        <CodeLine number={1}>
          <span className="syntax-keyword">export const</span>{" "}
          <span className="syntax-variable">speaking</span>{" "}
          <span className="syntax-punctuation">= {"{"}</span>
        </CodeLine>
        <CodeLine number={2}>
          {"  "}
          <span className="syntax-property">status</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-string">&quot;No events listed yet&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={3}>
          {"  "}
          <span className="syntax-property">topics</span>
          <span className="syntax-punctuation">: [</span>
        </CodeLine>
        <CodeLine number={4}>
          {"    "}
          <span className="syntax-string">&quot;What I&apos;m learning&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={5}>
          {"    "}
          <span className="syntax-string">&quot;Projects I&apos;ve built&quot;</span>
        </CodeLine>
        <CodeLine number={6}>
          {"  "}
          <span className="syntax-punctuation">],</span>
        </CodeLine>
        <CodeLine number={7}>
          {"  "}
          <span className="syntax-property">events</span>
          <span className="syntax-punctuation">: []</span>
        </CodeLine>
        <CodeLine number={8}>
          <span className="syntax-punctuation">{"};"}</span>
        </CodeLine>
        <CodeLine number={9} />
        <CodeLine number={10}>
          <span className="syntax-comment">
            {"// No talks listed yet. I'll add them here when there are."}
          </span>
        </CodeLine>
      </div>
    </PortfolioShell>
  );
}
