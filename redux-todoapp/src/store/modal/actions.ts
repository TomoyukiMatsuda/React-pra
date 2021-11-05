import { ModalActionTypes } from "./types";
import { ActionTypes } from "../actionTypes";
import { ReactNode } from "react";

// actionCreator
export const openModalAction = (content: ReactNode): ModalActionTypes => ({
  type: ActionTypes.openModal,
  payload: { content },
});

export const closeModalAction = (): ModalActionTypes => ({
  type: ActionTypes.closeModal,
});
