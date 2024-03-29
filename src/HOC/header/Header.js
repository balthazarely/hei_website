import React, { Component } from 'react'
import SideDrawer from './SideDrawer';
import Logo from '../../resources/logos/HEI_logo.png'
import { Link } from 'react-router-dom';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export default class Header extends Component {
    constructor() {
        super()

        this.state = {
            drawerOpen: false,
            showMenu: true
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.HandelScroll);
    }

    HandelScroll = () => {
        if (window.scrollY < 50) {
            this.setState({
                showMenu: true
            })
        } else {
            this.setState({
                showMenu: false
            })
        }
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <AppBar className="appBar"
                position="fixed"
                style={{
                    backgroundColor: "#2d2d2d",
                    padding: this.state.showMenu ? '15px 0px' : '0px 0px',
                    boxShadow: 'none',

                }}>

                <Toolbar>
                    <div className="header_logo">
                        <Link to='/'>
                            <img
                                className="logo"
                                style={{
                                    width: this.state.showMenu ? "300px" : '200px',

                                }}
                                src={`${Logo}`}
                            />
                        </Link>
                    </div>

                    <IconButton
                        className="header-menu"
                        color="inherit"
                        onClick={() => this.toggleDrawer(true)}
                        style={{
                            float: "right"
                        }}>
                        <MenuIcon />
                    </IconButton>

                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value) => this.toggleDrawer(value)}
                    />

                </Toolbar>
            </AppBar >
        )
    }
}