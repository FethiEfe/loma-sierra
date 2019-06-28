import React,{Component} from "react"
import "./Collections.css"
import bedroomImg from "../Images/bedroom.jpg"
import bathroomImg from "../Images/bathroom.jpg"

class Collections extends Component {
    render(){
        return(
            <div id ="collections">
                <h1>Collections</h1>
                <div className = "collection-contents">
                    <div className = "item-bedroom">
                       <img src = {bedroomImg} />
                       <h2>Bedroom Collections</h2> 
                    </div>
                    <div className = "item-bathroom">
                       <img src = {bathroomImg} />
                       <h2>Bathroom Collections</h2> 
                    </div>
                </div>
            </div>
        )
    }
}
export default Collections