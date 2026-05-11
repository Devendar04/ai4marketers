import { Routes, Route, useLocation } from 'react-router-dom'
import Nav          from './components/Nav'
import Footer       from './components/Footer'
import Home         from './pages/Home'
import PromptsPage  from './pages/PromptsPage'
import StackPage    from './pages/StackPage'
import AdminPrompts from './components/AdminPrompts'

export default function App() {
  const { pathname } = useLocation()
  const isAdmin = pathname === '/admin'

  return (
    <>
      {!isAdmin && <Nav />}
      <main className={
        isAdmin
          ? ""
          : "pt-[54px] pb-[60px] md:pt-[64px] md:pb-0"
      }>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/prompts" element={<PromptsPage />} />
          <Route path="/stack"   element={<StackPage />} />
          <Route path="/admin"   element={<AdminPrompts />} />
        </Routes>
        {!isAdmin && <Footer />}
      </main>
    </>
  )
}