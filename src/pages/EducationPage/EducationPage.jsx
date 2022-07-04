import React, { useEffect } from "react";
import CardForm from "../../components/CardForm/CardForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchTypeCard } from "../../asyncActions/fetchCards";
import {
  isEducationAction,
  isNotCharityAction,
  isNotRandomAction,
  isNotRelaxationAction,
  isNotSocialAction,
} from "../../redux/NextReducer";
import { isLoadingFalse, isLoadingTrue } from "../../redux/isLoadingReducer";

const EducationPage = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.cards.cards);

  const favoriteCards = useSelector(
    (state) => state.favoriteCards.favoriteCards
  );
  const getRelaxCard = () => {
    dispatch(isLoadingTrue());
    dispatch(fetchTypeCard("education"));
    setTimeout(() => {
      dispatch(isLoadingFalse());
    }, 1000);
  };

  useEffect(() => {
    getRelaxCard();
    dispatch(isNotRandomAction());
    dispatch(isNotRelaxationAction());
    dispatch(isEducationAction());
    dispatch(isNotSocialAction());
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
      <h1 style={{ color: "orange" }}>Education Card</h1>
      <CardForm />
    </div>
  );
};

export default EducationPage;
