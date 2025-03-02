import { useAppSelector } from "../../hooks/reduxHooks";
import { FilterInputState } from "../../types";

const Slider = () => {
  const sliderState = useAppSelector((state) => state.slider);
  const colorState = useAppSelector((state) => state.colors);

  // No need to recreate the entire object, we can just get the current value directly
  const sliderValue = colorState[sliderState.id as keyof FilterInputState];

  // Format the label to be more user-friendly
  const formatLabel = (id: string) => {
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  // Handle keyboard accessibility for the range input
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault(); // Prevent page scrolling
    }
  };

  return (
    <div 
      className="flex flex-col justify-center items-center text-white bg-gray-800 bg-opacity-80 pb-4 absolute left-0 bottom-0 w-full z-10"
      role="dialog"
      aria-labelledby="slider-title"
    >
      <h3 id="slider-title" className="label mb-1 text-lg font-medium">
        {formatLabel(sliderState.id)}
      </h3>
      
      <div className="flex items-center w-5/6 mb-2">
        <input
          type="range"
          className="w-full"
          id={`${sliderState.id}-range`}
          min={sliderState.min}
          max={sliderState.max}
          step={sliderState.step}
          value={sliderValue}
          onChange={sliderState.onChange}
          onKeyDown={handleKeyDown}
          aria-valuemin={sliderState.min}
          aria-valuemax={sliderState.max}
          aria-valuenow={sliderValue as number}
          aria-labelledby="slider-title"
        />
      </div>
      
      <div className="flex items-center">
        <input
          className="text-center bg-gray-800 bg-opacity-50 focus:ring-2 focus:outline-none focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-24"
          id={`${sliderState.id}-number`}
          min={sliderState.min}
          max={sliderState.max}
          step={sliderState.step}
          type="number"
          value={sliderValue}
          onChange={sliderState.onChange}
          aria-labelledby="slider-title"
        />
        <span className="ml-2 text-sm opacity-80">
          {sliderState.id === "blur" ? "px" : "%"}
        </span>
      </div>
    </div>
  );
};

export default Slider;
