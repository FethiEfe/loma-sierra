import React, {Component} from "react"
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css"

class Navbar extends Component{
    render(){
        return(
            <header>
                <h2><a href="#">Loma Sierra</a></h2>
                <nav>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Home</Link>

                    <Link
                        activeClass="active"
                        to="collections"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Collections</Link>



                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >About Us</Link>

                    <Link
                        id = "Link"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Contact</Link>
                </nav>
            </header>
              
          
        )
    }
}
export default Navbar