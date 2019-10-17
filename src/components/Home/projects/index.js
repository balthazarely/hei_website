import React from 'react';
import Fade from "react-reveal/Fade";
import MyButton from '../../UI/MyButton'

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
        textAlign: "left",
        fontWeight: '800'
    },
    typographyBody: {
        align: "center",
        fontSize: "14px",
        textAlign: "left"
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),

    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cardReview = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam debitis earum beatae alias quia optio molestias dolore cupiditate deserunt!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam debitis earum beatae alias quia optio molestias dolore cupiditate deserunt!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam debitis earum beatae alias quia optio molestias dolore cupiditate deserunt!"]


export default function Projects() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Projects
                        </Typography>


                        <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container spacing={4}>

                            
                            <Grid item xs={12} sm={4} md={4}>
                                <Fade bottom delay={300}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                    <CardContent>
                                        <Typography className={classes.typographyHeader} gutterBottom>
                                            Redevelopmen
                                        </Typography>
                                        <Typography className={classes.typographyBody} gutterBottom>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusantium fugit modi omnis, eaque corrupti.
                                        </Typography>
                                    </CardContent>
                                </Fade>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <Fade bottom delay={300}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                    <CardContent>
                                        <Typography className={classes.typographyHeader} gutterBottom>
                                            Redevelopmen
                                        </Typography>
                                        <Typography className={classes.typographyBody} gutterBottom>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusantium fugit modi omnis, eaque corrupti.
                                        </Typography>
                                    </CardContent>
                                </Fade>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <Fade bottom delay={300}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                    <CardContent>
                                        <Typography className={classes.typographyHeader} gutterBottom>
                                            Redevelopmen
                                        </Typography>
                                        <Typography className={classes.typographyBody} gutterBottom>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusantium fugit modi omnis, eaque corrupti.
                                        </Typography>
                                    </CardContent>
                                </Fade>
                            </Grid>

                            <Grid item xs={12} sm={4} md={4}>
                                <Fade bottom delay={300}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                    <CardContent>
                                        <Typography className={classes.typographyHeader} gutterBottom>
                                            Redevelopmen
                                        </Typography>
                                        <Typography className={classes.typographyBody} gutterBottom>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusantium fugit modi omnis, eaque corrupti.
                                        </Typography>
                                    </CardContent>
                                </Fade>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <Fade bottom delay={300}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                    <CardContent>
                                        <Typography className={classes.typographyHeader} gutterBottom>
                                            Redevelopmen
                                        </Typography>
                                        <Typography className={classes.typographyBody} gutterBottom>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusantium fugit modi omnis, eaque corrupti.
                                        </Typography>
                                    </CardContent>
                                </Fade>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <Fade bottom delay={300}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                    <CardContent>
                                        <Typography className={classes.typographyHeader} gutterBottom>
                                            Redevelopmen
                                        </Typography>
                                        <Typography className={classes.typographyBody} gutterBottom>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusantium fugit modi omnis, eaque corrupti.
                                        </Typography>
                                    </CardContent>
                                </Fade>
                            </Grid>
                                
                                
                                


                            </Grid>
                        </Container>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
}









