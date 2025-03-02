import useSlider from "../../hooks/useSlider";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setShowMenu } from "../../Store/reducers/MenuesReducer";
import type { SliderType } from "../../hooks/useSlider";
import React from "react";

// Define color options as a constant array for better maintainability
const COLOR_OPTIONS: Array<{id: SliderType; label: string}> = [
  { id: "saturation", label: "Saturation" },
  { id: "hue", label: "Hue" },
  { id: "contrast", label: "Contrast" },
  { id: "brightness", label: "Brightness" },
  { id: "grayscale", label: "Grayscale" },
  { id: "invert", label: "Invert" },
  { id: "sepia", label: "Sepia" },
  { id: "blur", label: "Blur" }
];

// Create a reusable FilterButton component
const FilterButton: React.FC<{
  option: {id: SliderType; label: string};
  onClick: (target: SliderType, e: React.MouseEvent) => void;
}> = ({ option, onClick }) => (
  <button
    className="filter-btn"
    onClick={(e) => onClick(option.id, e)}
    aria-label={`Adjust ${option.label}`}
  >
    {option.label}
  </button>
);

const Colors = () => {
  const { rangeHandler } = useSlider();
  const dispatch = useAppDispatch();
  const menuState = useAppSelector((state) => state.menu);

  const showMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const menuId = (e.target as HTMLButtonElement).id;
    dispatch(setShowMenu(menuId));
  };

  const onClickHandler = (target: SliderType, e: React.MouseEvent) => {
    rangeHandler(target, e);
  };

  return (
    <div className="flex flex-col justify-center items-center relative">
      <button 
        onClick={showMenuHandler} 
        className="btn" 
        id="colors"
        aria-expanded={menuState.menu.colors}
        aria-controls="colors-menu"
      >
        Colors
      </button>

      {menuState.menu.colors && (
        <div 
          id="colors-menu"
          className="flex flex-col p-4 rounded-lg text-white bg-gray-800 bg-opacity-50 absolute left-0 top-10 md:top-0 z-10 md:relative"
          role="menu"
        >
          {COLOR_OPTIONS.map(option => (
            <FilterButton 
              key={option.id} 
              option={option} 
              onClick={onClickHandler} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Colors;
