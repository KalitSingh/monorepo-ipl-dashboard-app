import { Component } from "react"

import "./index.css"

class Header extends Component {

    render(){
        return(
            <>
                <header className="header-container">
                <ul className="nav-items-container">
                    <li>
                        <nav>Home</nav> 
                    </li>
                    <li>
                        <nav>About Us</nav>
                    </li>
                    <li>
                        <nav>Contact</nav>
                    </li>
                </ul>
                </header>
            </>
        )
    }
}

export default Header