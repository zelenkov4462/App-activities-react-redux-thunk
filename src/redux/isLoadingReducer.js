const defaultState = {
  isLoading: false,
};

const IS_LOADING_TRUE = "IS_LOADING_TRUE";
const IS_LOADING_FALSE = "IS_LOADING_FALSE";

export const isLoadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IS_LOADING_TRUE:
      return { ...state, isLoading: true };

    case IS_LOADING_FALSE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export const isLoadingTrue = () => ({ type: IS_LOADING_TRUE });
export const isLoadingFalse = () => ({ type: IS_LOADING_FALSE });
