import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { setGrayscale } from "../Store/reducers/inputValuesReducer";

interface isClicked {
  bw: boolean;
  cool: boolean;
  warm: boolean;
  modern: boolean;
  asesthict: boolean;
  urban: boolean;
}

const useApplyFilter = () => {
  const colorState = useAppSelector((state) => state.colors);
  const dispatch = useAppDispatch();
  const [isClicked, setIsClicked] = useState<isClicked>({
    bw: false,
    cool: false,
    warm: false,
    modern: false,
    asesthict: false,
    urban: false,
  });
  const applyFilter = (
    target: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (target === "bw") {
      setIsClicked({ ...isClicked, bw: !isClicked.bw });
      if (colorState.grayscale === 100) {
        dispatch(setGrayscale(0));
      } else {
        dispatch(setGrayscale(100));
      }
    }

    if (target === "cool") {
      setIsClicked({ ...isClicked, cool: !isClicked.cool });
      //add the css variables
    }
    if (target === "warm") {
      setIsClicked({ ...isClicked, warm: !isClicked.warm });
      //add the css variables
    }
    if (target === "modern") {
      setIsClicked({ ...isClicked, modern: !isClicked.modern });
      //add the css variables
    }
    if (target === "asesthict") {
      setIsClicked({ ...isClicked, asesthict: !isClicked.asesthict });
      //add the css variables
    }
    if (target === "urban") {
      setIsClicked({ ...isClicked, urban: !isClicked.urban });
      //add the css variables
    }
  };
  return { isClicked, applyFilter };
};
export default useApplyFilter;
