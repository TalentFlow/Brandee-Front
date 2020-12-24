import { CREATE_MESSAGE } from "./errorTypes";

export const createMessage = (msg) => {
  console.log(msg);
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};
