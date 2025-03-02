import {
  setBrightness,
  setContrast,
  setGrayscale,
  setHue,
  setInvert,
  setSaturation,
  setSepia,
  setblur,
} from "../Store/reducers/inputValuesReducer";
import { setSatInput, setShowSlider } from "../Store/reducers/sliderReducer";
import { useAppDispatch } from "./reduxHooks";
import { RangeState } from "../types";

// Define slider configurations type
type SliderConfig = {
  id: string;
  min: number;
  max: number;
  step: number;
  action: (value: number) => any;
};

// Define valid slider types
export type SliderType = 'saturation' | 'hue' | 'contrast' | 'brightness' | 'grayscale' | 'invert' | 'sepia' | 'blur';

const useSlider = () => {
  const dispatch = useAppDispatch();

  // Define all slider configurations in one place
  const sliderConfigs: Record<SliderType, SliderConfig> = {
    saturation: {
      id: "saturation",
      step: 1,
      min: 0,
      max: 500,
      action: setSaturation
    },
    hue: {
      id: "hue",
      step: 1,
      min: -180,
      max: 180,
      action: setHue
    },
    contrast: {
      id: "contrast",
      step: 1,
      min: 0,
      max: 1000,
      action: setContrast
    },
    brightness: {
      id: "brightness",
      step: 1,
      min: 0,
      max: 1000,
      action: setBrightness
    },
    grayscale: {
      id: "grayscale",
      step: 1,
      min: 0,
      max: 100,
      action: setGrayscale
    },
    invert: {
      id: "invert",
      step: 1,
      min: 0,
      max: 100,
      action: setInvert
    },
    sepia: {
      id: "sepia",
      step: 1,
      min: 0,
      max: 100,
      action: setSepia
    },
    blur: {
      id: "blur",
      step: 1,
      min: 0,
      max: 100,
      action: setblur
    }
  };

  const rangeHandler = (target: SliderType, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Show the selected slider
    dispatch(setShowSlider(target));
    
    // Get the configuration for the selected slider
    const config = sliderConfigs[target];
    
    // Set the slider input with the configuration
    dispatch(
      setSatInput({
        id: config.id,
        step: config.step,
        min: config.min,
        max: config.max,
        onChange: (e) => dispatch(config.action(parseInt(e.target.value))),
      })
    );
  };

  return { rangeHandler };
};

export default useSlider;
