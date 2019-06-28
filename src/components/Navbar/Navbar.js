import React, {Component} from "react"
import { Link} from "react-router-dom";
import "./Navbar.css"

class Navbar extends Component{
    render(){
        return(
            <header>
                <h2><a href="#">Loma Sierra</a></h2>
                <nav>
                    <Link to = "/" >Home</Link>
                    <Link to = "/collection" >Collections</Link>
                    <Link to = "/about" >About Us</Link>
                    <Link to = "/contact" >Contact</Link>
                    
                </nav>
            </header>
              
          
        )
    }
}
export default Navbar