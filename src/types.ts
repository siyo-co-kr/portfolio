export interface Link {
  label: string
  href: string
}

export interface Profile {
  name: string
  role: string
  tagline?: string
  /** public/ 기준 경로 */
  photo?: string
  /** 예: 1999.01.01 */
  birth?: string
  about: string[]
  email: string
  links: Link[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Project {
  /** URL과 Markdown 파일 이름으로 사용: src/content/projects/<id>.md */
  id: string
  title: string
  period?: string
  /** 예: 개인 프로젝트, 팀 프로젝트(4인), 실무 */
  type?: string
  /** 예: 기획·설계, 백엔드 개발 */
  role?: string
  tags: string[]
  /** 목록 카드에 보이는 요약 */
  summary: string
  links?: Link[]
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string[]
}
