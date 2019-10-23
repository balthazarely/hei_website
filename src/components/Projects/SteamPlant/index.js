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
                            Transformation of original Lowry Steam Plant
                        </Typography>
                        <Typography component="h3" variant="h45" align="left" color="textSecondary" gutterBottom>
                            Denver, Colorado
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={8} md={8}>
                        <Typography variant="p" align="left" color="textSecondary" paragraph style={{
                            paddingRight: "30px"
                        }}>
                            Steam Plant Lofts is the creative conversion of the original "Power House" of the
                             Lowry Air Force Base into 14 custom-designed loft-style condominiums. The overall
                             development also includes 9 single-family  Patio Homes that complement the historic
                             Steam Plant building. Steam Plant Lofts has six individual loft solar power systems
                             restoring the building's historic function as Lowry's Source of Energy.
                            <br />
                            <br />
                            Hartman Ely Investments was Development Manager and was an ownership partner
                             with Harvard Communities.
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
                                                The Mayor's Design Award in 2009 in the category "Buildings that Beckon”
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


                </Grid>
            </Container >
        </div >


    )
}

export default Projects;
