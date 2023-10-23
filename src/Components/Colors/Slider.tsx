import { useAppSelector } from "../../hooks/reduxHooks";

const Slider = () => {
  const sliderState = useAppSelector((state) => state.slider);
  return (
    <div className="flex flex-col justify-center items-center text-white bg-gray-800 bg-opacity-80 p-6 absolute left-0 bottom-0 w-full z-10">
      <label className="label mb-4">{sliderState.id}</label>
      <p className="mb-4">{0}</p>
      <input
        type="range"
        className="w-5/6"
        id={sliderState.id}
        min={sliderState.min}
        max={sliderState.max}
        step={sliderState.step}
        onChange={sliderState.onChange}
      />
    </div>
  );
};

export default Slider;
