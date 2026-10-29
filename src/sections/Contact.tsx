import Section from '../components/Section'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact">
        {profile.email && (
          <a href={`mailto:${profile.email}`} className="contact-email">{profile.email}</a>
        )}
        {profile.links.length > 0 && (
        <ul className="contact-links">
          {profile.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
            </li>
          ))}
        </ul>
        )}
      </div>
    </Section>
  )
}
