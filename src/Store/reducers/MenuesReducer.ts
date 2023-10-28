import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type menuState = {
  menu: {
    [key: string]: any;
    colors: boolean;
    filter: boolean;
  };
};

const initialState: menuState = {
  menu: {
    colors: false,
    filter: false,
  },
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setShowMenu(state: menuState, action: PayloadAction<string>) {
      const keyToSetTrue = action.payload;
      for (const key in state.menu) {
        state.menu[key] = key === keyToSetTrue;
      }
    },
  },
});

export const { setShowMenu } = menuSlice.actions;

export default menuSlice.reducer;
