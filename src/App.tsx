import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Index from './pages/Index'
import About from './pages/About'
import Certs from './pages/Certs'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Experience from './pages/Experience'
import Education from './pages/Education'

function App() {
    document.body.style.backgroundColor = "#1e1e2e";
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Index />} /> 
                        <Route path="about" element={<About />} /> 
                        <Route path="certs" element={<Certs />} /> 
                        <Route path="contact" element={<Contact />} /> 
                        <Route path="certs" element={<Certs />} /> 
                        <Route path="education" element={<Education />} /> 
                        <Route path="portfolio" element={<Portfolio />} /> 
                        <Route path="experience" element={<Experience />} /> 
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
