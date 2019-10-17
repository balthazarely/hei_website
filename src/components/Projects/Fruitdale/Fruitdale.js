import React from 'react';
import Fade from "react-reveal/Fade";
import MyButton from '../../UI/MyButton'


import Steamplant from '../../../resources/imgs/Steamplant.jpg'
import Hanger from '../../../resources/imgs/hanger2.3.jpg'
import Innovage from '../../../resources/imgs/innovage.jpg'


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



export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <main>

                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Fade top delay={500}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Fruitdale

                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore atque ducimus nemo ullam,
                                 eum distinctio quos saepe totam facere obcaecati, corrupti, nihil itaque earum?
                        </Typography>
                        </Fade>
                    </Container>
                </div>

            </main>


        </React.Fragment>
    );
}
