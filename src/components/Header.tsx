import { useState } from 'react'
import { navItems } from '../data/nav'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import type { Theme } from '../hooks/useTheme'

const ids = navItems.map((n) => n.id)

interface Props {
  theme: Theme
  onToggleTheme: () => void
  /** 페이지가 바뀌면 섹션 감지를 다시 연결 */
  routeKey: string
}

export default function Header({ theme, onToggleTheme, routeKey }: Props) {
  const isHome = routeKey === 'home'
  const active = useActiveSection(ids, routeKey)
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={isHome && active === item.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="메뉴 열기"
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
