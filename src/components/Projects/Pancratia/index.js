import React from 'react';
import Fade from "react-reveal/Fade";


import MyButton from '../../UI/MyButton'

import HeroImage from './HeroImage'
import NukaCarousel from './NukaCarousel'

import {
    Grid, Container, CardContent, Typography
} from '@material-ui/core';
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
                        <Typography component="h2" variant="h3" align="left" color="textPrimary" gutterBottom>
                            The Historic Fruitdale Lofts
                        </Typography>
                        <Typography component="h2" variant="h45" align="left" color="textSecondary" gutterBottom>
                            Wheatridge | Colorado | Historic
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={8} md={8}>
                        <Typography variant="p" align="left" color="textSecondary" paragraph style={{
                            paddingRight: "30px"
                        }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore atque ducimus nemo ullam,
                             eum distinctio quos saepe totam facere obcaecati, corrupti, nihil itaque earum?
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore atque ducimus nemo ullam,
                             eum distinctio quos saepe totam facere obcaecati, corrupti, nihil itaque earum? <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore atque ducimus nemo ullam,
                            eum distinctio quos saepe totam facere obcaecati, corrupti, nihil itaque earum?
                             Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <div style={{
                            textAlign: "left"
                        }}>
                            <MyButton
                                text="Visit Website"
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
                                                2018 Community Development award: National Association of Housing and Redevelopment Officials
                                                </Typography>
                                        </li>
                                        <li>
                                            <Typography className={classes.typographpylist} component="p" variant="p" align="left" color="textSecondary" gutterBottom>
                                                2018 Residential Development that Overcame Significant Obstacles award: Novogradac & Company
                                                </Typography>
                                        </li>
                                        <li>
                                            <Typography className={classes.typographpylist} component="p" variant="p" align="left" color="textSecondary" gutterBottom>
                                                2018 Reinvestment Award & Special Congressional Recognition: City of Wheat Ridge and US Congressman Ed Perlmutter
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
