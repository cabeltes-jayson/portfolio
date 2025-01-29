import { useState } from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Awards from './components/Awards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <Banner />
        <AboutMe />
        <Projects />
        <Awards />
      </div>
    </>
  )
}

export default App
