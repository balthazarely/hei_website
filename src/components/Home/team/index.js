import React from 'react';
import Text from './Text2';
import Carrousel from './Carrousel';
import LazyHero from 'react-lazy-hero';

import Pancratia from '../../../resources/imgs/Pancratia.jpg'

export default function Album() {


    return (
        <div >

            <LazyHero className="responsive-image-bg"
                isFixed="true"
                opacity=".8"
                color="#2d2d2d"
                parallaxOffset="0"
                transitionDuration="0"
                transitionTimingFunction="ease-in-out"
                imageSrc={Pancratia}>
                <Text />
                {/* https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg */}
            </LazyHero>

            {/* <Text /> */}

            {/* <Carrousel /> */}

        </div>
    );
}