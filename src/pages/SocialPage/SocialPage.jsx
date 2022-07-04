import React, { useEffect } from "react";
import CardForm from "../../components/CardForm/CardForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchTypeCard } from "../../asyncActions/fetchCards";
import {
  isNotCharityAction,
  isNotEducationAction,
  isNotRandomAction,
  isNotRelaxationAction,
  isSocialAction,
} from "../../redux/NextReducer";
import { isLoadingFalse, isLoadingTrue } from "../../redux/isLoadingReducer";

const SocialPage = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.cards.cards);

  const favoriteCards = useSelector(
    (state) => state.favoriteCards.favoriteCards
  );
  const getRelaxCard = () => {
    dispatch(isLoadingTrue());
    dispatch(fetchTypeCard("social"));
    setTimeout(() => {
      dispatch(isLoadingFalse());
    }, 1000);
  };

  useEffect(() => {
    getRelaxCard();
    dispatch(isNotRandomAction());
    dispatch(isNotRelaxationAction());
    dispatch(isNotEducationAction());
    dispatch(isSocialAction());
    dispatch(isNotCharityAction());
  }, [favoriteCards]);

  useEffect(() => {
    dispatch(isLoadingTrue());
    setTimeout(() => {
      dispatch(isLoadingFalse());
    }, 500);
  }, [card]);
  return (
    <div>
      <h1 style={{ color: "orange" }}>Social Card</h1>
      <CardForm />
    </div>
  );
};

export default SocialPage;
