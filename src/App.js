import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Team from './components/Team'
import Services from './components/Services'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Header from './components/Header'
import './App.css'

const App = () => {
  return (
    <div className="whole-container">
   <Router>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Team />
      <Services />
      <Portfolio />
      <Contact />
      <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/service' component={Services} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
      </Routes>
   </Router>
   </div>
  )
}

export default App
