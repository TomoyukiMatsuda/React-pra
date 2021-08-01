import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface USER {
  displayName: string;
  photoUrl: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    // 初期の設定がなされる
    user: { uid: "", photoUrl: "", displayName: "" },
  },

  reducers: {
    login: (state, action) => {
      // action.payload にログイン情報が格納されてくる？
      state.user = action.payload;
    },
    logout: (state) => {
      // userの状態を初期化
      state.user = { uid: "", photoUrl: "", displayName: "" };
    },
    updateUserProfile: (state, action: PayloadAction<USER>) => {
      // ユーザーの情報を更新する
      state.user.displayName = action.payload.displayName;
      state.user.photoUrl = action.payload.photoUrl;
    },
  },
});

export const { login, logout, updateUserProfile } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
