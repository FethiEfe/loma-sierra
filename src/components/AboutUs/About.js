import React, { Component } from "react"
import "./About.css"
import { Timeline, Event } from "react-timeline-scribble";


class About extends Component {
    render() {
        return (
            <div className = "about ">
                <div className = "timeline">

                
                    <Timeline >
                        <Event title={"About Us"} >
                        Our company is interested in eCommerce while improving business experience. We manufacture home textile products according to customers requirements and offer them in many eCommerce platforms like Amazon, Ebay and Wayfair.

The most important goal is manufacturing with best raw materials and keep customer contentment high for us.
                        </Event>
                        <Event  title={"Our Vision"} >
                        To be a leading textile company that supports economic development, with a social and environmental sustainable policy, respects its suppliers, serves to world brands with its own designs, believes in the need to have quality systems in the product quality and creates the largest employment in its region.
                        </Event>
                        <Event  title={"Our Mission"} >
                        To be a pioneer company with a system that is preferred by its customers with its high employment and supply chain, growing with its team and using a technology at every stage of production and to improve customer satisfaction, to implement our Quality Management System efficiently with the participation of our employees and to continuously improve its effectiveness.
                        </Event>
                    </Timeline>
                    </div>
            </div>

        )
    }
}
export default About