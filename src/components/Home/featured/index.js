import React from 'react';
import Carousel from './Carousel';
import Headline from './Headline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fade from "react-reveal/Fade";
import MyButton from '../../UI/MyButton'








const Featured = () => {
    return (
        <div>

            <Carousel />
            {/* <Headline /> */}
            {/* <Container maxWidth="md"> */}

            {/* <div style={{
                position: "absolute",
                fontSize: "56px",
                fontWeight: "800",
                color: "white",
                top: "50%",
                left: "50%",
                height: "160px",
                letterSpacing: "2px",
                transform: "translate(-50%, -50%)",
                textShadow: "2px 2px 3px rgba(0,0,0,0.58)"
            }}>
                Creating Sustainable Commmunities </div> */}


            {/* </Container> */}
        </div>

    )
}

export default Featured;