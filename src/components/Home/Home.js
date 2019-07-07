import React, { Component } from "react"
import "./Home.css"
import arrowPicture from "../Images/arrow.png"
import team from "../Images/team.jpg"
import bedroomImg from "../Images/bedroom.jpg"
import bathroomImg from "../Images/bathroom.jpg"
import mobileHomeImg from "../Images/mobile-home.jpg"
import { Link } from "react-router-dom"
import { Link as Navigate } from "react-scroll";

class Home extends Component {
    render() {
        return (
            <div id="home">
                <div className="first-page">
                    <div className="background-image"></div>
                    <img alt="pic" id ="mobileHomeImg" src = {mobileHomeImg}/>
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
                        ><img alt="pic" id="caret" src={arrowPicture} /></Navigate>
                    </div>
                </div>
                
                <div className = "second-page">
                    <div className="container" id="company-info">
                        <div className="row" id="about-us">
                            <div className="col-12 col-lg-6 grid ">
                                <h2 >About us </h2>
                                <br/>
                                <p>Our company is interested in eCommerce while improving business experience. We manufacture home textile products according to customers requirements and offer them in many eCommerce platforms like Amazon, Ebay and Wayfair. The most important goal is manufacturing with best raw materials and keep customer contentment high for us.</p>
                            </div>
                            <img alt="pic" className="col-12 col-lg-6 grid" src={team}></img>
                    </div>




                        <div id="collection" >
                            <h1 id ="title-collection">Collections</h1>

                            <div className="row">
                                <div className="col-12 col-lg-6 card space-btw-img " >
                                    <Link to="/bedroom-collection" >
                                        <img  className="img-fluid" src={bedroomImg} alt="Avatar" />
                                        <div className="overlay img-fluid">
                                            <div className="text">Bedroom Collection</div>
                                        </div>
                                    </Link>
                                </div>
                              
                                <div className="col-12 col-lg-6  card space-btw-img">
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