import React, { Component } from "react"
import "./Home.css"
import arrowPicture from "../Images/arrow.png"
import team from "../Images/team.jpg"
import bedroomImg from "../Images/bedroom.jpg"
import bathroomImg from "../Images/bathroom.jpg"
import mobileHomeImg from "../Images/mobile-home.jpg"
import { Link } from "react-router-dom"
import { Link as Navigate, animateScroll as scroll } from "react-scroll";

class Home extends Component {
    render() {
        return (
            <div id="home">
                <div className="first-page">
                    <div className="background-image"></div>
                    <img id ="mobileHomeImg" src = {mobileHomeImg}/>
                    <div className="home-page-content">
                        <div>
                            <h1>LOMA SIERRA</h1>
                            <h3>Home Textile Products</h3>
                        </div>
                        <Navigate
                            activeClass="active"
                            to="second-page"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        ><img id="caret" src={arrowPicture} /></Navigate>
                    </div>
                </div>
                
                <div className = "second-page">
                    <div className="container" id="company-info">
                        <div className="row" id="about-us">
                            <div className="col-lg-6 grid z-inx">
                                <h2 >About us </h2>
                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <img className="col-lg-6 grid" src={team}></img>
                        </div>




                        <div id="collection" >
                            <h1 id ="title-collection">Collections</h1>

                            <div className="row">
                                <div className="col-lg-6 grid card" id="bed-col">
                                    <Link to="/bedroom-collection" >
                                        <img className="img-fluid" src={bedroomImg} alt="Avatar" />
                                        <div className="overlay img-fluid">
                                            <div className="text">Bedroom Collection</div>
                                        </div>
                                    </Link>
                                </div>
                              
                                <div className="col-lg-6 grid card">
                                    <Link to="/bathroom-collection">
                                        <img className="img-fluid" src={bathroomImg} alt="Avatar" />
                                        <div className="overlay img-fluid">
                                            <div className="text">Bathroom Collection</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div >


        )
    }
}
export default Home