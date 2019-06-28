import React,{Component} from "react"
import "./Collections.css"
import bedroomImg from "../Images/bedroom.jpg"
import bathroomImg from "../Images/bathroom.jpg"
import {Link} from "react-router-dom"

class Collections extends Component {
    render(){
        return(
            <div id ="collections">
                <h1>Collections</h1>
                <div className = "collection-contents">
                    <div className = "item-bedroom">
                        <Link to = "/bedroom-collection">
                            <img src = {bedroomImg} />
                        </Link>
                       <h2>Bedroom Collections</h2> 
                    </div>
                    <div className = "item-bathroom">
                        <Link to = "/bathroom-collection">
                            <img src = {bathroomImg} />
                        </Link>
                       <h2>Bathroom Collections</h2> 
                    </div>
                </div>
            </div>
        )
    }
}
export default Collections