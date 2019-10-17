import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar, Button, Toolbar, Typography, List, ListItem,
    withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../resources/logos/HEI_logo.png'
import { scroller } from 'react-scroll';


const styleSheet = {
    list: {
        width: 200,
        color: "white"
    },
    padding: {
        paddingRight: 5,
        cursor: "pointer",
    },

    sideBarIcon: {
        padding: 0,
        color: "white",
        cursor: "pointer",
    },
    logo: {
        flexGrow: 1
    },
    paper: {
        background: "#2d2d2d"
    }

}

class ResAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerActivate: false, drawer: false };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }

    componentWillMount() {
        if (window.innerWidth <= 700) {
            this.setState({ drawerActivate: true });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 700) {
                this.setState({ drawerActivate: true });
            }
            else {
                this.setState({ drawerActivate: false })
            }
        });
    }



    //Small Screens
    createDrawer() {

        const scrollToElement = (element) => {
            scroller.scrollTo(element, {
                duration: 600,
                delay: 100,
                smooth: true,
                offset: -30
            });
        }

        const { classes } = this.props

        return (
            <div>
                <AppBar
                    style={{
                        backgroundColor: "#2d2d2d",
                        padding: this.state.showMenu ? '15px 0px' : '0px 0px',
                        boxShadow: 'none'
                    }}>
                    <Toolbar>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <img
                                className="logo"
                                style={{
                                    width: this.state.showMenu ? "300px" : '200px',
                                }}
                                src={`${Logo}`} />
                            <Typography color="inherit" variant="headline"></Typography>
                            <MenuIcon
                                className={this.props.classes.sideBarIcon}
                                onClick={() => { this.setState({ drawer: true }) }} />

                        </Grid>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    anchor="right"
                    classes={{ paper: classes.paper }}
                    open={this.state.drawer}
                    onClose={() => { this.setState({ drawer: false }) }}
                    onOpen={() => { this.setState({ drawer: true }) }}>

                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => { this.setState({ drawer: false }) }}
                        onKeyDown={() => { this.setState({ drawer: false }) }}>

                        <List className={this.props.classes.list}>
                            <ListItem button style={{ color: 'white' }} onClick={() => scrollToElement('home')}>
                                About
                            </ListItem>
                            <ListItem button style={{ color: 'white' }} onClick={() => scrollToElement('highlights')}>
                                Highlights
                            </ListItem>
                            <ListItem button style={{ color: 'white' }} onClick={() => scrollToElement('portfolio')}>
                                Portfolio
                            </ListItem>
                            <ListItem button style={{ color: 'white' }} onClick={() => scrollToElement('contact')}>
                                Contact
                            </ListItem>
                        </List>

                    </div>
                </SwipeableDrawer>

            </div>
        );
    }

    //Larger Screens
    destroyDrawer() {

        const scrollToElement = (element) => {
            scroller.scrollTo(element, {
                duration: 600,
                delay: 100,
                smooth: true,
                offset: -30
            });
        }

        const { classes } = this.props
        return (
            <AppBar
                style={{
                    backgroundColor: "#2d2d2d",
                    padding: this.state.showMenu ? '15px 0px' : '0px 0px',
                    boxShadow: 'none'
                }}>
                <Toolbar>
                    <Typography variant="headline" style={{ flexGrow: 1 }} >
                        <img className="logo"
                            style={{
                                height: "80px"
                            }}
                            src={`${Logo}`} />
                    </Typography>
                    <Button variant="subheading" className={classes.padding} color="inherit" onClick={() => scrollToElement('home')} >About</Button>
                    <Button variant="subheading" className={classes.padding} color="inherit" onClick={() => scrollToElement('highlights')} >Highlights</Button>
                    <Button variant="subheading" className={classes.padding} color="inherit" onClick={() => scrollToElement('portfolio')} >Portfolio</Button>
                    <Button variant="subheading" className={classes.padding} color="inherit" onClick={() => scrollToElement('contact')}  >Contact</Button>
                </Toolbar>
            </AppBar>
        )
    }

    render() {
        return (
            <div>
                {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
            </div>
        );
    }
}

ResAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);