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
                            Affordable Senior Housing on Light Rail - coming in 2020
                        </Typography>
                        <Typography component="h3" variant="h45" align="left" color="textSecondary" gutterBottom>
                            Lakewood, Colorado
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="p" align="left" color="textSecondary" paragraph style={{
                            paddingRight: "30px"
                        }}>
                            Eiber Village is an adaptive use conversion of three vacant, abandoned buildings to 50 affordable
                            rental senior apartments. The original 1960s buildings originally operated as the Hospice of Saint
                            John and this important property was recently designated by the City of Lakewood as a local historic
                            site. The property’s adjacency to Garrison Station along RTD’s West light rail line and it’s proximity
                            to West Colfax Avenue will provide great transit and shopping opportunities for residents. Fruit orchards,
                            enhanced existing gardens, resident patios and solar power systems will be created on the balance of the site.<br />
                            <br />
                            The project will be a public/private partnership with the City of Lakewood, Metro West Housing Solutions
                            and Jefferson County and is scheduled to be completed in Spring 2020.<br />
                            <br />

                            Hartman Ely Investments is Development Manager and an ownership partner with Giving Tree Partnerships.
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
                    {/*  */}




                    <Grid
                        item xs={12} sm={12} md={12} style={{
                            marginTop: "40px"
                        }}>
                        <NukaCarousel />
                    </Grid>

                    {/* <Grid
                        item xs={12} sm={12} md={6}>
                        <Iframe url="https://www.youtube.com/embed/NcsAn8GcbaM"
                            className="video-box"
                            width="450px"
                            height="300px"
                            id="myId"
                            display="initial"
                            position="relative" />
                    </Grid>
                    <Grid style={{ position: "relative" }}
                        item xs={12} sm={12} md={6}>
                        <Iframe url="https://www.youtube.com/embed/nDiRsbtbM-E"
                            className="video-box"
                            width="450px"
                            height="300px"
                            id="myId"
                            display="initial"
                            position="relative" />
                    </Grid> */}

                </Grid>
            </Container >
        </div >


    )
}

export default Projects;
