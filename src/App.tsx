import './App.scss'

import Navbar from "./components/Navbar"
import Home from "./views/Home"
import About from "./views/About"
import Pricing from "./views/Pricing"
import Contact from "./views/Contact"

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Pricing/>
      <Contact/>
    </>
  )
}

export default App
