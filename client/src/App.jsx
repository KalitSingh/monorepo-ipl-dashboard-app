import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"
import TeamDetails from "./pages/TeamDetails"


import './App.css'

function App() {


  return (
    <>
    <div className="main-bg-container">
      <Header/>
      {/* <Home /> */}
        <TeamDetails />
      {/* <About />
      <Contact /> */}
    </div>
    </>
  )
}

export default App
