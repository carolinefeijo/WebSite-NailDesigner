import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Serviços } from './pages/Serviços'
import { QuemSou } from './pages/QuemSou'
import { Localização } from './pages/Localização'
import { Contato } from './pages/Contato'

import { NavBar } from './components/NavBar'

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Serviços />} />
          <Route exact path="/aboutMe" element={<QuemSou />} />
          <Route exact path="/localization" element={<Localização />} />
          <Route exact path="/contact" element={<Contato />} />
        </Routes>
      </Router>
    </div>
  )
}
