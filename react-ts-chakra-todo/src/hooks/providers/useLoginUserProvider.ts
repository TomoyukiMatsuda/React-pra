import {
  LoginUserContext,
  LoginUserContextType,
} from "../../providers/loginUserProvider";
import { useContext } from "react";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
