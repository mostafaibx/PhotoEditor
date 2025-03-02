import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RangeState } from "../../types";

const initialState: RangeState = {
  id: "",
  min: 0,
  max: 0,
  step: 0,
  show: {
    saturation: false,
    hue: false,
    contrast: false,
    brightness: false,
    grayscale: false,
    invert: false,
    sepia: false,
    blur: false,
  },
  onChange: () => {},
};

const sliderSlice = createSlice({
  name: "inputValues",
  initialState,
  reducers: {
    setSatInput(state: RangeState, action: PayloadAction<RangeState>) {
      state.id = action.payload.id;
      state.min = action.payload.min;
      state.max = action.payload.max;
      state.step = action.payload.step;
      state.onChange = action.payload.onChange;
    },
    setShowSlider(state: RangeState, action: PayloadAction<string>) {
      const keyToSetTrue = action.payload;
      for (const key in state.show) {
        state.show[key] = key === keyToSetTrue;
      }
    },
  },
});

export const { setSatInput, setShowSlider } = sliderSlice.actions;

export default sliderSlice.reducer;
