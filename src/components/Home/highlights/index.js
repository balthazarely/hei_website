import React from 'react';
import Fade from "react-reveal/Fade";
import Blocks from './Blocks';

// import Discount from './Discount';

const Highlights = () => {
    return (
        <div className="highlight_wrapper extra-bottom-padding">
            <h2>Shows on your Schedule</h2>
            <Fade right delay={500}>
                <div className="center_wrapper">
                    <div className='highlight_description'>
                        <div className='redbox'></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quam tempore atque ducimus nemo ullam, eum distinctio quos
                            saepe totam facere obcaecati, corrupti, nihil itaque earum?
                            Quasi, unde odit perspiciatis velit dolore rerum impedit at
                            facilis deleniti blanditiis animi et eos. </p>
                    </div>
                </div>
            </Fade>
            <Blocks />
        </div>
    );
};

export default Highlights;