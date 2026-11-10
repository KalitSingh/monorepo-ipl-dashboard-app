import {Link} from "react-router-dom"
import { Component } from "react"

import "./index.css"

class Header extends Component {

    render(){
        return(
            <>
                <header className="header-container">
                <ul className="nav-items-container">
                    <li>
                        <Link to="/" className="nav-items-link">
                            <nav>Home</nav> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-items-link">
                            <nav>About Us</nav>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-items-link">
                            <nav>Contact Us</nav>
                        </Link>
                    </li>
                </ul>
                </header>
            </>
        )
    }
}

export default Header