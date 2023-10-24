import {
  setIsUploaded,
  setShowCropper,
} from "../../Store/reducers/cropReducers";
import { useAppDispatch } from "../../hooks/reduxHooks";
import Colors from "../Colors/Colors";
import PreFilters from "../PreDefinedFilters/PreFilters";
import "./input.css";

const Input = () => {
  const dispatch = useAppDispatch();

  const showCropHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setShowCropper(true));
  };

  const uploadNewHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setIsUploaded(false));
  };

  return (
    <div className="input">
      <h1 className="text-white text-3xl">Input</h1>
      <form className="flex flex-row md:flex-col justify-center items-center">
        <Colors />
        <PreFilters />
        <button onClick={showCropHandler} className="btn">
          Crop
        </button>
        <button className="btn m-4" onClick={uploadNewHandler}>
          Upload New Image
        </button>
      </form>
    </div>
  );
};

export default Input;
