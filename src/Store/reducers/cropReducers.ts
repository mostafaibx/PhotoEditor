import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CropState } from "../../types";

const initialState: CropState = {
  coordinates: { width: 0, height: 0, top: 0, left: 0 },
  image: "",
  showCropper: false,
  isUploaded: false,
};

const inputValuesSlice = createSlice({
  name: "inputValues",
  initialState,
  reducers: {
    setCoordinates(
      state: CropState,
      action: PayloadAction<CropState["coordinates"]>
    ) {
      state.coordinates = action.payload;
    },
    setImage(state: CropState, action: PayloadAction<string | undefined>) {
      state.image = action.payload;
    },
    setShowCropper(state: CropState, action: PayloadAction<boolean>) {
      state.showCropper = action.payload;
    },
    setIsUploaded(state: CropState, action: PayloadAction<boolean>) {
      state.isUploaded = action.payload;
    },
  },
});

export const { setCoordinates, setImage, setShowCropper, setIsUploaded } =
  inputValuesSlice.actions;

export default inputValuesSlice.reducer;
