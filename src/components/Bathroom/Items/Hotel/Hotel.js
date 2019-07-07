import React,{Component} from "react"
import "./Hotel.css"

class Hotel extends Component {
    render(){
        return(
            <div className = "hotel-group space-btw-img">
              <h2>Hotel Group Collection</h2>
                <div className = "row">
                    <img className="col-lg-4 col-md-6 col-sm-12" alt="pic" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/1-1.jpg"></img>
                    <img className="col-lg-4 col-md-6 col-sm-12" alt="pic" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/3-1.jpg"></img>
                    <img className="col-lg-4 col-md-6 col-sm-12" alt="pic" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/2-1.jpg"></img>
                </div>
                
             
                
            </div>
        )
    }
}
export default Hotel