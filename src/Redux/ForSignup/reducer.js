import { SHOW_SIGNUP } from "./actionType";

const initstate = {
  showSignup: false,
};
const signupReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case SHOW_SIGNUP:
      return { ...state, showSignup: payload };

    default:
      return state;
  }
};

export { signupReducer };
