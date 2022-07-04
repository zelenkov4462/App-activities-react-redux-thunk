import React from "react";
import Button from "../UI/Button/Button";
import CardItem from "../CardItem/CardItem";
import styles from "./CardForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard, fetchTypeCard } from "../../asyncActions/fetchCards";

const CardForm = () => {
  const dispatch = useDispatch();
  const stateBtnNav = useSelector((state) => state.isRandom);

  const updateCard = () => {
    if (stateBtnNav.isRandom) {
      return dispatch(fetchCard());
    } else if (stateBtnNav.isRelaxation) {
      return dispatch(fetchTypeCard("relaxation"));
    } else if (stateBtnNav.isEducation) {
      return dispatch(fetchTypeCard("education"));
    } else if (stateBtnNav.isSocial) {
      return dispatch(fetchTypeCard("social"));
    } else if (stateBtnNav.isCharity) {
      return dispatch(fetchTypeCard("charity"));
    }
  };

  return (
    <div className={styles.cardForm}>
      <h1>Карточка активности</h1>
      <div className={styles.cardFormContent}>
        <CardItem />
      </div>
      <div className={styles.btnNext}>
        <Button onClick={() => updateCard()} cl="next">
          Next
        </Button>
      </div>
    </div>
  );
};

export default CardForm;
