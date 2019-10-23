import React, { Component } from 'react';
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import MyButton from '../../UI/MyButton'
import AwesomeSlider from 'react-awesome-slider';
import Fruitdale from '../../../resources/imgs/fruitdale.jpg'
import SteamPlant from '../../../resources/imgs/steamplant3.jpg'
import Hanger2 from '../../../resources/imgs/hanger2.jpg'
import Headline from './Headline';
import LazyHero from 'react-lazy-hero';



class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLargeBG: true
        };
    }


    componentDidMount = () => {
        if (window.innerWidth <= 600) {
            this.setState({ showLargeBG: false })
            console.log("this window is small AF")
        }
        window.addEventListener('resize', () => {
            if (window.inner <= 600) {
                this.setState({ showLargeBG: false })
            } else {
                this.setState({ showLargeBG: true })
                console.log("this window is FUCKING huge")
            }
        });
    }

    render() {
        return (

            <div>

                {this.state.showLargeBG ?
                    <LazyHero style={{

                        height: `${window.innerHeight}px`
                    }}
                        isFixed="true"
                        opacity=".2"
                        color="#2d2d2d"
                        parallaxOffset="100"
                        transitionDuration="600"
                        transitionTimingFunction="ease-in-out"
                        imageSrc={Fruitdale}>
                        <div style={{
                            position: "relative",
                            top: "50px"
                        }}>

                        </div>
                        <Headline textSize="56px" />
                    </LazyHero>


                    :
                    <div>
                        <LazyHero style={{

                            height: "200px"
                        }}
                            isFixed="true"
                            opacity=".2"
                            color="#2d2d2d"
                            parallaxOffset="100"
                            transitionDuration="600"
                            transitionTimingFunction="ease-in-out"
                            imageSrc={Fruitdale}>
                            <div style={{
                                position: "relative",
                                top: "50px"
                            }}>

                            </div>
                            <Headline textSize="36px" />

                        </LazyHero>

                        {/* ... */}
                    </div>
                }




            </div>


        )
    }
}

export default Featured;





// import React, { Component } from 'react';
// import Slider from "react-slick";
// import Fade from "react-reveal/Fade";
// import MyButton from '../../UI/MyButton'

// import Fruitdale from '../../../resources/imgs/fruitdale.jpg'
// import SteamPlant from '../../../resources/imgs/steamplant3.jpg'
// import Hanger2 from '../../../resources/imgs/hanger2.jpg'
// import Headline from './Headline';



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
//                     <div
//                         style={{
//                             background: `url(${Fruitdale})`,
//                             width: "100%",
//                             height: `${window.innerHeight}px`,
//                             backgroundSize: "cover",
//                             backgroundPosition: "center center"


//                             // height: `${window.innerHeight}px`,
//                             // maxWidth: "100%",
//                             // backgroundSize: "cover",
//                             // backgroundRepeat: "no-repeat"
//                         }}>
//                         <Fade top delay={500} >
//                             <div style={{
//                                 width: "600px",
//                                 height: "400px",
//                                 position: "absolute",
//                                 top: "0",
//                                 bottom: "0",
//                                 left: "0",
//                                 right: "0",
//                                 textAlign: "center",
//                                 margin: "auto"


//                             }}>
//                                 <div style={{
//                                     position: "relative",
//                                     float: "left",
//                                     top: "50%",
//                                     left: "50%",
//                                     transform: "translate(-50%, -50%)",
//                                     color: 'white',
//                                     textShadow: '2px 2px #000000',
//                                     fontSize: "56px",
//                                     lineHeight: "56px",
//                                     textTransform: "uppercase",
//                                     fontWeight: "800",
//                                     letterSpacing: "2px",
//                                     textShadow: "2px 2px 3px rgba(0,0,0,0.58)"
//                                 }}>Creating Sustainable Commmunitiest</div>

//                             </div>
//                         </Fade>

//                     </div>

//                     :
//                     <div
//                         style={{
//                             background: `url(${Fruitdale})`,
//                             width: "100%",
//                             height: `${window.innerHeight / 3}px`,
//                             backgroundSize: "cover",
//                             backgroundPosition: "center center"


//                             // height: `${window.innerHeight}px`,
//                             // maxWidth: "100%",
//                             // backgroundSize: "cover",
//                             // backgroundRepeat: "no-repeat"
//                         }}>
//                         {/* <div style={{
//                             width: `${window.innerWidth}px`,
//                             height: "400px",
//                             position: "absolute",
//                             top: "0",
//                             bottom: "0",
//                             left: "0",
//                             right: "0",
//                             textAlign: "center",
//                             margin: "auto"


//                         }}>
//                             <div style={{
//                                 position: "relative",
//                                 float: "left",
//                                 top: "50%",
//                                 left: "50%",
//                                 transform: "translate(-50%, -50%)",
//                                 color: 'white',
//                                 textShadow: '2px 2px #000000',
//                                 fontSize: "28px",
//                                 lineHeight: "28px",
//                                 textTransform: "uppercase",
//                                 fontWeight: "800",
//                                 letterSpacing: "2px",
//                                 textShadow: "2px 2px 3px rgba(0,0,0,0.58)"
//                             }}>Creating Sustainable Commmunitiest</div>

//                         </div> */}
//                     </div>}




//             </div>


//         )
//     }
// }

// export default Featured;
