import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { scroller } from 'react-scroll';
import Grid from '@material-ui/core/Grid';


const scrollToElement = (element) => {
    scroller.scrollTo(element, {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: -30
    });
}

export default class DownButton extends Component {
    constructor() {
        super()

        this.state = {
            buttonActive: false
        }
    }

    HandelClick = () => {
        scrollToElement('mission');
        console.log("clicked")
        this.setState({
            buttonActive: true
        })
    }


    render() {
        return (
            <div>
                <Fade bottom delay={1000} >
                    <Grid item xs={12} sm={12} md={12}>
                        <div style={{ marginTop: "70px" }}>
                            <ArrowDropDownCircleIcon
                                className="arrow-icon"
                                onClick={this.HandelClick}
                                style={{
                                    fontSize: "65px",
                                    color: this.state.buttonActive ? "#ffa800" : "white",
                                }} />
                        </div>
                    </Grid>
                </Fade>
            </div>
        )
    }
}



