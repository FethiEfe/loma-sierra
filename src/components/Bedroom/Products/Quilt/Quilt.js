import React,{Component} from "react"
import "./Quilt.css"

class Quilt extends Component {
    render(){
        return(
            <div className = "quilt">
               <h2>Quilt</h2>
                <div className = "row">
                    <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/1-1-1.jpg"></img>
                    <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/2-2-1.jpg"></img>
                    <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/3-2-1.jpg"></img>
                </div>
                <br/>
             
                <div className = "row">
                    <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/4-1-1.jpg"></img>
                
                </div>
            </div>
        )
    }
}
export default Quilt