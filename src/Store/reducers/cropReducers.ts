import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Coordinates, CropperRef } from "react-advanced-cropper";
import testImage from "../../assets/FuQK6uvXgAMBirL.jpeg";

interface inputState {
  coordinates: Coordinates | null;
  image: string | undefined;
  showCropper: boolean;
  isUploaded: boolean;
}

const initialState: inputState = {
  coordinates: { width: 0, height: 0, top: 0, left: 0 },
  image: testImage,
  showCropper: false,
  isUploaded: false,
};

const inputValuesSlice = createSlice({
  name: "inputValues",
  initialState,
  reducers: {
    setCoordinates(
      state: inputState,
      action: PayloadAction<Coordinates | null>
    ) {
      state.coordinates = action.payload;
    },
    setImage(state: inputState, action: PayloadAction<string | undefined>) {
      state.image = action.payload;
    },
    setShowCropper(state: inputState, action: PayloadAction<boolean>) {
      state.showCropper = action.payload;
    },
    setIsUploaded(state: inputState, action: PayloadAction<boolean>) {
      state.isUploaded = action.payload;
    },
  },
});

export const { setCoordinates, setImage, setShowCropper, setIsUploaded } =
  inputValuesSlice.actions;

export default inputValuesSlice.reducer;
