import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Tech from "./components/Tech"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="relative h-full w-full bg-slate-900"><div className="absolute inset-0 bg-slate-900 bg-[size:20px_20px] opacity-20 blur-[100px]"></div></div>
       </div>
       <div className="container mx-auto px-8">

       <Navbar/>
       <Hero/>
       <Projects/>
       <Tech/>
       <Footer/>
       </div>
    </div>
  )
}

export default App
