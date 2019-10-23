import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button: {
        marginLeft: "-10px",
        color: "red"
    },

}));

const MyButtonSmall = (props) => {
    const classes = useStyles();
    return (
        <IconButton className={classes.button} aria-label="delete">
            <ArrowForwardIcon />
        </IconButton>
    )
}

export default MyButtonSmall;





