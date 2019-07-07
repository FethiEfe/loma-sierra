import React,{Component} from "react"
import "./Pillow.css"

class Pillow extends Component {
    render(){
        return(
            <div className = "pillow">
              <h2>Quilt</h2>
                <div className = "row space-btw-img">
                    <img className="col-lg-4 col-md-6 col-sm-12" alt="pic" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/2-3-1.jpg"></img>
                    <img className="col-lg-4 col-md-6 col-sm-12" alt="pic" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/3-3-1.jpg"></img>
                    <img className="col-lg-4 col-md-6 col-sm-12" alt="pic" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/1-2-1.jpg"></img>
                </div>
                
             
                
            </div>
        )
    }
}
export default Pillow