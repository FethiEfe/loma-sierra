import React, { Component } from "react"
import "./Bedroom.css"
import {Nav, Col,Tab,Row} from "react-bootstrap"
import DuvetCover from "./Products/DuvetCover/DuvetCover.js"
import Bedlinen from "./Products/Bedlinen/Bedlinen"
import Sheet from "./Products/Sheet/Sheet"
import Mattress from "./Products/MattressPad/MattressPad"
import Quilt from "./Products/Quilt/Quilt"
import Pillow from "./Products/Pillow/Pillow"



class Bedroom extends Component {
    render() {
        return (
            <div className="bedroom">
                <div className="container ">

               
                    <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column" id= "bathroom-left-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Bedlinen</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Duver Cover Set</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Sheet</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">Mattress Pad</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth">Quilt</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seventh">Pillow</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Bedlinen/>
                                    </Tab.Pane>


                                    <Tab.Pane eventKey="third">
                                        <DuvetCover />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fourth">
                                        <Sheet />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fifth">
                                        <Mattress/>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="sixth">
                                        <Quilt/>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="seventh">
                                        <Pillow/>
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
export default Bedroom