import { setShowMenu } from "../../Store/reducers/MenuesReducer";
import { setShowSlider } from "../../Store/reducers/sliderReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import Slider from "../Colors/Slider";
import CroppedImage from "../Crop/Cropped";
import "./output.css";
import { useRef, useEffect, useState, useMemo } from "react";
import { updateCanvasImage } from "../../utils/updatedCanvasImage";

const Output = () => {
  const dispatch = useAppDispatch();
  const cropState = useAppSelector((state) => state.crop);
  const sliderState = useAppSelector((state) => state.slider);
  const outputRef = useRef<HTMLImageElement>(null);
  const canvaRef = useRef<HTMLCanvasElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const {
    saturation,
    contrast,
    hue,
    brightness,
    sepia,
    invert,
    grayscale,
    blur,
  } = useAppSelector((state) => state.colors);

  const colors = useMemo(() => {
    return {
      filter: `saturate(${saturation}%)
      contrast(${contrast}%)
      hue-rotate(${hue}deg)
      brightness(${brightness}%)
      sepia(${sepia}%)
      invert(${invert}%)
      grayscale(${grayscale}%)
      blur(${blur}px)`,
    };
  }, [saturation, contrast, hue, brightness, sepia, invert, grayscale, blur]);

  // Call the updateCanvas function once the image is loaded
  if (outputRef.current && canvaRef.current) {
    const ctx = canvaRef.current.getContext("2d");
    outputRef.current.onload = () => {
      updateCanvasImage(outputRef.current, ctx, colors);
    };
  }

  // calling the function whe colors var changes
  useEffect(() => {
    if (outputRef.current && canvaRef.current) {
      const ctx = canvaRef.current.getContext("2d");
      updateCanvasImage(outputRef.current, ctx, colors);
    }
  }, [colors]);

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
    <div className="flex flex-col justify-center items-center w-5/6 bg-gray-800 m-4 p-1 pb-4 rounded-lg md:w-5/6 md:h-full relative">
      <a ref={linkRef} href="/">
        <button className="btn m-4" onClick={downloadImage}>
          Download
        </button>
      </a>
      <CroppedImage />

      <div className="w-5/6 bg-gray-800 rounded-lg">
        <img
          className="w-full rounded-lg"
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
