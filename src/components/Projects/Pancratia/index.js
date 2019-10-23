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
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography component="h2" variant="h4" align="left" color="textPrimary" gutterBottom>
                            Affordable Housing at Historic Loretto Heights campus - coming in 2021
                        </Typography>
                        <Typography component="h3" variant="h45" align="left" color="textSecondary" gutterBottom>
                            Denver, Colorado
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="p" align="left" color="textSecondary" paragraph style={{
                            paddingRight: "30px"
                        }}>
                            Pancratia Hall Lofts is an adaptive use conversion of a vacant classroom and dormitory
                            building at the historic Loretto Heights college campus in southwest Denver. Pancratia
                            Hall is named after Mother Pancratia Bonfils, one of the key founders of Loretto Heights
                            in the late 1800s. It was designed by master architect Harry W. J. Edbrooke in 1927 and
                            was completed in 1930. The transformation of this important historic building will create
                            65 affordable family apartments and an inviting courtyard. The building's location at the
                            heart of the revitalized Loretto Heights community will provide great additional amenities
                            for residents. Key features of the historic building will be integrated into the new lofts.
                             Decorative terrazzo hallway flooring will be refurbished. The gym will be converted into two,
                             dramatic multi-level apartments, each with its own basketball backboard and restored clerestory
                             windows. The Chapel's stained glass windows, decorative plaster walls, wood timber ceiling
                             and decorative light fixtures will be featured in a dramatic fourth floor apartment.<br />
                            <br />
                            The project will be a public/private partnership with the City and County of Denver, Denver Housing Authority and the Colorado Housing and Finance Authority. Pancratia Hall Lofts is scheduled to be completed in Spring 2021.
                            Pancratia Hall Lofts is a development partnership between Hartman Ely Investments and Proximity Green.
                            Westside Investment Partners is the redeveloper for the entire Loretto Heights Community.
                            For more information on the history of Loretto Heights, visit Historic Denver
                        </Typography>

                        <div style={{
                            textAlign: "left"
                        }}>
                            <MyButton
                                link="https://historicdenver.org/loretto-heights-whats-next/"
                                text="More Infomation"
                                bck="#ffa800"
                                color="white" />
                        </div>
                    </Grid>





                    <Grid
                        item xs={12} sm={12} md={12} style={{
                            marginTop: "40px"
                        }}>
                        <NukaCarousel />
                    </Grid>


                </Grid>
            </Container >
        </div >


    )
}

export default Projects;
