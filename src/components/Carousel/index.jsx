import { Container } from "./style";
import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../Card';
import { useState, useEffect } from "react";

export function Carousel({ title, ...rest }) {

  const [slidePerview, setSlidePerview] = useState('');

  useEffect(() => {
    
    function handleSize() {
      
      if(window.innerWidth < 768) {
        setSlidePerview(1);
      } else if (window.innerWidth < 1024) {
        setSlidePerview(3);
      } else {
        setSlidePerview(4);
      }
    }

    handleSize();
  
  }, [])

  const data = [
    {id: '1', image: '../../src/assets/ravanello.svg'},
    {id: '2', image: '../../src/assets/gambe.svg'},
    {id: '3', image: '../../src/assets/gambe.svg'},
    {id: '4', image: '../../src/assets/gambe.svg'},
    {id: '5', image: '../../src/assets/gambe.svg'},
  ]

  return (
    <Container>
        <Swiper
          slidesPerView={slidePerview}
          pagination={{ clickable: true }}
          navigation
          >
          {
            data.map((item) => (
              <SwiperSlide key={item.id}>
                <Card />
              </SwiperSlide>
            ))
          }
        </Swiper>
    </Container>
  );
}
