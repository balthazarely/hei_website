import React from 'react';

import Infomation from './Infomation'
import LazyHero from 'react-lazy-hero';
import Fruitdale from '../../../resources/imgs/fruitdale.jpg'

const Contact = () => {
    return (
        <div>
            <LazyHero style={{

                height: `${window.innerHeight / 2}px`
            }}
                isFixed="true"
                opacity=".8"
                color="#2d2d2d"
                // parallaxOffset="100"
                // transitionDuration="600"
                transitionTimingFunction="ease-in-out"
                imageSrc={Fruitdale}>
                {/* <Infomation /> */}
                {/* https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg */}
            </LazyHero>

            {/* ... */}
        </div>
    )
}

export default Contact;
