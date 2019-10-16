import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const Headline = () => {
    const classes = useStyles();
    return (
        <div>
            <div className="artist_name">
                <Fade top delay={500}>
                    <h5>Find Your Ideal Night</ h5>
                </Fade>
            </div >
            <div className="main_btn">
                <Fade bottom delay={1300}>
                    <Button variant="contained" >
                        Get Started
                    </Button>
                </Fade>
            </div>
        </div >
    )
}

export default Headline;


