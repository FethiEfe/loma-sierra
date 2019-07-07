import React,{Component} from "react"
import "./Mattress.css"

class Mattress extends Component {
    render(){
        return(
            <div className = "mattress">
               <h2>Alez-Mattress Pad</h2>
                <div className = "row space-btw-img">
                    <img className="col-lg-4 col-md-6 col-sm-12" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/3-1-1.jpg"></img>
                    <img className="col-lg-4 col-md-6 col-sm-12" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/4-1.jpg"></img>
                    <img className="col-lg-4 col-md-6 col-sm-12" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/5-1.jpg"></img>
                    <img className="col-lg-4 col-md-6 col-sm-12" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/6.jpg"></img>
                    <img className="col-lg-4 col-md-6 col-sm-12" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/1-4.jpg"></img>
                    <img className="col-lg-4 col-md-6 col-sm-12" src = "https://asyatekstilboya.com/en/wp-content/uploads/2018/11/2-1-1.jpg"></img>
                </div>
               
            </div>
        )
    }
}
export default Mattress