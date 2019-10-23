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
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));



const Text2 = () => {
    const classes = useStyles();

    return (


        <Container maxWidth="md">
            <Fade top delay={300} >
                <Typography component="h1" variant="h2" color="white" align="center" className="" gutterBottom>
                    <div style={{
                        color: 'white',

                        fontSize: "28px",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        fontWeight: "800",
                        // letterSpacing: "2px",
                        textShadow: "2px 2px 3px rgba(0,0,0,0.58)"

                    }}>Company History</div>

                </Typography>
            </Fade>
            <Fade top delay={300} >
                <Typography component="h1" variant="p" color="white" align="center" className="" gutterBottom>
                    <div style={{
                        color: 'white',

                        fontSize: "22px",
                        // textTransform: "uppercase",
                        fontWeight: "200",
                        // letterSpacing: "2px",
                        textShadow: "2px 2px 3px rgba(0,0,0,0.58)"

                    }}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque alias officia ut non, a quia illum nobis numquam enim sequi architecto deserunt harum aliquam? Esse voluptates quos accusamus laboriosam.</p>   </div>

                </Typography>
            </Fade>
            <Fade bottom delay={900} >
                <MyButton
                    text="About Us"
                    bck="#ffa800"
                    color="white" />
            </Fade>
        </Container >



    );
}

export default Text2;

