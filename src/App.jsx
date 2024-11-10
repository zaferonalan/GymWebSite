import About from "./components/About"
import Hero from "./components/Hero"
import NavigationBar from "./components/NavigationBar/NavigationBar"
import Pricing from "./components/Pricing"
import Services from "./components/Services"


const App = () => {
  return (
    <>
      <NavigationBar/>
      <Hero/>
      <About/>
      <Services/>
      <Pricing/>
    </>
  )
}

export default App