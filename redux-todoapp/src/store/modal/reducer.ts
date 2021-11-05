import { Modal, ModalActionTypes } from "./types";
import { ActionTypes } from "../actionTypes";

const initialState: Modal = {
  isOpen: false,
  content: null,
};

export const modalReducer = (
  state = initialState,
  action: ModalActionTypes
) => {
  switch (action.type) {
    case ActionTypes.openModal:
      return {
        isOpen: true,
        content: action.payload.content,
      };
    case ActionTypes.closeModal:
      return {
        isOpen: false,
        content: null,
      };
    default:
      return state;
  }
};
