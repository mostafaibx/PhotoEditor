import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuState } from "../../types";

const initialState: MenuState = {
  menu: {
    colors: false,
    filter: false,
  },
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setShowMenu(state: MenuState, action: PayloadAction<string>) {
      const keyToSetTrue = action.payload;
      for (const key in state.menu) {
        state.menu[key] = key === keyToSetTrue;
      }
    },
  },
});

export const { setShowMenu } = menuSlice.actions;

export default menuSlice.reducer;
