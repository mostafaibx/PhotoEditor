import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setBrightness } from "./inputValuesReducer";

type show = {
  [key: string]: boolean;
  saturation: boolean;
  hue: boolean;
  contrast: boolean;
  brightness: boolean;
  grayscale: boolean;
  invert: boolean;
  sepia: boolean;
  blur: boolean;
};

export type rangeState = {
  id: string;
  min: number;
  max: number;
  step: number;
  show?: show;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const initialState: rangeState = {
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
    setSatInput(state: rangeState, action: PayloadAction<rangeState>) {
      state.id = action.payload.id;
      state.min = action.payload.min;
      state.max = action.payload.max;
      state.step = action.payload.step;
      state.onChange = action.payload.onChange;
    },
    setShowSlider(state: rangeState, action: PayloadAction<string>) {
      const keyToSetTrue = action.payload;
      for (const key in state.show) {
        state.show[key] = key === keyToSetTrue;
      }
    },
  },
});

export const { setSatInput, setShowSlider } = sliderSlice.actions;

export default sliderSlice.reducer;
