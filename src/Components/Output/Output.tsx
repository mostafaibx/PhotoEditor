import { setImage } from "../../Store/reducers/cropReducers";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import Slider from "../Colors/Slider";
import CroppedImage from "../Crop/Cropped";
import "./output.css";
import { useRef, useEffect, useCallback } from "react";

const Output = () => {
  const dispatch = useAppDispatch();
  const colorState = useAppSelector((state) => state.colors);
  const cropState = useAppSelector((state) => state.crop);
  const sliderState = useAppSelector((state) => state.slider);
  const outputRef = useRef<HTMLImageElement>(null);
  const canvaRef = useRef<HTMLCanvasElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const colors = {
    filter: `saturate(${colorState.saturation}%) 
    contrast(${colorState.contrast}%) 
    hue-rotate(${colorState.hue}deg)
    brightness(${colorState.brightness}%)
    sepia(${colorState.sepia}%)
    invert(${colorState.invert}%)
    grayscale(${colorState.grayscale}%)
    blur(${colorState.blur}px)`,
  };

  const ctx = canvaRef.current && canvaRef.current.getContext("2d");
  useEffect(() => {
    console.log("outputRef:  ", outputRef.current);
    if (outputRef.current && ctx) {
      ctx.canvas.width = outputRef.current.width;
      ctx.canvas.height = outputRef.current.height;

      ctx.filter = colors.filter;
      ctx.drawImage(
        outputRef.current,
        0,
        0,
        outputRef.current.width,
        outputRef.current.height
      );
    }
    console.log("canvasRef:  ", canvaRef.current);
  }, [colors.filter, outputRef, canvaRef, ctx]);

  const updateEditedImageData = () => {
    if (linkRef.current) {
      linkRef.current.href =
        canvaRef.current?.toDataURL("image/jpeg", 1.0) || "";
      linkRef.current.download = "editedImage.jpg";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-5/6 bg-gray-800 m-4 p-1 rounded-lg md:w-3/6 md:h-full relative">
      <CroppedImage />
      <button className="btn" onClick={updateEditedImageData}>
        <a ref={linkRef} href="/">
          Download
        </a>
      </button>

      <div className="w-5/6 bg-gray-800 rounded-lg">
        <img
          src={cropState.image}
          style={
            !cropState.showCropper
              ? { ...colors }
              : { ...colors, display: "none" }
          }
          ref={outputRef}
          alt="EditedImage"
        />
      </div>

      <canvas /* style={{ display: "none" }} */ ref={canvaRef} />
      {sliderState.show && <Slider />}
    </div>
  );
};

export default Output;
