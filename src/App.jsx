import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LenisProvider from './components/LenisProvider'
import GlobalLoader from './components/GlobalLoader'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import TechnologyPage from './pages/TechnologyPage'
import SolutionsPage from './pages/SolutionsPage'
import NotFoundPage from './pages/NotFoundPage'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <GlobalLoader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </LenisProvider>
    </BrowserRouter>
  )
}
