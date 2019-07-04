import React,{Component} from "react"
import "./Bedlinen.css"

class Bedlinen extends Component {
    render(){
        return(
            <div className = "bedlinen">
              <h2>Bedlinen</h2>
                    <div className = "row">
                        <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/LALELI.jpg"></img>
                        <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/SULTAN.jpg"></img>
                        <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/HAZAL1.jpg"></img>

                    </div>
                    <br/>
                    <div className = "row">
                        <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/CINAR1.jpg"></img>
                        <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/CINAR2.jpg"></img>
                        <img className="col-md-4" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/CINAR.jpg"></img>

                    </div>
            </div>
        )
    }
}
export default Bedlinen