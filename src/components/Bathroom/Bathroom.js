import React,{Component} from "react"
import "./Bathroom.css"
import {Nav, Col,Tab,Row} from "react-bootstrap"
import Towel from "./Items/Towel/Towel"
import Hotel from "./Items/Hotel/Hotel"
import Bathrobe from "./Items/Bathrope/Bathrope"

class Bathroom extends Component {
    
    render(){
        return(
            <div className = "bathroom">
              <div className = "container">
              <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column" id= "bathroom-left-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Bathrobe</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Towel</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Hotel Group</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Bathrobe/>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <Towel />
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <Hotel/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

              </div>
            </div>
        )
    }
}
export default Bathroom