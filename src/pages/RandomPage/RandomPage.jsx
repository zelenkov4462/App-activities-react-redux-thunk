import React, { useEffect } from "react";
import CardForm from "../../components/CardForm/CardForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../../asyncActions/fetchCards";
import {
  isNotCharityAction,
  isNotEducationAction,
  isNotRelaxationAction,
  isNotSocialAction,
  isRandomAction,
} from "../../redux/NextReducer";
import { isLoadingFalse, isLoadingTrue } from "../../redux/isLoadingReducer";

const RandomPage = () => {
  const dispatch = useDispatch();
  const favoriteCards = useSelector(
    (state) => state.favoriteCards.favoriteCards
  );
  const card = useSelector((state) => state.cards.cards);

  async function getCard() {
    dispatch(isLoadingTrue());
    await dispatch(fetchCard());
    setTimeout(() => {
      dispatch(isLoadingFalse());
    }, 1000);
  }

  useEffect(() => {
    dispatch(isRandomAction());
    dispatch(isNotRelaxationAction());
    dispatch(isNotEducationAction());
    dispatch(isNotSocialAction());
    dispatch(isNotCharityAction());

    getCard();
  }, [favoriteCards]);

  useEffect(() => {
    dispatch(isLoadingTrue());
    setTimeout(() => {
      dispatch(isLoadingFalse());
    }, 500);
  }, [card]);

  return (
    <div>
      <h1 style={{ color: "orange" }}>Random Card</h1>
      <CardForm />
    </div>
  );
};

export default RandomPage;
