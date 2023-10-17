import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import logo from '../public/logo.svg'
// import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
// import About from './components/About'

const App = ()=> {  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <StarsCanvas/>
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App
