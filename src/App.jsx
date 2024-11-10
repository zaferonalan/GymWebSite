import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavigationBar from "./components/NavigationBar/NavigationBar"
import Pricing from "./components/Pricing"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"


const App = () => {
  return (
    <>
      <NavigationBar/>
      <Hero/>
      <About/>
      <Services/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App