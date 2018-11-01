import React from 'react'
import Slick from 'react-slick';
import style from './slider.css'
import { Link } from 'react-router-dom'

const SliderTemplates = (props) => {
    let template = null
    //slick slider template settings
    const settings = {
        dots:true,
        infinite:true,
        arrows:false,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        ...props.settings
    } 
    switch(props.type){
        //use switch statement to check for case to render
        case ('featured'):
        //maps through data gotten from props when called
         template = props.data.map((item, i) => {
             return(
                 <div key={i}>
                    <div className={style.featured_item}>
                        <div className={style.featured_image}
                        style={{
                            background:`url(../images/articles/${item.image})`
                        }}>
                        <Link to={`/articles/${item.id}`}>
                        <div className={style.featured_caption}>
                            {item.title}
                        </div>
                        </Link>
                        </div>
                    </div>
                 </div>
             )
         }) 
        break;
        default:
        template = null
    }

    return(
        <Slick {...settings}>
        {template}
        </Slick>
    )
}
export default SliderTemplates
  

