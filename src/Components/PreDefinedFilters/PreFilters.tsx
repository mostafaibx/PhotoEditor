import { useState } from "react";

import useApplyFilter from "../../hooks/useApplyFilter";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setShowMenu } from "../../Store/reducers/MenuesReducer";

const PreFilters = () => {
  const dispatch = useAppDispatch();
  const menuState = useAppSelector((state) => state.menu);

  const showMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const menuId = (e.target as HTMLButtonElement).id;
    dispatch(setShowMenu(menuId));
  };

  const { applyFilter, isClicked } = useApplyFilter();

  return (
    <div className="flex flex-col justify-center items-center md:m-4 relative mx-4">
      <button className="btn" onClick={showMenuHandler} id="filter">
        Filters
      </button>
      {menuState.menu.filter && (
        <div className="flex flex-col p-4 rounded-lg text-white bg-gray-800 bg-opacity-50 absolute left-0 top-10 md:top-0 z-10 md:relative top-0">
          <button
            className={`filter-btn ${
              isClicked.bw && "bg-blue-900 bg-opacity-30"
            }`}
            onClick={(e) => applyFilter("bw", e)}
          >
            black & white
          </button>

          <button
            className={`filter-btn ${
              isClicked.cool && "bg-blue-900 bg-opacity-30"
            }`}
            onClick={(e) => applyFilter("cool", e)}
          >
            Cool
          </button>
          <button
            className={`filter-btn ${
              isClicked.warm && "bg-blue-900 bg-opacity-30"
            }`}
            onClick={(e) => applyFilter("warm", e)}
          >
            Warm
          </button>
          <button
            className={`filter-btn ${
              isClicked.modern && "bg-blue-900 bg-opacity-30"
            }`}
            onClick={(e) => applyFilter("modern", e)}
          >
            Modern
          </button>
          <button
            className={`filter-btn ${
              isClicked.asesthict && "bg-blue-900 bg-opacity-30"
            }`}
            onClick={(e) => applyFilter("asesthict", e)}
          >
            Asesthict
          </button>
          <button
            className={`filter-btn ${
              isClicked.urban && "bg-blue-900 bg-opacity-30"
            }`}
            onClick={(e) => applyFilter("urban", e)}
          >
            Urban
          </button>
        </div>
      )}
    </div>
  );
};

export default PreFilters;
