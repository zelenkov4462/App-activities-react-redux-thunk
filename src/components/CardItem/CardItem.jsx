import React from "react";
import styles from "./CardItem.module.scss";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteCardAction } from "../../redux/CardFavoriteReducer";

const CardItem = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.cards.cards);

  const isLoading = useSelector((state) => state.isLoading.isLoading);

  const addFavoriteCard = () => {
    dispatch(addFavoriteCardAction(card));
  };

  if (isLoading) {
    return <div>Загрузка......</div>;
  }

  return (
    <div>
      <div className={styles.textContent}>
        <h1>{card.activity}</h1>
        <h4>type: {card.type}</h4>
      </div>
      <div className={styles.key}>
        <h3>key: {card.key}</h3>
      </div>
      <Button onClick={() => addFavoriteCard()} cl="favorite">
        Добавить в избранное
      </Button>
    </div>
  );
};

export default CardItem;
