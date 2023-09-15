import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Container, Link } from "./styles";
import { Header } from "../../components/Header";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

export function Favorites() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const { user } = useAuth();

  function handleBack() {
    navigate(-1);
  }

  async function removeFavorites(id) {
    await api.delete(`/favorites/${user.id}/${id}`);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== id)
    );
  }

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get(`/favorites?user_id=${user.id}`);
      setFavorites(response.data);
    }
    fetchFavorites();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <Link>
          <PiCaretLeft />
          <ButtonText title="voltar" onClick={handleBack} />
        </Link>

        <Section className="my_favorites" title="Meus favoritos">
          <div className="dishes_wrapper">
            {favorites.length > 0 ? (
              <>
                {favorites.map((favorite) => {
                  return (
                    <div className="info_dish" key={favorite.id}>
                      <img
                        src={`${api.defaults.baseURL}/files/${favorite.image}`}
                        alt={favorite.name}
                      />

                      <div className="info_wrapper">
                        <h3>{favorite.name}</h3>
                        <button onClick={() => removeFavorites(favorite.id)}>
                          Remover dos Favoritos
                        </button>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <p>Nenhum prato, sobremesa ou bebida foi adicionado aos favoritos.</p>
            )}
          </div>
        </Section>
      </main>

      <Footer />
    </Container>
  );
}
