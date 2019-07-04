import React,{Component} from "react"
import "./Sheet.css"

class Sheet extends Component {
    render(){
        return(
            <div className = "sheet">
                <h2>Sheet</h2>
                <div className = "row">
                    <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/2-3.jpg"></img>
                    <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/3-3.jpg"></img>
                </div>
                    
                    
            </div>
        )
    }
}
export default Sheet