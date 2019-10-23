import React from 'react';
import Fade from 'react-reveal/Fade';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import LocationOn from '@material-ui/icons/LocationOn';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';



const useStyles = makeStyles(theme => ({
    icon: {
        fontSize: "15px",
        color: "#ffa800",
        position: "relative",
        top: "3px"
    },
}));


// could write 2 different headeds based on screen size

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className="bck_black footer" >
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6}>
                    <div className="font_righteous footer_logo" style={{ color: "#dddddd", fontSize: "20px" }}>Hartman Ely Investments</div>
                    <div className="footer_copyright" style={{ color: "#dddddd" }}>
                        Hartman Ely Investments 2019. All Rights Reserved
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <div className="footer_copyright" style={{ color: "#dddddd" }}>
                        <LocationOn className={classes.icon} /> 2120 Bluebell Ave.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp; Boulder, CO 80302
                        <br /> <Phone className={classes.icon} /> (303) 448-1080
                        <br /> <Email className={classes.icon} /> infomation@hartmanely.com
                    </div>
                </Grid>

            </Grid>
        </footer>
    )
}

export default Footer;





{/* import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ padding: "50px" }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo" style={{ color: "#dddddd" }}>Hartman Ely Investments</div>
                <div className="footer_copyright" style={{ color: "#dddddd" }}>
                    Hartman Ely Investments 2019. All Rights Reserved
                    </div>

            </Fade>
        </footer>

    )
}

export default Footer; */}