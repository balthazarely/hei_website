
import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

import Fruitdale from '../../../resources/imgs/fruitdale.jpg'
import Text from './Text';



class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLargeBG: true,
            imageOpacity: false
        };
    }


    componentDidMount = () => {
        window.addEventListener('scroll', this.HandelScroll);
        if (window.innerWidth <= 800) {
            this.setState({ showLargeBG: false })
            console.log("this window is small AF")
        }
        window.addEventListener('resize', () => {
            if (window.inner <= 800) {
                this.setState({ showLargeBG: false })
            } else {
                this.setState({ showLargeBG: true })
                console.log("this window is FUCKING huge")
            }
        });
    }

    HandelScroll = () => {
        if (window.scrollY < 200) {
            this.setState({
                imageOpacity: false
            })
        } else {
            this.setState({
                imageOpacity: true
            })
        }
    }


    render() {
        return (

            <div className="heroImageBase">
                <LazyHero className="responsive-image-bg" style={{ height: "100vh" }}
                    isFixed="true"
                    opacity=".2"
                    color="#2d2d2d"
                    parallaxOffset="100"
                    transitionDuration="600"
                    transitionTimingFunction="ease-in-out"
                    imageSrc={Fruitdale}>
                    <div className="HeroImageOverlay "
                        style={{
                            opacity: this.state.imageOpacity ? ".9" : "0",

                        }}>
                    </div>
                    <Text />
                </LazyHero>
            </div>


        )
    }
}

export default Featured;
