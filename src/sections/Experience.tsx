import Section from '../components/Section'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.company + e.period} className="timeline-item">
            <div className="timeline-period">{e.period}</div>
            <div>
              <h3 className="card-title">{e.company}</h3>
              <p className="muted">{e.role}</p>
              <ul className="bullets">
                {e.description.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
