import React from 'react';
import Fade from "react-reveal/Fade";
import MyButton from '../UI/MyButton'

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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
        paddingTop: theme.spacing(4),
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
    typographyBody: {
        align: "center",
        fontSize: "16px"
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),

    },
}));


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cardReview = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam debitis earum beatae alias quia optio molestias dolore cupiditate deserunt!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam debitis earum beatae alias quia optio molestias dolore cupiditate deserunt!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam debitis earum beatae alias quia optio molestias dolore cupiditate deserunt!"]


export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <main>

                <div className={classes.heroContent}>
                    <Container maxWidth="md">

                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Founded in 2000 by Jim Hartman and Susan Ely, Hartman Ely Investments is
                            one of the most respected historic redevelopment firms in Colorado.
                        </Typography>




                        <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container spacing={4}>

                                <Typography className={classes.typographyBody} >
                                    We are a development and investment company that specializes in redevelopment and
                                renewable energy. Our related company, Hartman Ely  Architecture provides design services for our developments. <br /><br />

                                    In addition, we have extensive experience with transit oriented and environmentally
                                    responsible, sustainable development. A major force behind all our work is a passion
                                to help mitigate global climate change and to help communities become more energy independent<br /><br />

                                    A key part of our business philosophy is strategic partnerships with other firms to
                                    form a uniquely qualified team for each development opportunity. This partnership
                                    pproach allows Jim and Susan’s extensive involvement in each development, better
                                    quality and lower cost services than most other development. Some examples of our
                                    partners include City Street Investors, Larimer Associates, Heitler Development,
                                Harvard Communities, City of Wheat Ridge and Jefferson County.<br /><br />

                                    Additionally, our extensive experience and skill with conceptual design, budgeting
                                    and scheduling is a tremendous asset in the early stages of any development. We can
                                    quickly analyze several options and create designs, budgets and schedules for any site
                                    or program that allows a landowner or entity to select the best option with minimal
                                    cost in the early due diligence or RFP phase.
                                </Typography>
                            </Grid>
                        </Container>



                        <Fade bottom delay={1300}>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <MyButton
                                            text="Locations"
                                            bck="#ffa800"
                                            color="white" />
                                    </Grid>
                                    <Grid item>
                                        <MyButton
                                            text="Purchase"
                                            bck="#ffa800"
                                            color="white" />
                                    </Grid>
                                </Grid>
                            </div>
                        </Fade>
                    </Container>
                </div>

            </main>


        </React.Fragment>
    );
}

