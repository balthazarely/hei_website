import React from 'react';
import Headline from './Headline';

import LazyHero from 'react-lazy-hero';
import Fruitdale from '../../../resources/imgs/fruitdale.jpg'

const Featured = () => {
    return (
        <div>
            <LazyHero style={{

                height: `${window.innerHeight}px`
            }}
                isFixed="true"
                opacity="0"
                parallaxOffset="100"
                transitionDuration="600"
                transitionTimingFunction="ease-in-out"
                imageSrc={Fruitdale}>
                <Headline />

                {/* https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg */}
            </LazyHero>

            {/* ... */}
        </div>
    )
}

export default Featured;



// import React from 'react';
// import Headline from './Headline';
// import slide_one from '../../resources/imgs/image_3.jpg';



// const Featured = () => {
//     return (
//         <div>
//             <div style={{
//                 background: `url(${slide_one})`,
//                 backgroundSize: "cover",
//                 height: `${window.innerHeight}px`
//             }}>
//             </div>
//             <Headline />
//         </div>
//     )
// }

// export default Featured;