import React from 'react';
import Text from './Text2';
import LazyHero from 'react-lazy-hero';

import Pancratia from '../../../resources/imgs/Pancratia.jpg'

export default function Album() {


    return (
        <div>
            <LazyHero className="responsive-image-bg"
                isFixed="true"
                opacity=".8"
                color="#2d2d2d"
                parallaxOffset="0"
                transitionDuration="0"
                transitionTimingFunction="ease-in-out"
                imageSrc={Pancratia}>
                <Text />
            </LazyHero>
        </div>
    );
}