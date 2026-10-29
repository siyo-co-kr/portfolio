import { Fragment, useEffect, type ReactNode } from 'react'
import { profile } from '../data/profile'
import { resume, type ResumeEntry } from '../data/resume'

/** "**굵게**" 표시만 처리하는 간단한 인라인 렌더러 */
function rich(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

function Block({ label, en, children }: { label: string; en: string; children: ReactNode }) {
  return (
    <section className="r-block">
      <h2 className="r-label">
        <span>{label}</span>
        <small>{en}</small>
      </h2>
      <div className="r-content">{children}</div>
    </section>
  )
}

function Entry({ e }: { e: ResumeEntry }) {
  return (
    <div className="r-entry">
      <div className="r-entry-head">
        <div>
          <h3>{e.title}</h3>
          {e.subtitle && <p className="r-sub">{e.subtitle}</p>}
        </div>
        <div className="r-period">
          <span>{e.period}</span>
          {e.note && <small>{e.note}</small>}
        </div>
      </div>
      {e.items && (
        <ul className="r-list">
          {e.items.map((it, i) => <li key={i}>{rich(it)}</li>)}
        </ul>
      )}
      {e.groups && (
        <div className="r-groups">
          {e.groups.map((g) => (
            <div key={g.title} className="r-group">
              <h4>{g.title}</h4>
              <ul className="r-list">
                {g.items.map((it, i) => <li key={i}>{rich(it)}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Resume() {
  useEffect(() => {
    document.title = `이력서 | ${profile.name}`
  }, [])

  return (
    <div className="container resume">
      <div className="resume-toolbar">
        <a href="#top" className="back-link">← 홈으로</a>
        <button className="btn btn-ghost btn-sm" onClick={() => window.print()}>
          PDF로 저장 / 인쇄
        </button>
      </div>

      <article className="resume-sheet">
        <header className="r-header">
          {profile.photo && (
            <img className="r-photo" src={profile.photo} alt={`${profile.name} 증명사진`} width={472} height={630} />
          )}
          <div className="r-id">
            <p className="eyebrow">{profile.role}</p>
            <h1>{profile.name}</h1>
            <p className="r-headline">{resume.headline}</p>
            <dl className="r-contact">
              <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
              {profile.birth && <div><dt>Birth</dt><dd>{profile.birth}</dd></div>}
            </dl>
          </div>
        </header>

        <Block label="기술 스택" en="Skills">
          <ul className="chips">
            {resume.skills.map((s) => <li key={s} className="chip">{s}</li>)}
          </ul>
        </Block>

        <Block label="경력" en="Experience">
          {resume.experience.map((e) => <Entry key={e.title} e={e} />)}
        </Block>

        <Block label="교육" en="Training">
          {resume.education.map((e) => <Entry key={e.title} e={e} />)}
        </Block>

        <Block label="학력" en="Education">
          {resume.schools.map((e) => <Entry key={e.title} e={e} />)}
        </Block>

        <Block label="자격 · 병역" en="Etc.">
          {resume.etc.map((e) => <Entry key={e.title} e={e} />)}
        </Block>

        <Block label="자기소개" en="About me">
          {resume.essays.map((es) => (
            <div key={es.title} className="r-essay">
              <p className="r-essay-tag">{es.title}</p>
              <h3>{es.headline}</h3>
              {es.paragraphs.map((p, i) => <p key={i}>{rich(p)}</p>)}
            </div>
          ))}
        </Block>
      </article>
    </div>
  )
}
