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
