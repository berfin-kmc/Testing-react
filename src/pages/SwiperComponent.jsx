
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';



import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';


export default function SwiperComponent({ sliderData }) {


  const swiperElements = sliderData.map((slider, i) => {
    return <SwiperSlide className='swiper-slide' key={i} > 
    <div className='slider-inner'>
    <h2 className='slider-title'>
      {slider.alt}
    </h2>
    <p>{slider.text}</p>
    <Link to={slider.linkUrl}>
      {slider.linkTitle}
    </Link>
    </div>
    </SwiperSlide>
  })

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      {swiperElements}

    </Swiper>
  );
};