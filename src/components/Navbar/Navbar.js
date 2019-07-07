import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./Navbar.css"




class Navbar extends Component {
    constructor() {
        super();
        this.state = {

            dropDownMenuStatus: ""

        }
    }
    showDropdownMenu = (event) => {
        event.preventDefault();
        this.setState({ dropDownMenuStatus: "drop-down-menu-open" }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }



    hideDropdownMenu = () => {
        this.setState({ dropDownMenuStatus: 'drop-down-menu-closed' }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        return (
           
            <header>
                <h2><a  id = "brand" href="/">Loma Sierra</a></h2>
                <button onClick={this.showDropdownMenu}  id="hamburger-icon">Menu &#9776;</button>
                <nav className={this.state.dropDownMenuStatus}>
                   
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

