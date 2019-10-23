import React from 'react';
import Fade from "react-reveal/Fade";
import DownButton from './DownButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { scroller } from 'react-scroll';

const useStyles = makeStyles(theme => ({

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


const Text = () => {
    const classes = useStyles();

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1000,
            delay: 100,
            smooth: true,
            offset: -30
        });
    }

    return (

        <Container maxWidth="md">
            <Fade top delay={500} >
                <Typography component="h1" variant="h2" color="white" align="center" gutterBottom>
                    <div className="header-text" style={{
                        color: 'white',
                        textShadow: '2px 2px #000000',

                        textTransform: "uppercase",
                        fontWeight: "300",
                        letterSpacing: "2px",
                        textShadow: "2px 2px 3px rgba(0,0,0,0.58)",

                    }}>Sustainability <span style={{ fontWeight: "800" }}>Reinvented</span></div>
                </Typography>
            </Fade>
            <Fade bottom delay={900} >

            </Fade>
            <DownButton />
        </Container >



    );
}

export default Text;



