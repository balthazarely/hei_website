import React from 'react';
import Fade from "react-reveal/Fade";
import MyButton from '../UI/MyButton'
import { Link } from 'react-router-dom';

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
// import Link from '@material-ui/core/Link';


import Jim from '../../resources/imgs/Jim.jpg'
import Sue from '../../resources/imgs/sue.jpg'



const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: "#eaeaea",
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
        height: "230px"
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


export default function OurTeam() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="md">



                        <Container className={classes.cardGrid} maxWidth="md">
                        <Fade bottom delay={200}>
                            <Grid container spacing={1}>

                                <Grid item xs={12} sm={4} md={4}>
                                    <CardContent >
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={Jim}
                                            overflow="hidden"
                                            title="Image title"
                                        />
                                    </CardContent>
                                </Grid>
                                <Grid item xs={12} sm={8} md={8}>
                                    <CardContent >
                                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                                            Jim Hartman
                                        </Typography>
                                        <Typography className={classes.typographyBody} >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                            voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                            voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                            voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore!
                                 </Typography>
                                    </CardContent>
                                </Grid>

                                <Grid item xs={12} sm={8} md={8}>
                                    <CardContent >
                                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                                            Susan Ely
                                        </Typography>
                                        <Typography className={classes.typographyBody} >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                                voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                                voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                                voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore!
                                        </Typography>
                                    </CardContent>
                                </Grid>

                                <Grid item xs={12} sm={4} md={4}>
                                    <CardContent >
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={Sue}
                                            overflow="hidden"
                                            title="Image title"
                                        />
                                    </CardContent>
                                </Grid>


                            </Grid>
                            </Fade>
                        </Container>


                        {/* <Grid item xs={6} sm={3} md={3}>
                                    <CardContent>
                                        <Typography className={classes.typographyHeader} gutterBottom>
                                            Jim Hartman
                                        </Typography>
                                        <Typography className={classes.typographyBody} gutterBottom>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusantium fugit modi omnis, eaque corrupti
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusantium fugit modi omnis, eaque corrupti
                                        </Typography>
                                    </CardContent>
                                </Grid>  */}







                        {/* <Grid item xs={12} sm={6} md={6}>
                                        <div>
                                            <img src={Jim}
                                                style={{
                                                    float: "left",
                                                    marginRight: "1em"
                                                }}/>
                                                <h2>Jim Hartman</h2>

                                                <Typography className={classes.typographyBody} gutterBottom>
                                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque explicabo aspernatur delectus voluptate, nesciunt quibusdam ab reprehenderit, non et temporibus. Aut commodi, voluptates nulla deleniti pariatur vitae vel eos sit asperiores aliquid,
                                                molestiae recusandae placeat corporis earum assumenda dolorem! Earum necessitatibus tempora enim nisi officiis in. Ducimus illo placeat eveniet.   
                                                </Typography >
                                        </div>
                                    </Grid>
                                    
                                    <Grid item xs={12} sm={6} md={6}>
                                        <div>
                                            <img src={Jim}
                                                style={{
                                                    float: "left",
                                                    marginRight: "1em"
                                                }}/>
                                                <h2>Jim Hartman</h2>

                                                <Typography className={classes.typographyBody} gutterBottom>
                                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque explicabo aspernatur delectus voluptate, nesciunt quibusdam ab reprehenderit, non et temporibus. Aut commodi, voluptates nulla deleniti pariatur vitae vel eos sit asperiores aliquid,
                                                molestiae recusandae placeat corporis earum assumenda dolorem! Earum necessitatibus tempora enim nisi officiis in. Ducimus illo placeat eveniet.   
                                                </Typography >
                                        </div>
                                    </Grid> 
 */}

                    </Container>
                </div>
            </main>
        </React.Fragment >
    );
}










