import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ padding: "50px" }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo" style={{ color: "#dddddd" }}>Hartman Ely Investments</div>
                <div className="footer_copyright" style={{ color: "#dddddd" }}>
                    Hartman Ely Investments 2019. All Rights Reserved
                    </div>

            </Fade>
        </footer>

    )
}

export default Footer;