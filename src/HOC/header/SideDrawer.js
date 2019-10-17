import React from 'react'
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    list: {
        width: 200,
    },
    fullList: {
        width: 'auto',
    },
    paper: {
        background: "#2d2d2d"
    }
});


const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 600,
            delay: 100,
            smooth: true,
            offset: -30
        });
        props.onClose(false)
    }

    const classes = useStyles();
    return (
        <Drawer
            classes={{ paper: classes.paper }}
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}>

            <List className={classes.list} component="nav">
                <ListItem button style={{ color: 'white' }} onClick={() => scrollToElement('home')}>
                    Home
                </ListItem>
                <ListItem button style={{ color: 'white' }} onClick={() => scrollToElement('about')}>
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

        </Drawer>
    )
}

export default SideDrawer;

