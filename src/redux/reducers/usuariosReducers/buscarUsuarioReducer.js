const initialState = {
  usuarios: []
};

export const usuarios = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_TYPE":
      return;
    default:
      return state;
  }
};
