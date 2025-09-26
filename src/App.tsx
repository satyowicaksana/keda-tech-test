import './App.scss'

import Navbar from "./components/Navbar"
import About from "./views/About"
import Pricing from "./views/Pricing"

const App = () => {
  return (
    <>
      <Navbar/>
      <About/>
      <Pricing/>
    </>
  )
}

export default App
