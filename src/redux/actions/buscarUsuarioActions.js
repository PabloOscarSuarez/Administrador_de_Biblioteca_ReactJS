import { RESULTADO_USUARIO } from "../Type/type";

export const guardarUsuario = data => ({
  type: RESULTADO_USUARIO,
  payload: data,
});
