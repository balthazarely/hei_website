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



const Headline = () => {
    const classes = useStyles();

    return (


        <Container maxWidth="md">
            <Fade top delay={500} >
                <Typography component="h1" variant="h2" color="white" align="center" className="" gutterBottom>
                    <div style={{
                        color: 'white',
                        textShadow: '2px 2px #000000',
                        fontSize: "70px"
                    }}>Find Your Ideal Night</div>
                </Typography>
            </Fade>
            <Fade bottom delay={900} >
                <MyButton
                    text="Locations"
                    bck="#ffa800"
                    color="white" />
            </Fade>
        </Container >



    );
}

export default Headline;


// import React from 'react';
// import Fade from 'react-reveal/Fade';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';


// const useStyles = makeStyles(theme => ({
//     button: {
//         margin: theme.spacing(1),
//     },
//     input: {
//         display: 'none',
//     },
// }));

// const Headline = () => {
//     const classes = useStyles();
//     return (
//         <div>
//             <div className="artist_name">
//                 <Fade top delay={500}>
//                     <h5>Find Your Ideal Night</ h5>
//                 </Fade>
//             </div >
//             <div className="main_btn">
//                 <Fade bottom delay={1300}>
//                     <Button variant="contained" >
//                         Get Started
//                     </Button>
//                 </Fade>
//             </div>
//         </div >
//     )
// }

// export default Headline;


