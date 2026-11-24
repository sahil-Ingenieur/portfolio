import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import PortfolioDashboard from './pages/projects/PortfolioDashboard'
import DesignSystem from './pages/projects/DesignSystem'
import SecureFlow from './pages/projects/SecureFlow'
import PortfolioCaseStudy from './pages/projects/PortfolioCaseStudy'


export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/portfolio-dashboard" element={<PortfolioDashboard />} />
          <Route path="/projects/design-system" element={<DesignSystem />} />
          <Route path="/projects/secure-flow" element={<SecureFlow />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/projects/portfolio-dashboard/case-study"
            element={<PortfolioCaseStudy />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}