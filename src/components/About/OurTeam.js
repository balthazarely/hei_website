import React from 'react';
import Fade from "react-reveal/Fade";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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
                                                Jim is one of Colorado’s leading experts with historic building redevelopment,
                                                urban infill development and renewable energy. He received his architectural
                                                degree from University of Virginia in 1980 and practiced in Colorado for many
                                                years. His passion is creating sustainable communities that respect their
                                                historical roots and enhance their neighborhoods.
                                 </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={8}>
                                        <CardContent >
                                            <Typography variant="h5" align="left" color="textSecondary" paragraph>
                                                Susan Ely
                                        </Typography>
                                            <Typography className={classes.typographyBody} >
                                                Susan Ely grew up in Australia and moved to Colorado in 1993.
                                                She received her architectural degree in 1986 from the University of
                                                Melbourne, Australia and practiced in Australia for several years.
                                                Susan is HEI's Business Manager and is in charge of all administrative efforts of the company.
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
                    </Container>
                </div>
            </main>
        </React.Fragment >
    );
}










