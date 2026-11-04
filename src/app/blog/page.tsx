import { CodeLine, PortfolioShell } from "@/components/portfolio-shell";

export default function BlogPage() {
  return (
    <PortfolioShell activeTab="blog">
      <div className="code-document">
        <CodeLine number={1}>
          <span className="syntax-keyword">type</span>{" "}
          <span className="syntax-type">Post</span>{" "}
          <span className="syntax-punctuation">= {"{"}</span>
        </CodeLine>
        <CodeLine number={2}>
          {"  "}
          <span className="syntax-property">title</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={3}>
          {"  "}
          <span className="syntax-property">date</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={4}>
          {"  "}
          <span className="syntax-property">content</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">string</span>
          <span className="syntax-punctuation">;</span>
        </CodeLine>
        <CodeLine number={5}>
          <span className="syntax-punctuation">{"};"}</span>
        </CodeLine>
        <CodeLine number={6} />
        <CodeLine number={7}>
          <span className="syntax-keyword">const</span>{" "}
          <span className="syntax-variable">posts</span>
          <span className="syntax-punctuation">: </span>
          <span className="syntax-type">Post[]</span>
          <span className="syntax-punctuation"> = [];</span>
        </CodeLine>
        <CodeLine number={8} />
        <CodeLine number={9}>
          <span className="syntax-comment">
            {"// Notes, tutorials, and ideas will show up here."}
          </span>
        </CodeLine>
        <CodeLine number={10}>
          <span className="syntax-comment">
            {"// The first post is still being written."}
          </span>
        </CodeLine>
      </div>
    </PortfolioShell>
  );
}
