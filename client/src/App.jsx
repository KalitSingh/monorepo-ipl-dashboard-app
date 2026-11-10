import {Route, Switch} from "react-router-dom"

import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"
import TeamDetails from "./pages/TeamDetails"
import Notfound from "./components/Notfound"


import './App.css'

function App() {


  return (
    <>
    <div className="main-bg-container">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/team/details/:id" component={TeamDetails} />
        <Route component={Notfound} />
      </Switch>


      {/* <Home /> */}
        {/* <TeamDetails /> */}
      {/* <About />
      <Contact /> */}
    </div>
    </>
  )
}

export default App
