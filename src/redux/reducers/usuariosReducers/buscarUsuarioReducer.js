import { RESULTADO_USUARIO } from "../../Type/type";

const initialState = {
  resultado: "",
};

export const usuarios = (state = initialState, action) => {
  switch (action.type) {
    case RESULTADO_USUARIO:
      return {
        ...state,
        resultado: action.payload,
      };
    default:
      return state;
  }
};
