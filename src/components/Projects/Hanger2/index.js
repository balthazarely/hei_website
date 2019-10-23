import React from 'react';
import Fade from "react-reveal/Fade";
import MyButton from '../../UI/MyButton'
import HeroImage from './HeroImage'
import NukaCarousel from './NukaCarousel'
import {
    Grid, Container, CardContent, Typography
} from '@material-ui/core';
import Iframe from 'react-iframe'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(0),
    },
    cardGrid: {
        paddingTop: "50px",
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        marginTop: '-20px'
    },
    typographyHeader: {
        fontSize: "18px",
        align: "center"
    },
    typographySubHeader: {
        fontSize: "18px",
        align: "center",
        lineHeight: "24px"
    },
    typographyBody: {
        align: "center",
        fontSize: "16px"
    },
    typographpylist: {
        fontSize: "14px"
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),

    },
}));



const Projects = () => {
    const classes = useStyles();
    return (
        <div>
            <HeroImage />
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container className="single-portfolio-container" spacing={2}>
                    <Grid item xs={12} sm={8} md={8}>
                        <Typography component="h2" variant="h4" align="left" color="textPrimary" gutterBottom>
                            Vibrant Redevelopment of Historic Hangar
                        </Typography>
                        <Typography component="h3" variant="h45" align="left" color="textSecondary" gutterBottom>
                            Denver, Colorado
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={8} md={8}>
                        <Typography variant="p" align="left" color="textSecondary" paragraph style={{
                            paddingRight: "30px"
                        }}>
                            The transformation of the historic 1939 Hangar 2 at Lowry into a vibrant neighborhood meeting
                            place includes restaurants, public art, small entrepreneurial office and retail suites
                            as well as Montessri Casa International School. The hangar interior provides climate
                            controlled storage space for Lowry’s homes and local businesses. The entire property
                            creates a pedestrian-friendly streetscape and outdoor dining areas connecting the
                            massive historic hangar with the surrounding community. The renovated hangar has a
                            105kW solar power system for the building and an energy efficient design. It also
                            incorporates a 400kW community solar array allowing solar panels to be purchased by Denver
                            residents to offset their power needs.
                            <br />
                            <br />
                            Hartman Ely Investments was Development Manager and is an ownership partner with Larimer
                            Associates and City Street Investors.
                        </Typography>

                        <div style={{
                            textAlign: "left"
                        }}>
                            <MyButton
                                text="Website"
                                bck="#ffa800"
                                color="white" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Fade right delay={500}>
                            <div className="list-container">
                                <div className="text-rule">
                                    AWARDS
                            </div>
                                <div className="list">

                                    <ul>
                                        <li>
                                            <Typography className={classes.typographpylist} component="p" variant="p" align="left" color="textSecondary" gutterBottom>
                                                2015 Colorado Innovation Award: Urban Land Institute
                                             </Typography>
                                        </li>
                                        <li>
                                            <Typography className={classes.typographpylist} component="p" variant="p" align="left" color="textSecondary" gutterBottom>
                                                2013 Community Preservation Award: Historic Denver.
                                                </Typography>
                                        </li>
                                        <li>
                                            <Typography className={classes.typographpylist} component="p" variant="p" align="left" color="textSecondary" gutterBottom>
                                                2011 Mayor's Design Award.
                                                </Typography>
                                        </li>
                                    </ul>
                                </div>
                                <div className='text-rule-bottom'></div>
                            </div>
                        </Fade>
                    </Grid>




                    <Grid
                        item xs={12} sm={12} md={12} style={{
                            marginTop: "40px"
                        }}>
                        <NukaCarousel />
                    </Grid>

                    <Grid
                        item xs={12} sm={12} md={12}>
                        <Iframe url="https://www.youtube.com/embed/WwQ_NHuocP0"
                            className="video-box"
                            width="450px"
                            height="300px"
                            id="myId"
                            display="initial"
                            position="relative" />
                    </Grid>


                </Grid>
            </Container >
        </div >


    )
}

export default Projects;
