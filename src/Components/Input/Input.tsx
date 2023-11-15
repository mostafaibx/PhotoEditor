import { setShowMenu } from "../../Store/reducers/MenuesReducer";
import {
  setIsUploaded,
  setShowCropper,
} from "../../Store/reducers/cropReducers";
import { setShowSlider } from "../../Store/reducers/sliderReducer";
import { useAppDispatch } from "../../hooks/reduxHooks";
import Colors from "../Colors/Colors";
import PreFilters from "../PreDefinedFilters/PreFilters";
import "./input.css";

const Input = () => {
  const dispatch = useAppDispatch();

  const showCropHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setShowCropper(true));
    dispatch(setShowSlider("none"));
    dispatch(setShowMenu("none"));
  };

  const uploadNewHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setIsUploaded(false));
  };

  return (
    <div className="input">
      <h1 className="header">your editor</h1>
      <div className="flex flex-row md:flex-col w-full justify-center items-center">
        <Colors />
        <PreFilters />
        <button onClick={showCropHandler} className="btn">
          Crop
        </button>
      </div>
      <button className="btn m-4" onClick={uploadNewHandler}>
        Upload New Image
      </button>
    </div>
  );
};

export default Input;
