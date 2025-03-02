import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setImage, setIsUploaded } from "../../Store/reducers/cropReducers";
import { 
  setBrightness, 
  setContrast, 
  setGrayscale, 
  setHue, 
  setInvert, 
  setSaturation, 
  setSepia,
  setblur
} from "../../Store/reducers/inputValuesReducer";
import { resetAllFilterStates } from "../../hooks/useApplyFilter";
import { setShowSlider } from "../../Store/reducers/sliderReducer";
import { setShowMenu } from "../../Store/reducers/MenuesReducer";

const ImageUpload = () => {
  const dispatch = useAppDispatch();
  
  // Reset all filters to their default values
  const resetFilters = () => {
    // Reset filter values in Redux
    dispatch(setSaturation(100));
    dispatch(setContrast(100));
    dispatch(setHue(0));
    dispatch(setBrightness(100));
    dispatch(setGrayscale(0));
    dispatch(setInvert(0));
    dispatch(setSepia(0));
    dispatch(setblur(0));
    
    // Reset slider visibility (hide all sliders)
    dispatch(setShowSlider(""));
    
    // Reset menu state (close all menus)
    dispatch(setShowMenu(""));
    
    // Reset filter click states
    resetAllFilterStates();
  };
  
  const imageUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const imageFile = event.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      dispatch(setImage(imageUrl));
      dispatch(setIsUploaded(true));
      
      // Reset all filters when a new image is uploaded
      resetFilters();
    }
  };

  return (
    <div className="img-upload">
      <span className="btn btn-file">
        <FontAwesomeIcon icon={faCloudArrowUp} beatFade size="2xl" />
        <p className="text-white text-lg font-medium pl-2"> Select Image</p>
        <input type="file" accept="image/*" onChange={imageUploadHandler} />
      </span>
    </div>
  );
};

export default ImageUpload;
