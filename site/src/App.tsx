import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Analytes from './pages/Analytes'
import AnalytePage from './pages/AnalytePage'
import Methods from './pages/Methods'
import About from './pages/About'
import NotFound from './pages/NotFound'
import QuizIndex from './quiz/QuizIndex'
import QuizPage from './quiz/QuizPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const nav = ({ isActive }: { isActive: boolean }) => `pb-0.5 border-b ${isActive ? 'text-ink border-ink' : 'text-ink-2 border-transparent hover:text-ink hover:border-rule'}`

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <header className="border-b border-rule">
        <div className="mx-auto max-w-5xl px-5 py-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5">
          <Link to="/" className="serif text-[1.15rem] font-semibold tracking-tight text-ink whitespace-nowrap">Normal for whom?</Link>
          <nav className="flex flex-wrap items-baseline gap-x-5 gap-y-1 text-[13.5px]" aria-label="Sections">
            <NavLink to="/" end className={nav}>Comparison tool</NavLink>
            <NavLink to="/analytes" className={nav}>Table of intervals</NavLink>
            <NavLink to="/quiz" className={nav}>Self-assessment</NavLink>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="mt-24 border-t border-rule">
        <div className="mx-auto max-w-5xl px-5 py-8 meta flex flex-col sm:flex-row gap-2 sm:items-baseline sm:justify-between">
          <p>Normal for whom? A companion to <a href="https://lucylepoidevin.github.io/thewomenshealthrecord/" className="link" target="_blank" rel="noreferrer">The Women's Health Record</a>. Not medical advice.</p>
          <p className="flex gap-5"><Link to="/methods" className="link">Methods</Link><Link to="/about" className="link">About</Link><a href="https://github.com/lucylepoidevin/thewomenshealthrecord2" className="link" target="_blank" rel="noreferrer">Source and data</a></p>
        </div>
      </footer>
    </div>
  )
}
