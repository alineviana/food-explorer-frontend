import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { Container } from "./style";
import { Counter } from "../Counter";
import { ButtonText } from "../ButtonText";
import { VscChevronRight } from "react-icons/vsc";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

export function FoodCard({
  data,
  image,
  name,
  description,
  price,
  detailsDish,
  ...rest
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);

  async function handleFavorite(id) {
    try {
      if (isFavorite) {
        await removeFavorite(id);
      } else {
        await api.post("/favorites", { user_id: user.id, dish_id: data.id });
        setIsFavorite(true);
      }
    } catch (error) {
      alert("Erro ao adicionar ou remover prato dos favoritos!");
    }
  }

  async function removeFavorite(id) {
    try {
      await api.delete(`/favorites/${user.id}/${id}`);
      setIsFavorite(false);
    } catch (error) {
      alert("Erro ao remover o prato dos favoritos!");
    }
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  async function addDish(quantity) {
    await api.post("/order", {
      name: data.name,
      quantity: quantity,
      total_price: (Number(data.price) * Number(quantity)),
      dish_id: data.id,
      user_id: user.id,
    });

    // setDishInList();
    alert("O prato foi adicionado ao carrinho!");
  }

  // async function setDishInList() {
  //   const response = await api.get(`/order/${user.id}`);
    
  //   const applicationLength = response.data.length;

  //   localStorage.setItem("@foodexplorer:applicationLength", applicationLength);
  // }

  useEffect(() => {
    async function checkFavorite() {
      try {
        const response = await api.get(
          `/favorites/check?user_id=${user.id}&dish_id=${data.id}`
        );
        setIsFavorite(response.data.isFavorite);
      } catch (error) {
        alert("Erro ao buscar os pratos adicionados aos favoritos.");
      }
    }

    async function fetchFavoriteId() {
      try {
        const response = await api.get(`/favorites?user_id=${user.id}`);

        if (response.data.length > 0) {
          setFavoriteId(response.data[0].id);
        }
      } catch (error) {
        alert("Erro ao buscar o id do prato adicionado aos favoritos!");
      }
    }

    if (user) {
      checkFavorite();
      fetchFavoriteId();
    }
  }, [data.id, user]);

  return (
    <Container {...rest}>
      <button className="heart">
        {isFavorite ? (
          <IoIosHeart
            className="heart_fill"
            onClick={() => handleFavorite(favoriteId)}
          />
        ) : (
          <IoIosHeartEmpty onClick={() => handleFavorite(favoriteId)} />
        )}
      </button>

      <img src={image} alt={name} onClick={() => detailsDish(data.id)} />

      <h3>
        {name}
        <VscChevronRight />
      </h3>

      <p className="description" onClick={() => detailsDish(data.id)}>
        {description}
      </p>

      <p className="price" onClick={() => detailsDish(data.id)}>
        {Number(price).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <div className="buttons">
        <Counter 
          quantity={quantity} 
          decrement={handleDecrement}
          increment={handleIncrement} 
        />
          <ButtonText title="incluir" onClick={() => {addDish(quantity)}} />
      </div>
    </Container>
  );
}
