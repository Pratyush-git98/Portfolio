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
          <span className="syntax-string">&quot;Pratyush Verma&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={9}>
          {"  "}
          <span className="syntax-property">interests</span>
          <span className="syntax-punctuation">: [</span>
        </CodeLine>
        <CodeLine number={10}>
          {"    "}
          <span className="syntax-string">&quot;Web development&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={11}>
          {"    "}
          <span className="syntax-string">&quot;Learning by building&quot;</span>
        </CodeLine>
        <CodeLine number={12}>
          {"  "}
          <span className="syntax-punctuation">]</span>
        </CodeLine>
        <CodeLine number={13}>
          <span className="syntax-punctuation">{"};"}</span>
        </CodeLine>
        <CodeLine number={14} />
        <CodeLine number={15}>
          <span className="syntax-comment">
            {"// Tools behind this portfolio"}
          </span>
        </CodeLine>
        <CodeLine number={16}>
          <span className="syntax-keyword">const</span>{" "}
          <span className="syntax-variable">toolkit</span>
          <span className="syntax-punctuation"> = {"{"}</span>
        </CodeLine>
        <CodeLine number={17}>
          {"  "}
          <span className="syntax-property">framework</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-string">&quot;Next.js&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={18}>
          {"  "}
          <span className="syntax-property">language</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-string">&quot;TypeScript&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={19}>
          {"  "}
          <span className="syntax-property">ui</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-string">&quot;React&quot;</span>
        </CodeLine>
        <CodeLine number={20}>
          <span className="syntax-punctuation">{"};"}</span>
        </CodeLine>
        <CodeLine number={21} />
        <CodeLine number={22}>
          <span className="syntax-keyword">const</span>{" "}
          <span className="syntax-variable">currently</span>
          <span className="syntax-punctuation"> = [</span>
        </CodeLine>
        <CodeLine number={23}>
          {"  "}
          <span className="syntax-string">&quot;Learning frontend&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={24}>
          {"  "}
          <span className="syntax-string">&quot;Building personal projects&quot;</span>
        </CodeLine>
        <CodeLine number={25}>
          <span className="syntax-punctuation">];</span>
        </CodeLine>
        <CodeLine number={26} />
        <CodeLine number={27}>
          <span className="syntax-keyword">export default</span>{" "}
          <span className="syntax-variable">pratyush</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
      </div>
    </PortfolioShell>
  );
}
