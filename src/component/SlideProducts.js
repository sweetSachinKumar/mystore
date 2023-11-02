import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product from './Product';
import { useSelector } from 'react-redux';
import './slideProduct.css'
import Loading from './Loading';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background:"#3184b4",borderRadius:"50%", display:"block", width:"20px",height:"19px",objectFit:"cover"}}
      onClick={onClick}
    />
  );
}


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background:"#3184b4",borderRadius:"50%", display:"block", width:"20px",height:"19px",objectFit:"cover"}}
      onClick={onClick}
    />
  );
}


const SlideToSlick = (props) => {
  const myproductStatus = useSelector(state => state.myProduct)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };



      // nextArrow: <SampleNextArrow/>,
      // prevArrow: <SamplePrevArrow/>
  return (
   
    <section className='py-6 px-2 container mx-auto'>
    <div className='flex justify-between items-center w-[80%] mx-auto'>
      <h2 className='mx-4 pe-6 my-14 lg:text-4xl text-2xl font-light border-b-2 border-orange-400 inline-block'> {props.title}</h2>
     

    </div>
    <div className='myslider'>
    <Slider {...settings}>
      {props.mensProduct?.map(product => <Product product={product} />)}
</Slider>

    </div>
  </section>
  )
}

export default SlideToSlick
