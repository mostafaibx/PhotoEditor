import { Coordinates } from "react-advanced-cropper";
import React from "react";

// Input values types
export type FilterInputState = {
  [key: string]: any;
  saturation: number;
  hue: number;
  contrast: number;
  brightness: number;
  grayscale: number;
  invert: number;
  sepia: number;
  blur: number;
};

// Crop types
export interface CropState {
  coordinates: Coordinates | null;
  image: string | undefined;
  showCropper: boolean;
  isUploaded: boolean;
}

// Slider types
export type SliderShowState = {
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

export type RangeState = {
  id: string;
  min: number;
  max: number;
  step: number;
  show?: SliderShowState;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}; 