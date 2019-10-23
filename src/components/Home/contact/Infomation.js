import React from 'react';
import Fade from "react-reveal/Fade";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TicketIcon from '../../../resources/icons/ticket.png';
import IconButton from '@material-ui/core/IconButton';



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
            <Fade top delay={300} >
                <Typography component="h1" variant="h2" color="white" align="center" className="" gutterBottom>
                    <div style={{
                        color: 'white',

                        fontSize: "28px",
                        // textTransform: "uppercase",
                        fontWeight: "800",
                        // letterSpacing: "2px",
                        textShadow: "2px 2px 3px rgba(0,0,0,0.58)"

                    }}>Please contact us with any further questions or proposals</div>
                </Typography>
            </Fade>
            <Fade bottom delay={900} >
                <Button
                    href=''
                    variant="contained"
                    size='small'
                    style={{
                        background: "#ffa800",
                        color: "white"
                    }}
                >
                    Email Us
                </Button>
                {/* 
                <FormControlLabel
                    control={
                        <a target="_top"
                            rel="noopener noreferrer"
                            href="mailto:test@example.com">
                            <IconButton color="primary">
                                <img src={TicketIcon}
                                    className="iconImage"
                                    alt="icon_button" />
                            </IconButton>
                        </a>
                    }
                    label={"test@example.com"}
                    labelPlacement="end"
                /> */}

            </Fade>
        </Container >



    );
}

export default Infomation;

