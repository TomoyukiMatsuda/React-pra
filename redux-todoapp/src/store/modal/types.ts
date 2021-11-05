import { ReactNode } from "react";
import { Action } from "redux";
import { ActionTypes } from "../actionTypes";

export interface Modal {
  isOpen: boolean;
  content: ReactNode | null;
}

interface OpenModalAction extends Action {
  type: typeof ActionTypes.openModal;
  payload: { content: ReactNode };
}

interface CloseModalAction extends Action {
  type: typeof ActionTypes.closeModal;
}

export type ModalActionTypes = OpenModalAction | CloseModalAction;
