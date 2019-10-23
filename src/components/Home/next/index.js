import React from 'react';
import Fade from "react-reveal/Fade";
import MyButton from '../../UI/MyButton'


import Steamplant from '../../../resources/imgs/Steamplant.jpg'
import Hanger from '../../../resources/imgs/hanger2.3.jpg'
import Innovage from '../../../resources/imgs/innovage.jpg'


import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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
    cardTypography: {
        lineHeight: "26px"
    },
    typographyBody: {
        align: "center",
        fontSize: "14px",
        lineHeight: "22px"
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
                        <Fade top delay={300}>
                            <Typography component="h2" style={{ fontSize: "42px", fontWeight: 400 }} variant="h2" align="center" color="textPrimary" gutterBottom>
                                Creating Sustainable Commmunities

                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Hartman Ely Investments is a Development and Investment Company that specializes
                                in Sustainable Redevelopment and Renewable Energy.
                        </Typography>
                        </Fade>
                        <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container spacing={4}>

                                <Grid item xs={12} sm={4} md={4}>
                                    <Fade right delay={200}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={Steamplant}
                                            overflow="hidden"
                                            title="Image title"
                                        />
                                        <CardContent className={classes.typographyHeader}>
                                            <Typography className={classes.cardTypography} gutterBottom>
                                                <h2>Redevelopment</h2>
                                            </Typography>
                                            <Typography gutterBottom className={classes.typographyBody}>
                                                We specializes in transforming vacant historic buildings into vibrant
                                                new communities. A key part of our business philosophy is strategic
                                                collaborations with partners and surrounding neighborhoods to form a
                                                uniquely qualified team for each development opportunity.
                                            </Typography>
                                        </CardContent>
                                    </Fade>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Fade right delay={400}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={Hanger}
                                            overflow="hidden"
                                            title="Image title"
                                        />
                                        <CardContent className={classes.typographyHeader}>
                                            <Typography className={classes.cardTypography} gutterBottom>
                                                <h2>Renewable Energy</h2>
                                            </Typography>
                                            <Typography gutterBottom className={classes.typographyBody}  >
                                                Our renewable energy developments are solid financial investments
                                                that have a seamless aesthetic integration with each building and/or site.
                                            </Typography>
                                        </CardContent>
                                    </Fade>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Fade right delay={600}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={Innovage}
                                            overflow="hidden"
                                            title="Image title"
                                        />
                                        <CardContent className={classes.typographyHeader}>
                                            <Typography className={classes.cardTypography} gutterBottom>
                                                <h2>Other Projects</h2>
                                            </Typography>
                                            <Typography gutterBottom className={classes.typographyBody}  >
                                                Hartman Ely Investments has also created a new LEED Platinum headquarters
                                                 building, a boutique hotel and other mixed use developments.
                                            </Typography>
                                        </CardContent>
                                    </Fade>
                                </Grid>
                            </Grid>
                        </Container>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
}



