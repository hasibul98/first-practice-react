import React from "react";
import CowContent from '../content/cowContent';
import Seo from '../content/seo/Seo';
import Graphics from '../content/graphics/Graphics';
import Blog from '../content/blog/Blog';


const contentDAta= [
    {
        id: 1,
        imge: <img src='./img/22f8a7c.jpg' className="imgData"  alt=""></img>,

        title: "thisistitle1",
        des: <CowContent />
    },
    {
        id: 2,
        imge: <img src='./img/22f8a7c.jpg' className="imgData"  alt=""></img>,
        // imge: require('../img/107b043779b486ca9a82482870c0f930.jpg').default,
        title: "thisistitle2",
        des: <Seo />
    },
    {
        id: 3,
        imge: <img src='./img/22f8a7c.jpg' className="imgData"  alt=""></img>,

        title: "thisistitle3",
        des: <Graphics />
    },
    {
        id: 4,
        imge: <img src='./img/22f8a7c.jpg' className="imgData"  alt=""></img>,

        title: "thisistitle4",
        des: <Blog />
    }
];
export default contentDAta;