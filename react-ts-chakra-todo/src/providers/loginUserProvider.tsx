import { User } from "../types/api/user";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface LoginUserContextType {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
}

// contextを生成 {}からのオブジェクトで生成asでキャスト
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

// ログインユーザー情報を保持するcontext
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);

  return (
    // 生成したcotnextから provider で利用する component(children) を囲む
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
