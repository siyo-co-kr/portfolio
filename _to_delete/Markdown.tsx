import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Markdown({ content }: { content?: string }) {
  return (
    <div className="markdown">
      {content && content.trim() ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      ) : (
        <p className="muted">아직 작성된 내용이 없습니다.</p>
      )}
    </div>
  )
}
