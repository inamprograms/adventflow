import ReactMarkdown from "react-markdown";

const MarkdownViewer = ({ content }: { content: string }) => {
  return (
    <div className="bg-[#0f172a]/50 border border-white/10 rounded-xl p-4 text-sm leading-6">
      {content ? (
        <ReactMarkdown>{content}</ReactMarkdown>
      ) : (
        <p className="text-subtle">Puzzle content will appear here after fetching.</p>
      )}
    </div>
  );
};

export default MarkdownViewer;
