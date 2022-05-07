import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, Carousel,  } from 'react-bootstrap';
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from '@react-hook/window-size';
import Skeleton from '../../Skeleton';


const Slider = ({sliderImages}) => {

  const sliders = [{url: "gz58WHM/slider-2-Slider.png"}, {url: "kmh4C7M/Slider-3.png"}, {url: "NmYQ82S/Eay-Glass-Slider.jpg"}]

    const [width, height] = useWindowSize()
    const onlyWidth = useWindowWidth()
    const onlyHeight = useWindowHeight()


  const myLoader = ({ src, width, quality }) => {
    return `https://i.ibb.co/${src}`
  }
    return (
     <div className="Slider-component">

    <div className="slider-image">
    <Carousel controls={false} className="Slider">

    {
    sliders.map (sImg => 
      <Carousel.Item key={sImg.url}  interval={3000}>
     <span className="d-block w-100">

              <Image
         src={sImg.url}
         alt="First slide"
         loader={myLoader}
         width={2000}
         height={700}
       />

     </span>
        {/* <Carousel.Caption>
    
        </Carousel.Caption> */}
      </Carousel.Item>
     ) }
    </Carousel>
    </div> 
     </div>
    );
};

export default Slider;