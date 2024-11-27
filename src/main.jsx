import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import NavBar from './components/nav.jsx'
import Hero from './components/herosection.jsx'
import Linksection from './components/linksection.jsx'
import Features from './components/features.jsx'
import PreNav from './components/preNav.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <Linksection />
    <Features />
    <PreNav/>
    <Footer />
  </StrictMode>
)
