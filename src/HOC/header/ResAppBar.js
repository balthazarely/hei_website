import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar, Button, Toolbar, Typography, List, ListItem,
    withStyles, Grid, SwipeableDrawer, ButtonGroup, ListItemText, ListItemIcon
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../resources/logos/HEI_logo.png'
import { scroller } from 'react-scroll';
import { Link } from 'react-router-dom';


import LocationOn from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import Phone from '@material-ui/icons/Phone';
import GroupIcon from '@material-ui/icons/Group';
import EcoIcon from '@material-ui/icons/Eco';


const styleSheet = {
    list: {
        width: 200,
        color: "white"
    },
    padding: {
        paddingRight: 15,
        paddingLeft: 15,
        cursor: "pointer"
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
    },
    icon: {
        // fontSize: "15px",
        color: "#ffa800",
        // position: "relative",
        // top: "3px"
    },
    listItem: {
        marginLeft: "-20px"
    }
}

class ResAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerActivate: false,
            drawer: false,
            showMenu: true
        };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }

    HandelScroll = () => {
        if (window.scrollY > 50) {
            this.setState({
                showMenu: false
            })
        } else {
            this.setState({
                showMenu: true
            })
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.HandelScroll);
        if (window.innerWidth <= 800) {
            this.setState({ drawerActivate: true });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 800) {
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
            <header>
                <AppBar className="appBar"
                    style={{
                        backgroundColor: "#2d2d2d",
                        padding: this.state.showMenu ? '20px 0px' : '0px 0px',
                        boxShadow: 'none',
                        transition: " all 300ms ease-in-out"
                    }}>
                    <Toolbar>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <Link to='/'>
                                <img
                                    className="logo"
                                    style={{
                                        width: this.state.showMenu ? "300px" : '200px',
                                    }}
                                    src={`${Logo}`} />
                            </Link>
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
                            <ListItem button style={{ color: 'white' }} onClick={() => scrollToElement('mission')}>
                                <ListItemIcon><EcoIcon className={classes.icon} /> </ListItemIcon>
                                <ListItemText className={classes.listItem}>Mission</ListItemText>
                            </ListItem>

                            <ListItem button style={{ color: 'white' }} onClick={() => scrollToElement('portfolio')}>
                                <ListItemIcon><BusinessIcon className={classes.icon} /> </ListItemIcon>
                                <ListItemText className={classes.listItem}>Portfolio</ListItemText>
                            </ListItem>

                            <ListItem button style={{ color: 'white' }} href="/about" >
                                <ListItemIcon><GroupIcon className={classes.icon} /> </ListItemIcon>
                                <ListItemText className={classes.listItem}>About</ListItemText>
                            </ListItem>

                            <ListItem button style={{ color: 'white' }} onClick={() => scrollToElement('contact')}>
                                <ListItemIcon><Phone className={classes.icon} /> </ListItemIcon>
                                <ListItemText className={classes.listItem}>Contact</ListItemText>
                            </ListItem>
                        </List>

                    </div>
                </SwipeableDrawer>

            </header>
        );
    }

    //Larger Screens
    destroyDrawer() {
        const scrollToElement = (element) => {
            scroller.scrollTo(element, {
                duration: 1000,
                delay: 100,
                smooth: true,
                offset: -30
            });
        }

        const { classes } = this.props
        return (

            <AppBar className="appBar"
                style={{
                    backgroundColor: "#2d2d2d",
                    padding: this.state.showMenu ? '20px 0px' : '0px 0px',
                    boxShadow: 'none',
                    transition: " all 300ms ease-in-out"

                }}>
                <Toolbar>
                    <Typography variant="headline" style={{ flexGrow: 1 }} >
                        <Link to='/'>
                            <img
                                className="logo"
                                style={{
                                    width: this.state.showMenu ? "300px" : '200px',
                                }}
                                src={`${Logo}`} />
                        </Link>
                    </Typography>

                    <div>
                        <Button variant="primary" className="menu-item"
                            color="inherit" onClick={() => scrollToElement('mission')} >Mission</Button>
                    </div>
                    <div>
                        <Button variant="primary" className="menu-item"
                            color="inherit" onClick={() => scrollToElement('portfolio')} >Portfolio</Button>
                    </div>
                    <div>
                        <Button variant="primary" className="menu-item"
                            color="inherit" href="/about" >About</Button>
                    </div>
                    <div>
                        <Button variant="primary" className="menu-item"
                            color="inherit" onClick={() => scrollToElement('contact')}  >Contact</Button>
                    </div>

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