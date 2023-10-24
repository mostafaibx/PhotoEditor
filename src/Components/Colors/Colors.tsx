import { useState } from "react";
import useSlider from "../../hooks/useSlider";

const Colors = () => {
  const { rangeHandler } = useSlider();
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  const onClickHandler = (target: string, e: React.MouseEvent) => {
    rangeHandler(target, e);
  };

  return (
    <div className=" flex flex-col justify-center items-center  relative">
      <button onClick={showMenuHandler} className="btn">
        Colors
      </button>

      {showMenu && (
        <div className="flex flex-col p-4 rounded-lg text-white bg-gray-800 bg-opacity-50 absolute left-0 top-10 md:top-0 z-10 md:relative ">
          <button
            className="filter-btn"
            onClick={(e) => onClickHandler("sat", e)}
          >
            Saturation
          </button>

          <button
            className="filter-btn"
            onClick={(e) => onClickHandler("hue", e)}
          >
            Hue
          </button>

          <button
            className="filter-btn"
            onClick={(e) => onClickHandler("contrast", e)}
          >
            contrast
          </button>

          <button
            className="filter-btn"
            onClick={(e) => onClickHandler("brightness", e)}
          >
            brightness
          </button>

          <button
            className="filter-btn"
            onClick={(e) => onClickHandler("grayscale", e)}
          >
            Grayscale
          </button>

          <button
            className="filter-btn"
            onClick={(e) => onClickHandler("invert", e)}
          >
            Invert
          </button>

          <button
            className="filter-btn"
            onClick={(e) => onClickHandler("sepia", e)}
          >
            Sepia
          </button>
        </div>
      )}
    </div>
  );
};

export default Colors;
