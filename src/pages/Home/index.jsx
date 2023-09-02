import { useState, useEffect } from "react";
import { register } from "swiper/element/bundle";
register();
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { api } from "../../services/api";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { FoodCard } from "../../components/FoodCard";
import { Footer } from "../../components/Footer";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [slidePerview, setSlidePerview] = useState("");

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes`);
      setDishes(response.data);
    }

    fetchDishes();
  }, [setDishes]);

  useEffect(() => {
    function handleSize() {
      if (window.innerWidth < 768) {
        setSlidePerview(1);
      } else if (window.innerWidth < 1024) {
        setSlidePerview(3);
      } else {
        setSlidePerview(4);
      }
    }

    handleSize();
  }, []);

  return (
    <Container>
      <Header />
      <Banner />

      <div className="carousel_wrapper">
        <Section title="Refeições">
          <Swiper
            slidesPerView={slidePerview}
            pagination={{ clickable: true }}
            navigation
          >
            {dishes.map((dish) => (
              <SwiperSlide key={dish.id}>
                <FoodCard
                  data={dish}
                  name={dish.name}
                  image={`${api.defaults.baseURL}/files/${dish.image}`}
                  description={dish.description}
                  price={dish.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
      </div>

      <div className="carousel_wrapper">
        <Section title="Sobremesas">
          <Swiper
            slidesPerView={slidePerview}
            pagination={{ clickable: true }}
            navigation
          >
            {dishes.map((dish) => (
              <SwiperSlide key={dish.id}>
                <FoodCard
                  data={dish}
                  name={dish.name}
                  image={`${api.defaults.baseURL}/files/${dish.image}`}
                  description={dish.description}
                  price={dish.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
      </div>

      <div className="carousel_wrapper">
        <Section title="Bebidas">
          <Swiper
            slidesPerView={slidePerview}
            pagination={{ clickable: true }}
            navigation
          >
            {dishes.map((dish) => (
              <SwiperSlide key={dish.id}>
                <FoodCard
                  data={dish}
                  name={dish.name}
                  image={`${api.defaults.baseURL}/files/${dish.image}`}
                  description={dish.description}
                  price={dish.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
      </div>

      <Footer />
    </Container>
  );
}
