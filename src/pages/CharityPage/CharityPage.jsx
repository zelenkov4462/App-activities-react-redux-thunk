import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardForm from "../../components/CardForm/CardForm";
import { fetchTypeCard } from "../../asyncActions/fetchCards";
import {
  isCharityAction,
  isNotEducationAction,
  isNotRandomAction,
  isNotRelaxationAction,
  isNotSocialAction,
} from "../../redux/NextReducer";
import { isLoadingFalse, isLoadingTrue } from "../../redux/isLoadingReducer";

const CharityPage = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.cards.cards);

  const favoriteCards = useSelector(
    (state) => state.favoriteCards.favoriteCards
  );
  const getRelaxCard = () => {
    dispatch(isLoadingTrue());
    dispatch(fetchTypeCard("charity"));
    setTimeout(() => {
      dispatch(isLoadingFalse());
    }, 1000);
  };

  useEffect(() => {
    getRelaxCard();
    dispatch(isNotRandomAction());
    dispatch(isNotRelaxationAction());
    dispatch(isNotEducationAction());
    dispatch(isNotSocialAction());
    dispatch(isCharityAction());
  }, [favoriteCards]);

  useEffect(() => {
    dispatch(isLoadingTrue());
    setTimeout(() => {
      dispatch(isLoadingFalse());
    }, 500);
  }, [card]);
  return (
    <div>
      <h1 style={{ color: "orange" }}>Charity Card</h1>
      <CardForm />
    </div>
  );
};

export default CharityPage;
