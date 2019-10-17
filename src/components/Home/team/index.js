import React from 'react';
import Fade from "react-reveal/Fade";
import MyButton from '../../UI/MyButton'
import LazyHero from 'react-lazy-hero'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: "#dddddd",
        padding: theme.spacing(8, 0, 6),
        padding: "50px"
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
        textAlign: "left"
    },
    typographyBody: {
        textAlign: "left",
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
            <main className={classes.heroContent}>

                <Container maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={6}>
                        <Fade left delay={300}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            </Fade>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
          
                            <Fade right delay={300}>
                            <Typography className={classes.typographyHeader} gutterBottom>
                                <h2>Redevelopment</h2>
                            </Typography>
                            <Typography gutterBottom className={classes.typographyBody}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore! Lorem ipsu
                            </Typography>
                            </Fade>
                            <Fade bottom delay={1300}>
                                <div className={classes.heroButtons}>
                                    <Grid container spacing={2} justify="center">
                                        <Grid item
                                            style={{
                                                padding: '30px'
                                            }} >
                                            <MyButton
                                                text="Locations"
                                                bck="#ffa800"
                                                color="white"
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            </Fade>
                        </Grid>
                    </Grid>



                </Container>
            </main>
        </React.Fragment>
    );
}