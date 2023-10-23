import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface rangeState {
  id: string;
  min: number;
  max: number;
  step: number;
  show?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const initialState: rangeState = {
  id: "",
  min: 0,
  max: 0,
  step: 0,
  show: false,
  onChange: () => {},
};

const sliderSlice = createSlice({
  name: "inputValues",
  initialState,
  reducers: {
    setSatInput(state: rangeState, action: PayloadAction<rangeState>) {
      state.id = action.payload.id;
      state.min = action.payload.min;
      state.max = action.payload.max;
      state.step = action.payload.step;
      state.show = !state.show;
      state.onChange = action.payload.onChange;
    },
  },
});

export const { setSatInput } = sliderSlice.actions;

export default sliderSlice.reducer;
