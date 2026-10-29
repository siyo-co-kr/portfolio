import { useEffect, useState } from 'react'

/**
 * GitHub Pages(정적 호스팅)용 해시 라우팅
 *  - #/resume         → 이력서 페이지
 *  - #/projects/<id> → 프로젝트 상세 페이지
 *  - 그 외(#about, #projects …) → 홈 (해당 섹션으로 스크롤)
 */
export type Route = { name: 'home' } | { name: 'resume' } | { name: 'project'; id: string }

export const RESUME_HREF = '#/resume'

export function parseHash(hash: string): Route {
  const m = hash.match(/^#\/projects\/([^/?#]+)/)
  if (m) return { name: 'project', id: decodeURIComponent(m[1]) }
  if (/^#\/resume\/?$/.test(hash)) return { name: 'resume' }
  return { name: 'home' }
}

export function projectHref(id: string) {
  return `#/projects/${encodeURIComponent(id)}`
}

export function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}
