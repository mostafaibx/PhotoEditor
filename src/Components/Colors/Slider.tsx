import { useAppSelector } from "../../hooks/reduxHooks";
import { inputState } from "../../Store/reducers/inputValuesReducer";

const Slider = () => {
  const sliderState = useAppSelector((state) => state.slider);
  const colorState = useAppSelector((state) => state.colors);

  const sliderProperties: inputState = {
    saturation: colorState.saturation,
    brightness: colorState.brightness,
    contrast: colorState.contrast,
    hue: colorState.hue,
    grayscale: colorState.grayscale,
    blur: colorState.blur,
    invert: colorState.invert,
    sepia: colorState.sepia,
  };

  const sliderValue = sliderProperties[sliderState.id];

  return (
    <div className="flex flex-col justify-center items-center text-white bg-gray-800 bg-opacity-80 pb-4 absolute left-0 bottom-0 w-full z-10">
      <label className="label mb-1">{sliderState.id}</label>
      <input
        className="text-center bg-gray-800 bg-opacity-50 focus:ring-2 focus:outline-none focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        id={sliderState.id}
        min={sliderState.min}
        max={sliderState.max}
        step={sliderState.step}
        type="number"
        value={sliderValue}
        onChange={sliderState.onChange}
      />
      <input
        type="range"
        className="w-5/6"
        id={sliderState.id}
        min={sliderState.min}
        max={sliderState.max}
        step={sliderState.step}
        value={sliderValue}
        onChange={sliderState.onChange}
      />
    </div>
  );
};

export default Slider;
