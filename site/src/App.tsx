import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Analytes from './pages/Analytes'
import AnalytePage from './pages/AnalytePage'
import Methods from './pages/Methods'
import About from './pages/About'
import QuizIndex from './quiz/QuizIndex'
import QuizPage from './quiz/QuizPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const nav = ({ isActive }: { isActive: boolean }) => isActive ? 'text-berry font-medium' : 'text-ink-2 hover:text-berry'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <header className="sticky top-0 z-30 bg-blush border-b border-hairline">
        <div className="mx-auto max-w-6xl px-4 min-h-14 py-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <Link to="/" className="display text-base sm:text-xl font-medium tracking-tight text-berry whitespace-nowrap">Normal for whom?</Link>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-medium">
            <NavLink to="/" end className={nav}>Check a result</NavLink>
            <NavLink to="/analytes" className={nav}>The ranges</NavLink>
            <NavLink to="/quiz" className={nav}>Quiz</NavLink>
            <NavLink to="/methods" className={nav}>Methods</NavLink>
            <NavLink to="/about" className={nav}>About</NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytes" element={<Analytes />} />
          <Route path="/analyte/:id" element={<AnalytePage />} />
          <Route path="/quiz" element={<QuizIndex />} />
          <Route path="/quiz/:slug" element={<QuizPage />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="mt-20">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-ink-2 border-t border-hairline/70 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div><span className="display text-berry font-semibold">Normal for whom?</span> <span className="text-ink-3">A project of The Women's Health Record.</span></div>
          <div className="flex gap-4">
            <a href="https://lucylepoidevin.github.io/thewomenshealthrecord/" className="hover:text-berry" target="_blank" rel="noreferrer">The Women's Health Record</a>
            <Link to="/methods" className="hover:text-berry">Methods &amp; sources</Link>
            <Link to="/about" className="hover:text-berry">About</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
