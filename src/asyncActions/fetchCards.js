import { getCard, getTypeCard } from "../redux/CardsReducer";
import { useDispatch, useSelector } from "react-redux";
import { isLoadingFalse, isLoadingTrue } from "../redux/isLoadingReducer";

export const fetchCard = () => {
  return function (dispatch) {
    fetch("http://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((json) => dispatch(getCard(json)));
  };
};

export const fetchTypeCard = (type) => {
  return function (dispatch) {
    fetch(`http://www.boredapi.com/api/activity?type=${type}`)
      .then((response) => response.json())
      .then((json) => dispatch(getTypeCard(json)));
  };
};
