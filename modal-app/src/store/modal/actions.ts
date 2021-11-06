import { ReactNode } from "react";
import { ModalActionTypes } from "./types";
import { ActionTypes } from "../actionTypes";

export const openModalAction = (content: ReactNode): ModalActionTypes => ({
  type: ActionTypes.openModal,
  payload: { content },
});

export const closeModalAction = (): ModalActionTypes => ({
  type: ActionTypes.closeModal,
});
