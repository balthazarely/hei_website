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



const Infomation = () => {
    const classes = useStyles();

    return (


        <Container maxWidth="md">
            <Typography component="h1" variant="h3" color="white" align="center" className="" gutterBottom>
                <div style={{
                    color: 'white',
                    textShadow: '2px 2px #000000',
                    fontSize: "30px"
                }}>Contact</div>
            </Typography>

            <Grid container spacing={4} >
                <Grid item xs={12} sm={6} md={6} >
                    <Typography style={{
                        color: 'white',
                        textShadow: '2px 2px #000000',
                        lineHeight: "22px",
                        fontSize: "18px"
                    }} >
                        2120 Bluebell Ave <br /> Boulder, CO 80302
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography style={{
                        color: 'white',
                        textShadow: '2px 2px #000000',
                        lineHeight: "22px",
                        fontSize: "18px"
                    }} >
                        hello@hartmanely.com <br /> 303.444.4444
                    </Typography>
                </Grid>
                {/* <Fade top delay={500} >
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography>
                            <div style={{
                                color: 'white',
                                textShadow: '2px 2px #000000',
                                lineHeight: "22px",
                                fontSize: "18px",
                                backgroundColor: "red"
                            }}>2120 Bluebell Ave <br /> Boulder, CO <br />  80302</div>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography>
                            <div style={{
                                color: 'white',
                                textShadow: '2px 2px #000000',
                                lineHeight: "22px",
                                fontSize: "18px"

                            }}>2120 Bluebell Ave <br /> Boulder, CO <br />  80302</div>
                        </Typography>
                    </Grid>

                </Fade> */}
            </Grid>
        </Container >



    );
}

export default Infomation;

