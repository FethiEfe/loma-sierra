import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./Navbar.css"
import { Icon } from 'react-icons-kit'
import {arrow_down} from 'react-icons-kit/ikons/arrow_down'



class Navbar extends Component {
    render() {
        return (
            <header>
            

                <h2><a href="/">Loma Sierra</a></h2>
                <nav>
                    <Link to = "/" >Home</Link>
                    <Link to = "/bathroom-collection" >Bathroom Collection</Link>
                    <Link to = "/bedroom-collection"  >Bedroom Collection</Link>
                    <Link to = "/about" >About Us</Link>
                    <Link to = "/contact" >Contact</Link>
                    
                </nav> 
            </header>


        )
    }
}
export default Navbar