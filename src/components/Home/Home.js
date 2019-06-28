import React,{Component} from "react"
import "./Home.css"
import picture from "../Images/arrow.png"


class Home extends Component {
    render(){
        return(
            <div id = "home">
                <div className = "background-image"></div>
                <div className="home-page-content">
                    <div>
                        <h1>LOMA SIERRA</h1>
                        <h3>Home Textile Products</h3>
                    </div>
                    <img src ={picture}/>
                </div>
            </div>
        )
    }
}
export default Home