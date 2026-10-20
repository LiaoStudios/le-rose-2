import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { MobileActionBar } from './components/layout/MobileActionBar'
import { Home } from './pages/Home'
import { MenuPage } from './pages/MenuPage'

// Each route element remounts on navigation, so a simple mount fade-in gives a
// page transition without depending on an exit animation to finish first
// (mode="wait" AnimatePresence can wedge if rAF is throttled mid-transition).
function Page({ children }: { children: ReactNode }) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.main>
  )
}

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Page><Home /></Page>} />
      <Route path="/menu" element={<Page><MenuPage /></Page>} />
      <Route path="*" element={<Page><Home /></Page>} />
    </Routes>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <MobileActionBar />
    </>
  )
}
