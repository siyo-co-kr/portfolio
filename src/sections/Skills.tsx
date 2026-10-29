import Section from '../components/Section'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skill-grid">
        {skills.map((g) => (
          <div key={g.category} className="card">
            <h3 className="card-title">{g.category}</h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s} className="chip">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
