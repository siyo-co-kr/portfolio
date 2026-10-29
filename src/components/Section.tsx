import type { ReactNode } from 'react'
import { navItems, type SectionId } from '../data/nav'

interface Props {
  id: SectionId
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: Props) {
  // 보이는 섹션 순서대로 01, 02 … 자동 번호
  const eyebrow = String(navItems.findIndex((n) => n.id === id) + 1).padStart(2, '0')
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}
