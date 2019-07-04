import React,{Component} from "react"
import "./Bathrope.css"

class Bathrope extends Component {
    render(){
        return(
            <div className = "bathrope">
              <h2>Bathrope</h2>
                <div className = "row">
                    <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/3.jpg"></img>
                    <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/1.jpg"></img>
                    <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/5.jpg"></img>
                </div>
                <br/>
                <div className = "row">
                    <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/E-901-1024x766.jpg"></img>
                    
                </div>
                
             
                
            </div>
        )
    }
}
export default Bathrope