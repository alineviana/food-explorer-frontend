import { useState, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { api } from "../../services/api";
import { Container } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { FoodCard } from "../../components/FoodCard";
import { Footer } from "../../components/Footer";
register();

export function Home() {
  const [dishes, setDishes] = useState({ meals: [], desserts: [], drinks: [] });
  const [slidePerview, setSlidePerview] = useState("");

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes`);

      const meals = response.data.filter(dish => dish.category === "Refeições");
      const desserts = response.data.filter(dish => dish.category === "Sobremesas");
      const drinks = response.data.filter(dish => dish.category === "Bebidas");

      setDishes({ meals, desserts, drinks });
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
      <HeaderAdmin />
      <Banner />

      <div className="carousel_wrapper">
        <Section title="Refeições">
          <Swiper
            slidesPerView={slidePerview}
            navigation
          >
            {dishes.meals.map((dish) => (
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
            navigation
          >
            {dishes.desserts.map((dish) => (
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
            navigation
          >
            {dishes.drinks.map((dish) => (
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
