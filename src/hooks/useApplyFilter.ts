import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { 
  setBrightness, 
  setContrast, 
  setGrayscale, 
  setHue, 
  setInvert, 
  setSaturation, 
  setSepia 
} from "../Store/reducers/inputValuesReducer";
import { FilterClickState } from "../types";

// Define filter presets with their settings
type FilterPreset = {
  saturation?: number;
  contrast?: number;
  brightness?: number;
  hue?: number;
  grayscale?: number;
  invert?: number;
  sepia?: number;
};

// Define all filter presets in one place
const filterPresets: Record<string, FilterPreset> = {
  bw: {
    grayscale: 100
  },
  cool: {
    hue: 30,
    saturation: 80,
    brightness: 110
  },
  warm: {
    hue: -30,
    saturation: 120,
    brightness: 105,
    sepia: 20
  },
  modern: {
    contrast: 120,
    brightness: 110,
    saturation: 90
  },
  asesthict: {
    hue: 15,
    saturation: 90,
    brightness: 105,
    contrast: 110,
    sepia: 10
  },
  urban: {
    contrast: 130,
    brightness: 95,
    saturation: 80,
    hue: -5
  }
};

// Create a global variable to store the reset function
let globalResetFilterState: (() => void) | null = null;

const useApplyFilter = () => {
  const colorState = useAppSelector((state) => state.colors);
  const dispatch = useAppDispatch();
  const [isClicked, setIsClicked] = useState<FilterClickState>({
    bw: false,
    cool: false,
    warm: false,
    modern: false,
    asesthict: false,
    urban: false,
  });

  // Reset filter click state
  const resetFilterState = () => {
    setIsClicked({
      bw: false,
      cool: false,
      warm: false,
      modern: false,
      asesthict: false,
      urban: false,
    });
  };

  // Store the reset function in the global variable
  globalResetFilterState = resetFilterState;

  // Apply a filter preset or reset if already active
  const applyFilter = (
    target: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    // Toggle the clicked state for the target filter
    setIsClicked(prev => ({
      ...prev,
      [target]: !prev[target as keyof FilterClickState]
    }));

    // Get the preset for the selected filter
    const preset = filterPresets[target];
    
    // If the filter is already active, reset values to defaults
    if (isClicked[target as keyof FilterClickState]) {
      // Reset to default values
      if (preset.grayscale !== undefined) dispatch(setGrayscale(0));
      if (preset.saturation !== undefined) dispatch(setSaturation(100));
      if (preset.contrast !== undefined) dispatch(setContrast(100));
      if (preset.brightness !== undefined) dispatch(setBrightness(100));
      if (preset.hue !== undefined) dispatch(setHue(0));
      if (preset.sepia !== undefined) dispatch(setSepia(0));
      if (preset.invert !== undefined) dispatch(setInvert(0));
    } else {
      // Apply the preset values
      if (preset.grayscale !== undefined) dispatch(setGrayscale(preset.grayscale));
      if (preset.saturation !== undefined) dispatch(setSaturation(preset.saturation));
      if (preset.contrast !== undefined) dispatch(setContrast(preset.contrast));
      if (preset.brightness !== undefined) dispatch(setBrightness(preset.brightness));
      if (preset.hue !== undefined) dispatch(setHue(preset.hue));
      if (preset.sepia !== undefined) dispatch(setSepia(preset.sepia));
      if (preset.invert !== undefined) dispatch(setInvert(preset.invert));
    }
  };

  return { isClicked, applyFilter, resetFilterState };
};

// Export the global reset function
export const resetAllFilterStates = () => {
  if (globalResetFilterState) {
    globalResetFilterState();
  }
};

export default useApplyFilter;
