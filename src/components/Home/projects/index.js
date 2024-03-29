import React from 'react';
import Fade from "react-reveal/Fade";

import { Link } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MyButtonSmall from '../../UI/MyButtonSmall';

import Fruitdale from '../../../resources/imgs/fruitdale.jpg'
import Hanger2 from '../../../resources/imgs/hanger2.jpg'
import Innovage from '../../../resources/imgs/innovage.jpg'
import Pancratia from '../../../resources/imgs/Pancratia.jpg'
import SteamPlantRow from '../../../resources/imgs/Steam_Plant_Row.jpg'
import SteamPlant from '../../../resources/imgs/Steamplant.jpg'
import Eiber from '../../../resources//imgs/eiber_village.jpg'


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
        display: "block",
    },
    cardContent: {
        flexGrow: 1,
        marginTop: '-20px'
    },
    typographyHeader: {
        fontSize: "18px",
        // textAlign: "left",
        fontWeight: '800',
    },
    typographyBody: {
        align: "center",
        fontSize: "14px",

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
                        <Typography component="h2" style={{ fontSize: "42px", fontWeight: 400 }} variant="h2" align="center" color="textPrimary" gutterBottom>
                            Our Portfolio
                            </Typography>
                        <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Fade bottom delay={200}>
                                        <Link style={{
                                            textDecoration: "none",
                                            color: "black"
                                        }}
                                            to="/fruitdale">
                                            <div className="container">
                                                <CardMedia
                                                    className="image"
                                                    image={Fruitdale}
                                                    title="Image title"
                                                />
                                                <div className="overlay">

                                                </div>
                                            </div>
                                        </Link>
                                        <CardContent>
                                            <Typography
                                                style={{
                                                    fontSize: "18px",
                                                    fontWeight: '800',
                                                    lineHeight: "20px"
                                                }}
                                                className="portfolio-header"
                                                gutterBottom>
                                                <Link
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black",

                                                    }}
                                                    to="/fruitdale">Fruitdale School Lofts</Link>
                                            </Typography>
                                            <Typography className={classes.typographyBody} gutterBottom>
                                                HEI and the City of Wheat Ridge created a unique residential community of 16 affordable rental apartments.
                                        </Typography>
                                            {/* <MyButtonSmall
                                                text="Website"
                                                bck="#ffa800"
                                                color="white" /> */}
                                        </CardContent>
                                    </Fade>
                                </Grid>

                                <Grid item xs={12} sm={4} md={4}>
                                    <Fade bottom delay={200}>
                                        <Link style={{
                                            textDecoration: "none",
                                            color: "black"
                                        }}
                                            to="/pancratia">
                                            <div className="container">
                                                <CardMedia
                                                    className="image"
                                                    image={Pancratia}
                                                    title="Image title"
                                                />
                                                <div className="overlay">
                                                </div>
                                            </div>
                                        </Link>
                                        <CardContent>
                                            <Typography
                                                style={{
                                                    fontSize: "18px",
                                                    fontWeight: '800',
                                                    lineHeight: "16px"
                                                }}
                                                className="portfolio-header"
                                                gutterBottom>
                                                <Link style={{
                                                    textDecoration: "none",
                                                    color: "black"
                                                }}
                                                    to="/pancratia">Pancratia Hall Lofts</Link>
                                            </Typography>
                                            <Typography className={classes.typographyBody} gutterBottom>
                                                Pancratia Hall Lofts is an adaptive use conversion of a vacant classroom
                                                and dormitory building in southwest Denver.
                                        </Typography>
                                        </CardContent>
                                    </Fade>
                                </Grid>

                                <Grid item xs={12} sm={4} md={4}>
                                    <Fade bottom delay={200}>
                                        <Link style={{
                                            textDecoration: "none",
                                            color: "black"
                                        }}
                                            to="/eiber">
                                            <div className="container">
                                                <CardMedia
                                                    className="image"
                                                    image={Eiber}
                                                    title="Image title"
                                                />
                                                <div className="overlay">
                                                </div>
                                            </div>
                                        </Link>
                                        <CardContent>
                                            <Typography
                                                style={{
                                                    fontSize: "18px",
                                                    fontWeight: '800',
                                                    lineHeight: "20px"
                                                }}
                                                className="portfolio-header"
                                                gutterBottom>
                                                <Link style={{
                                                    textDecoration: "none",
                                                    color: "black"
                                                }}
                                                    to="/eiber"> Eiber Village</Link>
                                            </Typography>
                                            <Typography className={classes.typographyBody} gutterBottom>
                                                Eiber Village is an adaptive use conversion of three
                                                abandoned buildings to 50 affordable rental senior apartments.
                                        </Typography>
                                        </CardContent>
                                    </Fade>
                                </Grid>

                                <Grid item xs={12} sm={4} md={4}>
                                    <Fade bottom delay={300}>
                                        <Link style={{
                                            textDecoration: "none",
                                            color: "black"
                                        }}
                                            to="/hanger2">
                                            <div className="container">
                                                <CardMedia
                                                    className="image"
                                                    image={Hanger2}
                                                    title="Image title"
                                                />
                                                <div className="overlay">
                                                </div>
                                            </div>
                                        </Link>
                                        <CardContent>
                                            <Typography
                                                style={{
                                                    fontSize: "18px",
                                                    fontWeight: '800',
                                                    lineHeight: "20px"
                                                }}
                                                className="portfolio-header"
                                                gutterBottom>
                                                <Link style={{
                                                    textDecoration: "none",
                                                    color: "black"
                                                }}
                                                    to="/hanger2">  Hangar 2 Lowry  </Link>
                                            </Typography>
                                            <Typography className={classes.typographyBody} gutterBottom>
                                                The transformation of the historic 1939 Hangar 2 at Lowry into a vibrant neighborhood meeting place.
                                        </Typography>
                                        </CardContent>
                                    </Fade>
                                </Grid>

                                <Grid item xs={12} sm={4} md={4}>
                                    <Fade bottom delay={300}>
                                        <Link style={{
                                            textDecoration: "none",
                                            color: "black"
                                        }}
                                            to="/steamplant">
                                            <div className="container">
                                                <CardMedia
                                                    className="image"
                                                    image={SteamPlant}
                                                    title="Image title"
                                                />
                                                <div className="overlay">
                                                </div>
                                            </div>
                                        </Link>
                                        <CardContent>
                                            <Typography
                                                style={{
                                                    fontSize: "18px",
                                                    fontWeight: '800',
                                                    lineHeight: "20px"
                                                }}
                                                className="portfolio-header"
                                                gutterBottom>
                                                <Link style={{
                                                    textDecoration: "none",
                                                    color: "black"
                                                }}
                                                    to="/steamplant">Steam Plant Lofts  </Link>
                                            </Typography>
                                            <Typography className={classes.typographyBody} gutterBottom>
                                                The  original "Power House" of
                                                the Lowry Air Force Base, redeveloped into 14 custom-designed loft-style condominiums.
                                        </Typography>
                                        </CardContent>
                                    </Fade>
                                </Grid>

                                <Grid item xs={12} sm={4} md={4}>
                                    <Fade bottom delay={300}>
                                        <Link style={{
                                            textDecoration: "none",
                                            color: "black"
                                        }}
                                            to="/steamplantrowhomes">
                                            <div className="container">
                                                <CardMedia
                                                    className="image"
                                                    image={SteamPlantRow}
                                                    title="Image title"
                                                />
                                                <div className="overlay">
                                                </div>
                                            </div>
                                        </Link>
                                        <CardContent>
                                            <Typography
                                                style={{
                                                    fontSize: "18px",
                                                    fontWeight: '800',
                                                    lineHeight: "20px"
                                                }}
                                                className="portfolio-header"
                                                gutterBottom>
                                                <Link style={{
                                                    textDecoration: "none",
                                                    color: "black"
                                                }}
                                                    to="/steamplantrowhomes"> Steam Plant Row Home</Link>
                                            </Typography>
                                            <Typography className={classes.typographyBody} gutterBottom>
                                                Steam Plant Row Homes is a 10-unit townhome building that is the first live/work facility at Lowry.
                                        </Typography>
                                        </CardContent>
                                    </Fade>
                                </Grid>
                            </Grid>
                        </Container>
                    </Container>
                </div>
            </main>
        </React.Fragment >
    );
}










