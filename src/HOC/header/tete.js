import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';


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
    const classes = useStyles();
    return (
        <Drawer
            classes={{ paper: classes.paper }}
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}>

            <List className={classes.list}>
                <ListItem style={{ color: 'white' }}>
                    About
                </ListItem>
                <ListItem style={{ color: 'white' }}>
                    Projects
                </ListItem>
                <ListItem style={{ color: 'white' }}>
                    Portfolio
                </ListItem>
                <ListItem style={{ color: 'white' }}>
                    Contact
                </ListItem>
                <ListItem style={{ color: 'white' }}>
                    Press
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideDrawer;