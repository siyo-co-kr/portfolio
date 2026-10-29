import { useEffect, useLayoutEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Resume from './pages/Resume'
import { useTheme } from './hooks/useTheme'
import { parseHash, useHash } from './router'
import { profile } from './data/profile'

export default function App() {
  const { theme, toggle } = useTheme()
  const hash = useHash()
  const route = parseHash(hash)
  const routeKey = route.name === 'project' ? `project:${route.id}` : route.name

  // 페이지 전환·섹션 이동 시 스크롤 위치 맞추기
  useLayoutEffect(() => {
    if (route.name !== 'home') {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    const target = hash.length > 1 ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey])

  useEffect(() => {
    if (route.name === 'home') document.title = `${profile.name} | 포트폴리오`
  }, [route.name])

  return (
    <>
      <Header theme={theme} onToggleTheme={toggle} routeKey={routeKey} />
      <main>
        {route.name === 'project' ? (
          <ProjectDetail id={route.id} />
        ) : route.name === 'resume' ? (
          <Resume />
        ) : (
          <Home />
        )}
      </main>
      <Footer />
    </>
  )
}
