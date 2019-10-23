import React from 'react';
import Headline from './Headline'
import Text from './text'
import OurTeam from './OurTeam'

import LazyHero from 'react-lazy-hero';
import Historic from '../../resources/imgs/Pancratia.jpg'

const About = () => {
    return (
        <div>
            <LazyHero style={{

                height: `${window.innerHeight / 2}px`,
            }}
                isFixed="true"
                opacity=".2"
                color="#2d2d2d"
                parallaxOffset="100"
                transitionDuration="600"
                transitionTimingFunction="ease-in-out"
                imageSrc={Historic}>
                <Headline />
            </LazyHero>
            <Text />
            <OurTeam />
        </div>
    )
}

export default About;


