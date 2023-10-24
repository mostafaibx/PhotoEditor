import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setImage, setIsUploaded } from "../../Store/reducers/cropReducers";

const ImageUpload = () => {
  const dispatch = useAppDispatch();
  const imageUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const imageFile = event.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      dispatch(setImage(imageUrl));
      dispatch(setIsUploaded(true));
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
