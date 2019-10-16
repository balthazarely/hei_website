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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cardReview = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam debitis earum beatae alias quia optio molestias dolore cupiditate deserunt!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam debitis earum beatae alias quia optio molestias dolore cupiditate deserunt!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam debitis earum beatae alias quia optio molestias dolore cupiditate deserunt!"]


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
                                Get The Concerts <b>You Love</b>

                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore atque ducimus nemo ullam,
                                 eum distinctio quos saepe totam facere obcaecati, corrupti, nihil itaque earum?
                        </Typography>
                        </Fade>



                        <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container spacing={4}>

                                <Grid item xs={12} sm={4} md={4}>
                                    <Fade right delay={300}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                        <CardContent className={classes.typographyHeader}>
                                            <Typography className={classes.cardTypography} gutterBottom>
                                                <h3>Redevelopment</h3>
                                            </Typography>
                                            <Typography gutterBottom className={classes.typographyBody} variant="p" >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                                voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore!
                                            </Typography>
                                        </CardContent>
                                    </Fade>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Fade right delay={300}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                        <CardContent className={classes.typographyHeader}>
                                            <Typography className={classes.cardTypography} gutterBottom>
                                                <h3>Renewable Energy</h3>
                                            </Typography>
                                            <Typography gutterBottom className={classes.typographyBody} variant="p" >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                                voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore!
                                            </Typography>
                                        </CardContent>
                                    </Fade>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Fade right delay={300}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                        <CardContent className={classes.typographyHeader}>
                                            <Typography className={classes.cardTypography} gutterBottom>
                                                <h3>Other Projects</h3>
                                            </Typography>
                                            <Typography gutterBottom className={classes.typographyBody} variant="p" >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
                                                voluptatum earum ratione ab qui! Nemo accusantium ipsam maiore!
                                            </Typography>
                                        </CardContent>
                                    </Fade>
                                </Grid>



                            </Grid>
                        </Container>



                        <Fade bottom delay={1300}>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <MyButton
                                            text="Locations"
                                            bck="#ffa800"
                                            color="white" />
                                    </Grid>
                                    <Grid item>
                                        <MyButton
                                            text="Purchase"
                                            bck="#ffa800"
                                            color="white" />
                                    </Grid>
                                </Grid>
                            </div>
                        </Fade>
                    </Container>
                </div>

            </main>


        </React.Fragment>
    );
}












// import React from 'react';
// import Fade from "react-reveal/Fade";
// import MyButton from '../../UI/MyButton'

// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';


// const useStyles = makeStyles(theme => ({
//     icon: {
//         marginRight: theme.spacing(2),
//     },
//     heroContent: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(8, 0, 6),
//     },
//     heroButtons: {
//         marginTop: theme.spacing(0),
//     },
//     cardGrid: {
//         paddingTop: theme.spacing(4),
//         paddingBottom: theme.spacing(8),
//     },
//     card: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     cardMedia: {
//         paddingTop: '56.25%', // 16:9
//     },
//     cardContent: {
//         flexGrow: 1,
//         marginTop: '-20px'
//     },
//     footer: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(6),

//     },
// }));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cardReview = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam debitis earum beatae alias quia optio molestias dolore cupiditate deserunt!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam debitis earum beatae alias quia optio molestias dolore cupiditate deserunt!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam debitis earum beatae alias quia optio molestias dolore cupiditate deserunt!"]


// export default function Album() {
//     const classes = useStyles();

//     return (
//         <React.Fragment>
//             <CssBaseline />

//             <main>

//                 <div className={classes.heroContent}>
//                     <Container maxWidth="md">
//                         <Fade top delay={500}>
//                             <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
//                                 Get The Concerts <b>You Love</b>

//                             </Typography>
//                             <Typography variant="h5" align="center" color="textSecondary" paragraph>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore atque ducimus nemo ullam,
//                                  eum distinctio quos saepe totam facere obcaecati, corrupti, nihil itaque earum?
//                         </Typography>
//                         </Fade>



//                         <Container className={classes.cardGrid} maxWidth="md">

//                             <Grid container spacing={4}>
//                                 <Grid item xs={12} sm={6} md={6}>
//                                     <CardContent className={classes.cardContent}>
//                                         <Fade right delay={300}>
//                                             <Typography gutterBottom variant="h5" align="center" component="h2">
//                                                 <h3>"What a team!"</h3>
//                                             </Typography>
//                                             <Typography gutterBottom variant="p" align="center">
//                                                 <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet, rerum
//                                                     voluptatum earum ratione ab qui! Nemo accusantium ipsam maiores in, sapiente
//                                                     at ullam cupiditate repellendus praesentium architecto!</i>
//                                             </Typography>
//                                         </Fade>
//                                     </CardContent>
//                                 </Grid>
//                                 <Grid item xs={12} sm={6} md={6}>
//                                     <CardContent className={classes.cardContent}>
//                                         <Fade right delay={600}>
//                                             <Typography gutterBottom variant="h5" align="center" component="h2">
//                                                 <h3>"Amazing Value!"</h3>
//                                             </Typography>
//                                             <Typography gutterBottom variant="p4" align="center" >
//                                                 <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet,
//                                                     rerum voluptatum earum ratione ab qui! Nemo accusantium ipsam maiores in,
//                                                     sapiente at ullam cupiditate repellendus praesentium! </i>
//                                             </Typography>
//                                         </Fade>
//                                     </CardContent>
//                                 </Grid>
//                             </Grid>
//                         </Container>



//                         <Fade bottom delay={1300}>
//                             <div className={classes.heroButtons}>
//                                 <Grid container spacing={2} justify="center">
//                                     <Grid item>
//                                         <MyButton
//                                             text="Locations"
//                                             bck="#ffa800"
//                                             color="white" />
//                                     </Grid>
//                                     <Grid item>
//                                         <MyButton
//                                             text="Purchase"
//                                             bck="#ffa800"
//                                             color="white" />
//                                     </Grid>
//                                 </Grid>
//                             </div>
//                         </Fade>
//                     </Container>
//                 </div>
//                 <Container className={classes.cardGrid} maxWidth="md">
//                     {/* End hero unit */}
//                     <Grid container spacing={4}>
//                         {cards.map(card => (
//                             <Grid item key={card} xs={12} sm={6} md={4}>
//                                 <Card className={classes.card}>
//                                     <CardMedia
//                                         className={classes.cardMedia}
//                                         image="https://source.unsplash.com/random"
//                                         title="Image title"
//                                     />
//                                     <CardContent className={classes.cardContent}>
//                                         <Typography gutterBottom variant="h5" component="h2">
//                                             Heading
//                                          </Typography>
//                                         <Typography>
//                                             This is a media card. You can use this section to describe the content.
//                                         </Typography>
//                                     </CardContent>
//                                     <CardActions>
//                                         <Button size="small" color="primary">
//                                             View
//                                          </Button>
//                                         <Button size="small" color="primary">
//                                             Edit
//                                          </Button>
//                                     </CardActions>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Container>
//             </main>
//             {/* Footer */}
//             <footer className={classes.footer}>
//                 <Typography variant="h6" align="center" gutterBottom>
//                     Footer
//                 </Typography>
//                 <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
//                     Something here to give the footer a purpose!
//         </Typography>

//             </footer>

//         </React.Fragment>
//     );
// }