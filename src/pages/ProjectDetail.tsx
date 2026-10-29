import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { projects } from '../data/projects'
import { profile } from '../data/profile'
import { getProjectContent } from '../content/projectContent'
import { projectHref } from '../router'

interface MdSection {
  title: string
  body: string
}

/** Markdown을 "## 제목" 단위로 나눔 (코드 블록 안의 ##는 무시) */
function splitSections(md: string) {
  const intro: string[] = []
  const sections: { title: string; lines: string[] }[] = []
  let inCode = false
  for (const line of md.split(/\r?\n/)) {
    if (line.trimStart().startsWith('```')) inCode = !inCode
    const m = !inCode && line.match(/^##\s+(.+?)\s*$/)
    if (m) sections.push({ title: m[1], lines: [] })
    else (sections.length ? sections[sections.length - 1].lines : intro).push(line)
  }
  return {
    intro: intro.join('\n').trim(),
    sections: sections.map<MdSection>((s) => ({ title: s.title, body: s.lines.join('\n').trim() })),
  }
}

function Md({ children }: { children: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  )
}

export default function ProjectDetail({ id }: { id: string }) {
  const index = projects.findIndex((p) => p.id === id)
  const project = projects[index]
  const content = getProjectContent(id) ?? ''

  useEffect(() => {
    document.title = project ? `${project.title} | ${profile.name}` : `${profile.name} | 포트폴리오`
  }, [project])

  if (!project) {
    return (
      <div className="container resume">
        <div className="resume-toolbar">
          <a href="#projects" className="back-link">← 프로젝트 목록</a>
        </div>
        <div className="resume-sheet">
          <h1 className="p-title">프로젝트를 찾을 수 없습니다.</h1>
        </div>
      </div>
    )
  }

  const { intro, sections } = splitSections(content)
  const prev = projects[index - 1]
  const next = projects[index + 1]

  const meta = [
    { label: '기간', value: project.period },
    { label: '구분', value: project.type },
    { label: '역할', value: project.role },
  ].filter((m) => m.value)

  return (
    <div className="container resume">
      <div className="resume-toolbar">
        <a href="#projects" className="back-link">← 프로젝트 목록</a>
        <span className="p-count">
          {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
      </div>

      <article className="resume-sheet">
        <header className="p-header">
          <p className="eyebrow">Project {String(index + 1).padStart(2, '0')}</p>
          <h1 className="p-title">{project.title}</h1>
          <p className="p-summary">{project.summary}</p>

          <dl className="p-meta">
            {meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
            <div className="p-meta-wide">
              <dt>키워드</dt>
              <dd>
                <ul className="chips">
                  {project.tags.map((t) => <li key={t} className="chip chip-sm">{t}</li>)}
                </ul>
              </dd>
            </div>
          </dl>

          {project.links && project.links.length > 0 && (
            <div className="detail-links">
              {project.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </header>

        {intro && (
          <section className="r-block p-intro">
            <div className="r-content"><Md>{intro}</Md></div>
          </section>
        )}

        {sections.map((s, i) => (
          <section key={s.title + i} className="r-block">
            <h2 className="r-label">
              <small>{String(i + 1).padStart(2, '0')}</small>
              <span>{s.title}</span>
            </h2>
            <div className="r-content"><Md>{s.body}</Md></div>
          </section>
        ))}

        {!intro && sections.length === 0 && (
          <section className="r-block p-intro">
            <p className="muted">아직 작성된 내용이 없습니다.</p>
          </section>
        )}
      </article>

      <nav className="detail-pager" aria-label="다른 프로젝트">
        {prev ? (
          <a href={projectHref(prev.id)} className="pager-link">
            <span className="muted">← 이전 프로젝트</span>
            <strong>{prev.title}</strong>
          </a>
        ) : <span />}
        {next && (
          <a href={projectHref(next.id)} className="pager-link pager-next">
            <span className="muted">다음 프로젝트 →</span>
            <strong>{next.title}</strong>
          </a>
        )}
      </nav>
    </div>
  )
}
