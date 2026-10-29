import { profile } from '../data/profile'
import { isVisible } from '../data/nav'
import { RESUME_HREF } from '../router'

export default function Hero() {
  const info = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Birth', value: profile.birth },
  ].filter((i) => i.value)

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        {profile.photo && (
          <div className="hero-photo">
            <img src={profile.photo} alt={`${profile.name} 프로필 사진`} width={472} height={630} />
          </div>
        )}

        <div className="hero-text">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.name}</h1>

          {info.length > 0 && (
            <dl className="hero-info">
              {info.map((i) => (
                <div key={i.label} className="hero-info-row">
                  <dt>{i.label}</dt>
                  <dd>{i.href ? <a href={i.href}>{i.value}</a> : i.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="hero-cta">
            <a href={RESUME_HREF} className="btn btn-primary">이력서 보기</a>
            {isVisible.projects && (
              <a href="#projects" className="btn btn-ghost">프로젝트 보기</a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
