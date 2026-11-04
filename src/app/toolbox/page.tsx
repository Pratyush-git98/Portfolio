import { CodeLine, PortfolioShell } from "@/components/portfolio-shell";

export default function ToolboxPage() {
  return (
    <PortfolioShell activeTab="toolbox">
      <div className="code-document">
        <CodeLine number={1}>
          <span className="syntax-keyword">type</span>{" "}
          <span className="syntax-type">SkillCategory</span>{" "}
          <span className="syntax-punctuation">= {"{"}</span>
        </CodeLine>
        <CodeLine number={2}>
          {"  "}
          <span className="syntax-property">languages</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string[]</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={3}>
          {"  "}
          <span className="syntax-property">frameworks/libraries</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string[]</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={4}>
          {"  "}
          <span className="syntax-property">databases</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string[]</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={5}>
          {"  "}
          <span className="syntax-property">tools</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string[]</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={6}>
          <span className="syntax-punctuation">{"};"}</span>
        </CodeLine>
        <CodeLine number={7} />
        <CodeLine number={8}>
          <span className="syntax-keyword">const</span>{" "}
          <span className="syntax-variable">toolbox</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">SkillCategory[]</span>
          <span className="syntax-punctuation"> = [</span>
        </CodeLine>
        <CodeLine number={9}>
          {"  "}
          <span className="syntax-property">languages</span>
          <span className="syntax-punctuation">: [</span>
        </CodeLine>
        <CodeLine number={10}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Javascript/Typescript&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={11}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Python&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={12}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;C&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={13}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;C++&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={14}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Java&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={15}>
          {"  "}
          <span className="syntax-punctuation">],</span>
        </CodeLine>
        <CodeLine number={16}>
          {"  "}
          <span className="syntax-property">frameworks/libraries</span>
          <span className="syntax-punctuation">: [</span>
        </CodeLine>
        <CodeLine number={17}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;React.js&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={18}>

          {"  "}{"  "}
          <span className="syntax-string">&quot;Node.js&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={19}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Express.js&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={20}>

          {"  "}{"  "}
          <span className="syntax-string">&quot;Next.js&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={21}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Tailwind CSS&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={22}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Numpy&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={23}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Pandas&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={24}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Matplotlib&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={25}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Seaborn&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={26}>
          {"  "}
          <span className="syntax-punctuation">],</span>
        </CodeLine>
        <CodeLine number={27}>
          {"  "}
          <span className="syntax-property">databases</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-punctuation">[</span>
        </CodeLine>
        <CodeLine number={28}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;MongoDB&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={29}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;PostgreSQL&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={30}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;MySQL&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={31}>
          {"  "}
          <span className="syntax-punctuation">],</span>
        </CodeLine>
        <CodeLine number={32}>
          {"  "}
          <span className="syntax-property">tools</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-punctuation">[</span>
        </CodeLine>
        <CodeLine number={33}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Git/Github&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={34}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Docker&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={35}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Postman&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={36}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Vite&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={37}>
          {"  "}{"  "}
          <span className="syntax-string">&quot;Redux-toolkit&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={38}>{"  "}{"  "}
          <span className="syntax-string">&quot;Shadcn-UI&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={39}>{"  "}{"  "}
          <span className="syntax-string">&quot;Zod&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={40}>{"  "}{"  "}
          <span className="syntax-string">&quot;Vercel&quot;</span>
          <span className="syntax-punctuation">,</span>
        </CodeLine>
        <CodeLine number={41}>
          {"  "}
          <span className="syntax-punctuation">],</span>
        </CodeLine>
        <CodeLine number={42}>
          <span className="syntax-punctuation">];</span>
        </CodeLine>
      </div>
    </PortfolioShell>
  );
}
