import React from 'react';
import Text from './Text';

import LazyHero from 'react-lazy-hero';
import Steamplant from '../../../resources/imgs/steamplant4.jpg'

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
                imageSrc={Steamplant}>
                <div style={{
                    position: "relative",
                    top: "50px"
                }}>
                    <Text />
                </div>
            </LazyHero>
        </div>
    )
}

export default HeroImage;
