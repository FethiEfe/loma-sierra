import React from "react"
import {Switch, Route} from "react-router-dom"
import Bedroom from "../components/Bedroom/Bedroom"
import Bathroom from "../components/Bathroom/Bathroom"
import Home from "../components/Home/Home"
import Collections from "../components/Collections/Collections"
import About from "../components/AboutUs/About"
import Contact from "../components/Contact/Contact"

export default (
    <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/collection" component = {Collections}/>
        <Route path = "/about" component = {About}/>
        <Route path = "/contact" component = {Contact}/>
        <Route path = "/bedroom-collection" component = {Bedroom}/>
        <Route path = "/bathroom-collection" component = {Bathroom}/>
    </Switch>
)   