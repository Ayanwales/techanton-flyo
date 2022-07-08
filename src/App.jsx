import Access from "./components/Access"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Productive from "./components/Productive"


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Productive/>
      <Access/>
      <Footer/>
    </div>
  )
}

export default App
