import React, { Component } from "react"
import "./Home.css"
import picture from "../Images/arrow.png"
import team from "../Images/team.jpg"
import bedroomImg from "../Images/bedroom.jpg"
import bathroomImg from "../Images/bathroom.jpg"
import { Link } from "react-router-dom"

class Home extends Component {
    render() {
        return (
            <div id="home">
                <div className="landing-page">
                    <div className="background-image"></div>
                    <div className="home-page-content">
                        <div>
                            <h1>LOMA SIERRA</h1>
                            <h3>Home Textile Products</h3>
                        </div>
                        <img src={picture} />
                    </div>
                </div>

                <div className="container" id="company-info">
                    <div className="row" id = "about-us">
                        <div className="col-lg-6 grid">
                            <h2 >About us </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <img className="col-lg-6 grid" src={team}></img>
                    </div>


                 
                  
                        <div >
                            <h1 className="col-lg-12 grid">Collections</h1>

                            <div className="row">
                                <div className="col-sm-6 grid ">
                                    <Link to="/bedroom-collection">
                                        <img src={bedroomImg} />
                                    </Link>
                                    <h2>Bedroom Collections</h2>
                                </div>
                                <div className="col-lg-6 grid thumbnail">
                                    <Link to="/bathroom-collection">
                                        <img src={bathroomImg} />
                                    </Link>
                                    <h2>Bathroom Collections</h2>
                                </div>
                            </div>

                            

                        </div>



                   
                </div>
            </div >

           
        )
    }
}
export default Home