import { Container } from "./style";
import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../Card';

export function Carousel() {

  const data = [
    {id: '1', image: '../../src/assets/ravanello.svg'},
    {id: '2', image: '../../src/assets/gambe.svg'},
    {id: '3', image: '../../src/assets/gambe.svg'},
    {id: '4', image: '../../src/assets/gambe.svg'},
    {id: '5', image: '../../src/assets/gambe.svg'},
  ]

  return (
    <Container>
      <h2>Refeições</h2>
        <Swiper
          slidesPerView={2}
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
