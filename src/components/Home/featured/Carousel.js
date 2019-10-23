// import React, { Component } from 'react';
// import Slider from "react-slick";
// import Fade from "react-reveal/Fade";
// import MyButton from '../../UI/MyButton'
// import AwesomeSlider from 'react-awesome-slider';
// import Fruitdale from '../../../resources/imgs/fruitdale.jpg'
// import SteamPlant from '../../../resources/imgs/steamplant3.jpg'
// import Hanger2 from '../../../resources/imgs/hanger2.jpg'
// import Headline from './Headline';
// import LazyHero from 'react-lazy-hero';



// class Featured extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showLargeBG: true
//         };
//     }


//     componentDidMount = () => {
//         if (window.innerWidth <= 600) {
//             this.setState({ showLargeBG: false })
//             console.log("this window is small AF")
//         }
//         window.addEventListener('resize', () => {
//             if (window.inner <= 600) {
//                 this.setState({ showLargeBG: false })
//             } else {
//                 this.setState({ showLargeBG: true })
//                 console.log("this window is FUCKING huge")
//             }
//         });
//     }

//     render() {
//         return (

//             <div>

//                 {this.state.showLargeBG ?
//                     <LazyHero style={{

//                         height: `${window.innerHeight}px`
//                     }}
//                         isFixed="true"
//                         opacity=".2"
//                         color="#2d2d2d"
//                         parallaxOffset="100"
//                         transitionDuration="600"
//                         transitionTimingFunction="ease-in-out"
//                         imageSrc={Fruitdale}>
//                         <div style={{
//                             position: "relative",
//                             top: "50px"
//                         }}>

//                         </div>
//                         <Headline textSize="56px" />
//                     </LazyHero>


//                     :
//                     <div>
//                         <LazyHero style={{

//                             height: "200px"
//                         }}
//                             isFixed="true"
//                             opacity=".2"
//                             color="#2d2d2d"
//                             parallaxOffset="100"
//                             transitionDuration="600"
//                             transitionTimingFunction="ease-in-out"
//                             imageSrc={Fruitdale}>
//                             <div style={{
//                                 position: "relative",
//                                 top: "50px"
//                             }}>

//                             </div>
//                             <Headline textSize="36px" />

//                         </LazyHero>

//                         {/* ... */}
//                     </div>
//                 }




//             </div>


//         )
//     }
// }

// export default Featured;





import React, { Component } from 'react';
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import MyButton from '../../UI/MyButton'
import Container from '@material-ui/core/Container';
import LazyHero from 'react-lazy-hero';

import Fruitdale from '../../../resources/imgs/fruitdale.jpg'
import SteamPlant from '../../../resources/imgs/steamplant3.jpg'
import Hanger2 from '../../../resources/imgs/hanger2.jpg'
import Headline from './Headline';
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
        if (window.scrollY < 420) {
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
                            opacity: this.state.imageOpacity ? ".8" : "0",
                            transform: " opacity 0.6s ease-out, transform 1.2s ease-out"

                        }}> </div>
                    <Text />
                </LazyHero>



                {/* <div className="responsive-image-bg"
                    //     style={{
                    //         background: `url(${Fruitdale})`,
                    //         width: "100%",
                    //         backgroundSize: "cover",
                    //         backgroundPosition: "center center"
                    //     }}>




                        {/* <Fade top delay={500} >
                            <div style={{
                                width: "600px",
                                height: "400px",
                                position: "absolute",
                                top: "0",
                                bottom: "0",
                                left: "0",
                                right: "0",
                                textAlign: "center",
                                margin: "auto"


                            }}>
                                <Container style={{
                                    position: "relative",
                                    float: "left",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: 'white',
                                    textShadow: '2px 2px #000000',
                                    fontSize: "56px",
                                    lineHeight: "56px",
                                    textTransform: "uppercase",
                                    fontWeight: "800",
                                    letterSpacing: "2px",
                                    textShadow: "2px 2px 3px rgba(0,0,0,0.58)"
                                }}>Creating Sustainable Commmunitiest
                                </Container>

                            </div>
                        </Fade> */}

                {/* </div> */}



            </div>


        )
    }
}

export default Featured;
