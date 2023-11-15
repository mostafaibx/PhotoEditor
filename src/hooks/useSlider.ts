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

//we need to fix the fn use in redux state

const useSlider = () => {
  const disptch = useAppDispatch();
  const rangeHandler = (target: string, e: React.MouseEvent) => {
    e.preventDefault();
    disptch(setShowSlider(target));
    if (target === "saturation") {
      disptch(
        setSatInput({
          id: "saturation",
          step: 1,
          min: 0,
          max: 500,
          onChange: (e) => disptch(setSaturation(parseInt(e.target.value))),
        })
      );
    }

    if (target === "hue") {
      disptch(
        setSatInput({
          id: "hue",
          step: 1,
          min: -180,
          max: 180,
          onChange: (e) => disptch(setHue(parseInt(e.target.value))),
        })
      );
    }

    if (target === "contrast") {
      disptch(
        setSatInput({
          id: "contrast",
          step: 1,
          min: 0,
          max: 1000,
          onChange: (e) => disptch(setContrast(parseInt(e.target.value))),
        })
      );
    }

    if (target === "brightness") {
      disptch(
        setSatInput({
          id: "brightness",
          step: 1,
          min: 0,
          max: 1000,
          onChange: (e) => disptch(setBrightness(parseInt(e.target.value))),
        })
      );
    }

    if (target === "grayscale") {
      disptch(
        setSatInput({
          id: "grayscale",
          step: 1,
          min: 0,
          max: 100,
          onChange: (e) => disptch(setGrayscale(parseInt(e.target.value))),
        })
      );
    }

    if (target === "invert") {
      disptch(
        setSatInput({
          id: "invert",
          step: 1,
          min: 0,
          max: 100,
          onChange: (e) => disptch(setInvert(parseInt(e.target.value))),
        })
      );
    }

    if (target === "sepia") {
      disptch(
        setSatInput({
          id: "sepia",
          step: 1,
          min: 0,
          max: 100,
          onChange: (e) => disptch(setSepia(parseInt(e.target.value))),
        })
      );
    }

    if (target === "blur") {
      disptch(
        setSatInput({
          id: "blur",
          step: 1,
          min: 0,
          max: 100,
          onChange: (e) => disptch(setblur(parseInt(e.target.value))),
        })
      );
    }
  };

  return { rangeHandler };
};

export default useSlider;
