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
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                                voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                                voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                                voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore!
                                 </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={8}>
                                        <CardContent >
                                            <Typography variant="h5" align="left" color="textSecondary" paragraph>
                                                Susan Ely
                                        </Typography>
                                            <Typography className={classes.typographyBody} >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                                    voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                                    voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                                    voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore!
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










