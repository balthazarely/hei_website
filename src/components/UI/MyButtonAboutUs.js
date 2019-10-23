import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/icons/ticket.png';

const MyButtonAboutUs = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size='small'
            style={{
                background: props.bck,
                color: props.color
            }}
        >
            {props.text}
            <ArrowForwardIcon style={{ height: "14px" }} />

        </Button>
    )
}

export default MyButtonAboutUs;

