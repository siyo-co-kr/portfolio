import { useEffect, useState } from 'react'

/** 화면에 보이는 섹션 id를 추적해 내비게이션 하이라이트에 사용 */
export function useActiveSection(ids: readonly string[], resetKey?: string) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    setActive('')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids, resetKey])

  return active
}
