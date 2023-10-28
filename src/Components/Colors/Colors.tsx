import useSlider from "../../hooks/useSlider";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setShowMenu } from "../../Store/reducers/MenuesReducer";

const Colors = () => {
  const { rangeHandler } = useSlider();
  const dispatch = useAppDispatch();
  const menuState = useAppSelector((state) => state.menu);

  const showMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const menuId = (e.target as HTMLButtonElement).id;
    dispatch(setShowMenu(menuId));
    console.log(menuState.menu.colors);
  };

  const onClickHandler = (target: string, e: React.MouseEvent) => {
    rangeHandler(target, e);
  };

  return (
    <div className=" flex flex-col justify-center items-center relative">
      <button onClick={showMenuHandler} className="btn" id="colors">
        Colors
      </button>

      {menuState.menu.colors && (
        <div className="flex flex-col p-4 rounded-lg text-white bg-gray-800 bg-opacity-50 absolute left-0 top-10 md:top-0 z-10 md:relative ">
          <button
            className="filter-btn"
            onClick={(e) => onClickHandler("saturation", e)}
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
