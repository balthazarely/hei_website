import Carousel from "nuka-carousel"
import Fruit1 from '../../../resources/imgs/hanger2.jpg'
import Fruit2 from '../../../resources/imgs/hanger2.1.jpg'
import Fruit3 from '../../../resources/imgs/hanger2.2.jpg'
import Fruit4 from '../../../resources/imgs/hanger2.3.jpg'
import Fruit5 from '../../../resources/imgs/hanger2.4.jpg'
import Fruit6 from '../../../resources/imgs/hanger2.5.jpg'
import Fruit7 from '../../../resources/imgs/hanger2.6.jpg'
import React, { Component } from 'react'




export default class NukaCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <div className="imageBox" style={{
                        backgroundImage: `url(${Fruit1})`,
                    }}>
                    </div>
                    <div className="imageBox" style={{
                        backgroundImage: `url(${Fruit2})`,
                    }}>
                    </div>
                    <div className="imageBox" style={{
                        backgroundImage: `url(${Fruit3})`,
                    }}>
                    </div>
                    <div className="imageBox" style={{
                        backgroundImage: `url(${Fruit4})`,
                    }}>
                    </div>
                    <div className="imageBox" style={{
                        backgroundImage: `url(${Fruit5})`,
                    }}>
                    </div>
                    <div className="imageBox" style={{
                        backgroundImage: `url(${Fruit6})`,
                    }}>
                    </div>
                    <div className="imageBox" style={{
                        backgroundImage: `url(${Fruit7})`,
                    }}>
                    </div>
                </Carousel>
            </div>
        )
    }
}












// import React from 'react'
// import Carousel from "nuka-carousel"
// import { makeStyles } from '@material-ui/core/styles';

// import Fruit1 from '../../../resources/imgs/fruitdale.jpg'
// import Fruit2 from '../../../resources/imgs/fruitdale2.jpg'
// import Fruit3 from '../../../resources/imgs/fruitedale1.jpg'
// import Fruit4 from '../../../resources/imgs/fruitdale4.jpg'

// import React, { Component } from 'react'

// export default class NukaCarousel extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }


// const useStyles = makeStyles(theme => ({
//     imageBox: {
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         overflow: "hidden",
//         height: "550px",
//         width: "auto",
//         // width: `${window.innerHeight / 2}px`,
//         backgroundRepeat: "no-repeat"
//     }
// }));


// export default function NukaCarousel() {
//     const classes = useStyles();

//     return (
//         <div>
//             <Carousel>
//                 <div className={classes.imageBox} style={{
//                     backgroundImage: `url(${Fruit1})`,
//                 }}>
//                 </div>
//                 <div className={classes.imageBox} style={{
//                     backgroundImage: `url(${Fruit2})`,
//                 }}>
//                 </div>
//                 <div className={classes.imageBox} style={{
//                     backgroundImage: `url(${Fruit3})`,
//                 }}>
//                 </div>


//             </Carousel>
//         </div>
//     )
//}

