import { SHOW_LOGIN } from "./actionType";

const initstate = {
  showlogin: false,
};

export const loginReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case SHOW_LOGIN:
      return { ...state, login: payload };
    default:
      return state;
  }
};
