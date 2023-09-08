import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "swiper/element/bundle";
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
register();

export function Home() {
  const [dishes, setDishes] = useState({ meals: [], desserts: [], drinks: [] });
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [slidePerview, setSlidePerview] = useState("");

  function detailsDish(dish_id) {
    navigate(`/dishes/${dish_id}`);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);

      const meals = response.data.filter(
        (dish) => dish.category === "Refeições"
      );
      const desserts = response.data.filter(
        (dish) => dish.category === "Sobremesas"
      );
      const drinks = response.data.filter(
        (dish) => dish.category === "Bebidas"
      );

      setDishes({ meals, desserts, drinks });
    }

    fetchDishes();
  }, [search, setDishes]);

  useEffect(() => {
    function handleSize() {
      if (window.innerWidth < 768) {
        setSlidePerview(2);
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
      <Header setSearch={setSearch} />
      <Banner />

      <main>
      <div className="carousel_wrapper">
        <Section title="Refeições">
          <Swiper slidesPerView={slidePerview} navigation>
            {dishes.meals.map((dish) => (
              <SwiperSlide key={dish.id}>
                <FoodCard
                  data={dish}
                  name={dish.name}
                  image={`${api.defaults.baseURL}/files/${dish.image}`}
                  description={dish.description}
                  price={dish.price}
                  detailsDish={detailsDish}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
      </div>

      <div className="carousel_wrapper">
        <Section title="Sobremesas">
          <Swiper slidesPerView={slidePerview} navigation>
            {dishes.desserts.map((dish) => (
              <SwiperSlide key={dish.id}>
                <FoodCard
                  data={dish}
                  name={dish.name}
                  image={`${api.defaults.baseURL}/files/${dish.image}`}
                  description={dish.description}
                  price={dish.price}
                  detailsDish={detailsDish}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
      </div>

      <div className="carousel_wrapper">
        <Section title="Bebidas">
          <Swiper slidesPerView={slidePerview} navigation>
            {dishes.drinks.map((dish) => (
              <SwiperSlide key={dish.id}>
                <FoodCard
                  data={dish}
                  name={dish.name}
                  image={`${api.defaults.baseURL}/files/${dish.image}`}
                  description={dish.description}
                  price={dish.price}
                  detailsDish={detailsDish}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
      </div>
      </main>

      <Footer />
    </Container>
  );
}
