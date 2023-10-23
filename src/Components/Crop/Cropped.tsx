import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Cropper, CropperRef } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import { useRef } from "react";
import {
  setCoordinates,
  setImage,
  setShowCropper,
} from "../../Store/reducers/cropReducers";

const CroppedImage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.crop);
  const cropperRef = useRef<CropperRef>(null);

  //will be removed when implementing image uplaod functionality
  const cropHandler = () => {
    if (cropperRef.current) {
      dispatch(setCoordinates(cropperRef.current.getCoordinates()));
      dispatch(setImage(cropperRef.current.getCanvas()?.toDataURL()));
    }
    dispatch(setShowCropper(false));
  };

  return (
    <>
      {state.showCropper && (
        <div className="">
          <Cropper
            ref={cropperRef}
            src={state.image}
            style={{ width: "600px", height: "400px", objectFit: "contain" }}
          />
          <button onClick={cropHandler} className="btn">
            Done
          </button>
        </div>
      )}
    </>
  );
};

export default CroppedImage;
