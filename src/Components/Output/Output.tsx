import { setShowMenu } from "../../Store/reducers/MenuesReducer";
import { setShowSlider } from "../../Store/reducers/sliderReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import Slider from "../Colors/Slider";
import CroppedImage from "../Crop/Cropped";
import "./output.css";
import { useRef, useEffect, useState } from "react";

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

  useEffect(() => {
    const updateCanvas = (image: HTMLImageElement) => {
      const ctx = canvaRef.current && canvaRef.current.getContext("2d");
      if (image && ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.canvas.width = image.width;
        ctx.canvas.height = image.height;
        ctx.filter = colors.filter;
        ctx.drawImage(image, 0, 0, image.width, image.height);
      }
    };

    if (cropState.image) {
      // Create a new Image object and set its source to trigger the loading process
      const image = new Image();
      image.src = cropState.image;

      // Listen for the image's onload event
      image.onload = () => {
        updateCanvas(image); // Call the updateCanvas function once the image is loaded
      };
    }
  }, [canvaRef, colors.filter, cropState.image]);

  const downloadImage = () => {
    if (linkRef.current) {
      linkRef.current.href =
        canvaRef.current?.toDataURL("image/jpeg", 1.0) || "";
      linkRef.current.download = "editedImage.jpg";
    }
  };

  const [show, setShow] = useState(false);
  const hideSlider = () => {
    dispatch(setShowSlider("none"));
    dispatch(setShowMenu("none"));
  };

  useEffect(() => {
    if (sliderState.show) {
      const show = Object.values(sliderState.show).some(
        (value) => value === true
      );
      setShow(show);
    }
  }, [sliderState.show]);

  return (
    <div className="flex flex-col justify-center items-center w-5/6 bg-gray-800 m-4 p-1 pb-4 rounded-lg md:w-3/6 md:h-full relative">
      <a ref={linkRef} href="/">
        <button className="btn m-4" onClick={downloadImage}>
          Download
        </button>
      </a>
      <CroppedImage />

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
          onClick={hideSlider}
        />
      </div>

      {<canvas style={{ display: "none" }} ref={canvaRef} />}
      {show && <Slider />}
    </div>
  );
};

export default Output;
