import Section from '../components/Section'
import { projects } from '../data/projects'
import { projectHref } from '../router'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="project-list">
        {projects.map((p) => (
          <a key={p.id} href={projectHref(p.id)} className="card project">
            <div className="project-meta">
              <ul className="chips">
                {p.tags.map((t) => (
                  <li key={t} className="chip chip-sm">{t}</li>
                ))}
              </ul>
              {p.period && <span>{p.period}</span>}
            </div>
            <h3 className="card-title">{p.title}</h3>
            <p className="muted">{p.summary}</p>
            <span className="link-btn project-more">자세히 보기 →</span>
          </a>
        ))}
      </div>
    </Section>
  )
}
