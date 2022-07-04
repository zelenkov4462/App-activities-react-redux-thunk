import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/UI/Button/Button";

import styles from "./FavoritePage.module.scss";
import { removeFavoriteCardAction } from "../../redux/CardFavoriteReducer";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favoriteCards = useSelector(
    (state) => state.favoriteCards.favoriteCards
  );

  const removeFavCard = (card) => {
    dispatch(removeFavoriteCardAction(card.key));
  };

  if (!favoriteCards.length) {
    return (
      <div>
        <h1> Избранных постов нет</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 style={{ color: "orange" }}> Favorite cards</h1>
      {favoriteCards.map((card, index) => (
        <div className={styles.favItem} key={card.key}>
          <li>
            <div>
              {index + 1}. {card.activity}
              <h3>type: {card.type}</h3>
            </div>
            <Button onClick={() => removeFavCard(card)} cl="typeActivity">
              Удалить
            </Button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default FavoritePage;
