import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Features from "./components/Features"
import Footer from "./components/Footer"
import HeroLightpass from "./components/Airpods/Airpods"
import Headphone from "./components/Headphone/Headphone"
import Vision from "./components/VisionPro/Vision"


const App=()=> {
  return (
   <main className="bg-black">
    <Navbar/>
    <Vision/>
    <Hero/>
    <Highlights/>
    <Headphone/>
    <HeroLightpass/>
    <Model/>
    <Features/>
    <Footer/>
    </main>
  )
}
export default App