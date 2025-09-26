import './App.scss'

import Navbar from "./components/Navbar"
import About from "./views/About"
import Pricing from "./views/Pricing"
import Contact from "./views/Contact"

const App = () => {
  return (
    <>
      <Navbar/>
      <About/>
      <Pricing/>
      <Contact/>
    </>
  )
}

export default App
