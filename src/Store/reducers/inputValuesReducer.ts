import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface inputState {
  saturation: number;
  hue: number;
  contrast: number;
  brightness: number;
  grayscale: number;
  invert: number;
  sepia: number;
  blur: number;
}

const initialState: inputState = {
  saturation: 100,
  contrast: 100,
  hue: 0,
  brightness: 100,
  grayscale: 0,
  invert: 0,
  sepia: 0,
  blur: 0,
};

const inputValuesSlice = createSlice({
  name: "inputValues",
  initialState,
  reducers: {
    setSaturation(state: inputState, action: PayloadAction<number>) {
      state.saturation = action.payload;
    },
    setContrast(state: inputState, action: PayloadAction<number>) {
      state.contrast = action.payload;
    },
    setHue(state: inputState, action: PayloadAction<number>) {
      state.hue = action.payload;
    },
    setBrightness(state: inputState, action: PayloadAction<number>) {
      state.brightness = action.payload;
    },
    setGrayscale(state: inputState, action: PayloadAction<number>) {
      state.grayscale = action.payload;
    },
    setInvert(state: inputState, action: PayloadAction<number>) {
      state.invert = action.payload;
    },
    setSepia(state: inputState, action: PayloadAction<number>) {
      state.sepia = action.payload;
    },
    setblur(state: inputState, action: PayloadAction<number>) {
      state.blur = action.payload;
    },
  },
});

export const {
  setSaturation,
  setContrast,
  setHue,
  setBrightness,
  setGrayscale,
  setInvert,
  setSepia,
  setblur,
} = inputValuesSlice.actions;

export default inputValuesSlice.reducer;
