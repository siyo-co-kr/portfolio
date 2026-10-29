import { profile } from './profile'
import { skills } from './skills'
import { projects } from './projects'
import { experience } from './experience'

export type SectionId = 'about' | 'skills' | 'projects' | 'experience' | 'contact'

/** 데이터가 비어 있는 섹션은 페이지와 메뉴에서 숨김 */
export const isVisible: Record<SectionId, boolean> = {
  about: profile.about.length > 0,
  skills: skills.length > 0,
  projects: projects.length > 0,
  experience: experience.length > 0,
  contact: Boolean(profile.email) || profile.links.length > 0,
}

const allItems: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const navItems = allItems.filter((item) => isVisible[item.id])
