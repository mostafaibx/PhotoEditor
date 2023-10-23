import { useState } from "react";

import useApplyFilter from "../../hooks/useApplyFilter";

const PreFilters = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  const { applyFilter, isClicked } = useApplyFilter();

  return (
    <div className="flex flex-col justify-center items-center md:m-4 relative ">
      <button className="btn" onClick={showMenuHandler}>
        Filters
      </button>
      {showMenu && (
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
