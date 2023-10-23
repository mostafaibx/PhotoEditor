import { setShowCropper } from "../../Store/reducers/cropReducers";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import Colors from "../Colors/Colors";
import PreFilters from "../PreDefinedFilters/PreFilters";

const Input = () => {
  const dispatch = useAppDispatch();

  const showImageHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setShowCropper(true));
  };

  return (
    <div className="w-11/12 bg-gray-800 m-4 p-4 rounded-lg md:w-1/4 md:h-screen md:overflow-y-scroll ">
      <h1 className="text-white text-3xl">Input</h1>
      <form className="flex flex-row md:flex-col justify-center items-center">
        <Colors />
        <PreFilters />
        <button onClick={showImageHandler} className="btn">
          Crop
        </button>
        <button className="btn m-4">Save</button>
      </form>
    </div>
  );
};

export default Input;
