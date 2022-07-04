const defaultState = {
  isRandom: false,
  isRelaxation: false,
  isEducation: false,
  isSocial: false,
  isCharity: false,
};

const IS_RANDOM = "IS_RANDOM";
const IS_NOT_RANDOM = "IS_NOT_RANDOM";

const IS_RELAXATION = "IS_RELAXATION";
const IS_NOT_RELAXATION = "IS_NOT_RELAXATION";

const IS_EDUCATION = "IS_EDUCATION";
const IS_NOT_EDUCATION = "IS_NOT_EDUCATION";

const IS_SOCIAL = "IS_SOCIAL";
const IS_NOT_SOCIAL = "IS_NOT_SOCIAL";

const IS_CHARITY = "IS_CHARITY";
const IS_NOT_CHARITY = "IS_NOT_CHARITY";

export const nextReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IS_RANDOM:
      return { ...state, isRandom: true };
    case IS_NOT_RANDOM:
      return { ...state, isRandom: false };
    case IS_RELAXATION:
      return { ...state, isRelaxation: true };
    case IS_NOT_RELAXATION:
      return { ...state, isRelaxation: false };
    case IS_EDUCATION:
      return { ...state, isEducation: true };
    case IS_NOT_EDUCATION:
      return { ...state, isEducation: false };
    case IS_SOCIAL:
      return { ...state, isSocial: true };
    case IS_NOT_SOCIAL:
      return { ...state, isSocial: false };
    case IS_CHARITY:
      return { ...state, isCharity: true };
    case IS_NOT_CHARITY:
      return { ...state, isCharity: false };
    default:
      return state;
  }
};

export const isRandomAction = () => ({ type: IS_RANDOM });
export const isNotRandomAction = () => ({ type: IS_NOT_RANDOM });
export const isRelaxationAction = () => ({ type: IS_RELAXATION });
export const isNotRelaxationAction = () => ({ type: IS_NOT_RELAXATION });
export const isEducationAction = () => ({ type: IS_EDUCATION });
export const isNotEducationAction = () => ({ type: IS_NOT_EDUCATION });
export const isSocialAction = () => ({ type: IS_SOCIAL });
export const isNotSocialAction = () => ({ type: IS_NOT_SOCIAL });
export const isCharityAction = () => ({ type: IS_CHARITY });
export const isNotCharityAction = () => ({ type: IS_NOT_CHARITY });
