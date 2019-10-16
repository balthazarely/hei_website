import React from 'react';
import Fade from 'react-reveal/Zoom';

import icon_calandar from '../../../resources/icons/calendar.png'
import icon_location from '../../../resources/icons/location.png'


const Blocks = () => {
    return (
        <div className="">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Fade left>
                        <div style={{
                            width: "280px",
                            display: 'inline-block',
                            padding: "10px"
                        }}>
                            <h3>"Results speak for themselves!"</h3>
                            <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nisi veritatis laudantium libero fuga hic quia vitae
                            illum accusantium eaque. Repudiandae.</i></p>
                        </div>
                    </Fade>
                    <Fade left delay={500}>
                        <div style={{
                            width: "280px",
                            display: 'inline-block',
                            padding: "10px"
                        }}>
                            <h3>"Our clients we're beyond happy!"</h3>
                            <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nisi veritatis laudantium libero fuga hic quia vitae
                            illum accusantium eaque. Repudiandae.</i></p>
                        </div>
                    </Fade>
                    <Fade left delay={1000}>
                        <div style={{
                            width: "280px",
                            display: 'inline-block',
                            padding: "10px"
                        }}>
                            <h3>"What a service!"</h3>
                            <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nisi veritatis laudantium libero fuga hic quia vitae
                            illum accusantium eaque. Repudiandae.</i></p>
                        </div>
                    </Fade>






                </div>
            </div>
        </div>
    )
}

export default Blocks;