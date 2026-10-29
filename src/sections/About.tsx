import Section from '../components/Section'
import { profile } from '../data/profile'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="prose">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  )
}
