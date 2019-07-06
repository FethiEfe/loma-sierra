import React, { Component } from "react"
import "./Contact.css"
import axios from "axios"
import { Form, Button, Row, Col } from "react-bootstrap"
import swal from 'sweetalert';


class Contact extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          message: "",
         
        }
      }
    
      handleChange = (e) => {
          console.log(e.target.value)
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
      }
    
      handleClick = (e) => {
        
        e.preventDefault();
        const { name, email, message } = this.state
        if(name.length < 1 && email.length < 1){
            swal({
                title: "Upsss!",
                text: "Name and Email fields must be filled out!",
                icon: "error",
              });
        }else{
        axios
          .post(`/api/contact`, { name, email, message })
          .then(() => {
            this.setState({
              name: "",
              email: "",
              message: "",
            })
          },swal({
            title: "Email Sent!",
            text: "We will get in touch with you as soon as possible",
            icon: "success",
          }))
      }
      } 

    render() {
        return (
            <div id="contact">
                <div className="container">
                    <h1 id ="contact-title">Let's Get In Touch!</h1>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control placeholder="John Smith" onChange={this.handleChange} name="name" value={this.state.name} required="true"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control type="email" placeholder="jsmith@gmail.com" onChange={this.handleChange} name="email" value={this.state.email} required="true"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>How Can We Help?</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={this.handleChange} name="message" value={this.state.message} required="true"/>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={this.handleClick}>
                            LET'S TALK
                        </Button>
                    </Form>

                </div>
            </div>
        )
    }
}
export default Contact