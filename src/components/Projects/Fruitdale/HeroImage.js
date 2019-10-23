import React from 'react';
import Text from './Text';

import LazyHero from 'react-lazy-hero';
import Fruitdale from '../../../resources/imgs/fruitdale.jpg'
import { relative } from 'path';

const HeroImage = () => {
    return (
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
                    <Text />
                </div>


                {/* https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg */}
            </LazyHero>

            {/* ... */}
        </div>
    )
}

export default HeroImage;

// import React from "react";
// import Slider from "react-slick";

// import Fruit1 from '../../../resources/imgs/fruitdale.jpg'
// import Fruit2 from '../../../resources/imgs/fruitdale2.jpg'
// import Fruit3 from '../../../resources/imgs/fruitedale1.jpg'
// import Fruit4 from '../../../resources/imgs/fruitdale4.jpg'

// const HeroImage = () => {

//     const settings = {
//         dots: false,
//         infinite: true,
//         autoplay: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };
//     return (
//         <div>

//             <Slider {...settings}>
//                 <div>
//                     <div className="carrousel_image"
//                         style={{
//                             background: `url(${Fruit1})`,
//                             height: "400px",
//                             backgroundPosition: "center",
//                             objectPosition: "100px"
//                         }}>
//                     </div>
//                 </div>
//             </Slider>
//         </div>
//     );
// }
// export default HeroImage;