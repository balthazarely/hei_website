import React from 'react';

import LazyHero from 'react-lazy-hero';
import FruitdaleBanner from '../../../resources/imgs/fruitdale_banner2.jpg'
import Fruitdale from './Fruitdale'
import MyCarousel from './MyCarousel'

import {
    Grid, Container, CardContent, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



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
        paddingTop: "150px",
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



const Projects = () => {
    const classes = useStyles();
    return (

        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={2}>

                <Grid
                    item xs={12} sm={8} md={8}>
                    <MyCarousel />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Typography component="h2" variant="h4" align="left" color="textPrimary" gutterBottom>
                        Fruitdale Historic
                     </Typography>
                    <Typography variant="hp" align="left" color="textSecondary" paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore atque ducimus nemo ullam,
                         eum distinctio quos saepe totam facere obcaecati, corrupti, nihil itaque earum?
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore atque ducimus nemo ullam,
                         eum distinctio quos saepe totam facere obcaecati, corrupti, nihil itaque earum?
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore atque ducimus nemo ullam,
                         eum distinctio quos saepe totam facere obcaecati, corrupti, nihil itaque earum?
                        </Typography>
                </Grid>

            </Grid>
        </Container>







    )
}

export default Projects;
