import React,{Component} from "react"
import "./SofaCover.css"

class SofaCover extends Component {
    render(){
        return(
            <div className = "sofa-cover">
                <div >
                    <h2>Sofa Covers</h2>
                    <div className = "row">
                        <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/cekyat-1024x769.jpg"></img>
                        <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/standart-1024x769.jpg"></img>
                        <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/maxi-1024x769.jpg"></img>

                    </div>
                    
                </div>
            </div>
        )
    }
}
export default SofaCover