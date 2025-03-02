import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Cropper, CropperRef, CropperProps } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import { useRef, useState, useCallback, useMemo } from "react";
import {
  setCoordinates,
  setImage,
  setShowCropper,
} from "../../Store/reducers/cropReducers";

const CroppedImage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.crop);
  const cropperRef = useRef<CropperRef>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Crop settings
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  // Handle cropping action
  const cropHandler = useCallback(() => {
    try {
      setIsLoading(true);
      setError(null);
      
      if (cropperRef.current) {
        const coordinates = cropperRef.current.getCoordinates();
        const canvas = cropperRef.current.getCanvas();
        
        if (!coordinates) {
          throw new Error("Failed to get crop coordinates");
        }
        
        if (!canvas) {
          throw new Error("Failed to generate cropped image");
        }
        
        dispatch(setCoordinates(coordinates));
        dispatch(setImage(canvas.toDataURL()));
      } else {
        throw new Error("Cropper reference not available");
      }
      
      dispatch(setShowCropper(false));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
      console.error("Crop error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  // Handle aspect ratio changes
  const handleAspectRatioChange = useCallback((ratio: number | null) => {
    setAspectRatio(ratio);
  }, []);

  // Custom stencil constraints to avoid the 'minimum' error
  const stencilConstraints = useCallback((settings: any) => {
    // When in free mode (aspectRatio is null), use minimal constraints
    if (aspectRatio === null) {
      return {
        minWidth: 10,
        minHeight: 10
      };
    }
    
    // For fixed aspect ratios, use more specific constraints
    return {
      minWidth: 50,
      minHeight: 50,
      maxWidth: settings.imageSize?.width || 1000,
      maxHeight: settings.imageSize?.height || 1000
    };
  }, [aspectRatio]);

  // Default cropper props with proper stencil constraints
  const cropperProps = useMemo(() => ({
    src: state.image,
    stencilProps: {
      aspectRatio: aspectRatio
    },
    stencilConstraints: stencilConstraints,
    defaultSize: {
      width: 200,
      height: 200
    },
    className: "rounded-lg",
    style: { width: "100%", height: "100%", objectFit: "contain" as const },
    onError: () => {
      setError("Failed to load or process the image");
      console.error("Cropper error occurred");
    }
  }), [state.image, aspectRatio, stencilConstraints]);

  return (
    <>
      {state.showCropper && (
        <div className="w-5/6 h-5/6 flex flex-col justify-center items-center">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
              <span className="font-bold">Error:</span> {error}
            </div>
          )}
          
          <Cropper
            ref={cropperRef}
            {...cropperProps}
          />
          
          <div className="flex flex-wrap justify-center gap-2 my-4">
            <button 
              onClick={() => handleAspectRatioChange(null)} 
              className={`btn-sm ${aspectRatio === null ? 'bg-blue-600' : 'bg-gray-600'}`}
              aria-pressed={aspectRatio === null}
            >
              Free
            </button>
            <button 
              onClick={() => handleAspectRatioChange(1)} 
              className={`btn-sm ${aspectRatio === 1 ? 'bg-blue-600' : 'bg-gray-600'}`}
              aria-pressed={aspectRatio === 1}
            >
              1:1
            </button>
            <button 
              onClick={() => handleAspectRatioChange(4/3)} 
              className={`btn-sm ${aspectRatio === 4/3 ? 'bg-blue-600' : 'bg-gray-600'}`}
              aria-pressed={aspectRatio === 4/3}
            >
              4:3
            </button>
            <button 
              onClick={() => handleAspectRatioChange(16/9)} 
              className={`btn-sm ${aspectRatio === 16/9 ? 'bg-blue-600' : 'bg-gray-600'}`}
              aria-pressed={aspectRatio === 16/9}
            >
              16:9
            </button>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => dispatch(setShowCropper(false))} 
              className="btn-secondary m-4"
              disabled={isLoading}
              aria-label="Cancel cropping"
            >
              Cancel
            </button>
            <button 
              onClick={cropHandler} 
              className="btn m-4"
              disabled={isLoading}
              aria-label="Apply crop"
            >
              {isLoading ? "Processing..." : "Apply Crop"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CroppedImage;
