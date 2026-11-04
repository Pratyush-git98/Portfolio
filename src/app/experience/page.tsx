import { CodeLine, PortfolioShell } from "@/components/portfolio-shell";

export default function ExperiencePage() {
  return (
    <PortfolioShell activeTab="experience">
      <div className="code-document">
        <CodeLine number={1}>
          <span className="syntax-keyword">type</span>{" "}
          <span className="syntax-type">Education</span>{" "}
          <span className="syntax-punctuation">= {"{"}</span>
        </CodeLine>
        <CodeLine number={2}>
          {"  "}
          <span className="syntax-property">school</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={3}>
          {"  "}
          <span className="syntax-property">qualification</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={4}>
          <span className="syntax-punctuation">{"};"}</span>
        </CodeLine>
        <CodeLine number={5} />
        <CodeLine number={6}>
          <span className="syntax-keyword">type</span>{" "}
          <span className="syntax-type">Experience</span>{" "}
          <span className="syntax-punctuation">= {"{"}</span>
        </CodeLine>
        <CodeLine number={7}>
          {"  "}
          <span className="syntax-property">role</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={8}>
          {"  "}
          <span className="syntax-property">organization</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={9}>
          {"  "}
          <span className="syntax-property">years</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={10}>
          <span className="syntax-punctuation">{"};"}</span>
        </CodeLine>
        <CodeLine number={11} />
        <CodeLine number={12}>
          <span className="syntax-keyword">const</span>{" "}
          <span className="syntax-variable">education</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">Education[]</span>
          <span className="syntax-punctuation"> = [</span>
        </CodeLine>
        <CodeLine number={13} >
          {"  "}
          <span className="syntax-punctuation">{"{"}</span>
        </CodeLine>
        <CodeLine number={14} >
          {"    "}
          <span className="syntax-property">school</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-string">&quot;Divine Public School, Gorakhpur&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={15} >
          {"    "}
          <span className="syntax-property">qualification</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-string">&quot;BCA, Deen Dayal Upadhyay Gorakhpur University, Gorakhpur&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={16} >
          {"  "}
          <span className="syntax-punctuation">{"}"}</span>
        </CodeLine>
        <CodeLine number={17} >];</CodeLine>
        <CodeLine number={18} ></CodeLine>
        <CodeLine number={19}>
          <span className="syntax-keyword">const</span>{" "}
          <span className="syntax-variable">experience</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">Experience[]</span>
          <span className="syntax-punctuation"> = [];</span>
        </CodeLine>
      </div>
    </PortfolioShell>
  );
}
