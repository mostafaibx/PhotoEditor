import useApplyFilter from "../../hooks/useApplyFilter";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setShowMenu } from "../../Store/reducers/MenuesReducer";

// Define filter options as a constant array for better maintainability
const FILTER_OPTIONS = [
  { id: "bw", label: "Black & White" },
  { id: "cool", label: "Cool" },
  { id: "warm", label: "Warm" },
  { id: "modern", label: "Modern" },
  { id: "asesthict", label: "Aesthetic" }, // Fixed typo in "Aesthetic"
  { id: "urban", label: "Urban" }
];

// Create a reusable FilterButton component
const FilterButton: React.FC<{
  option: { id: string; label: string };
  onClick: (target: string, e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
}> = ({ option, onClick, isActive }) => (
  <button
    className={`filter-btn ${isActive ? "bg-blue-900 bg-opacity-30" : ""}`}
    onClick={(e) => onClick(option.id, e)}
    aria-label={`Apply ${option.label} filter`}
    aria-pressed={isActive}
  >
    {option.label}
  </button>
);

const PreFilters = () => {
  const dispatch = useAppDispatch();
  const menuState = useAppSelector((state) => state.menu);
  const { applyFilter, isClicked } = useApplyFilter();

  const showMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const menuId = (e.target as HTMLButtonElement).id;
    dispatch(setShowMenu(menuId));
  };

  return (
    <div className="flex flex-col justify-center items-center md:m-4 relative mx-4">
      <button 
        className="btn" 
        onClick={showMenuHandler} 
        id="filter"
        aria-expanded={menuState.menu.filter}
        aria-controls="filter-menu"
      >
        Filters
      </button>
      
      {menuState.menu.filter && (
        <div 
          id="filter-menu"
          className="flex flex-col p-4 rounded-lg text-white bg-gray-800 bg-opacity-50 absolute left-0 top-10 md:top-0 z-10 md:relative"
          role="menu"
        >
          {FILTER_OPTIONS.map(option => (
            <FilterButton
              key={option.id}
              option={option}
              onClick={applyFilter}
              isActive={isClicked[option.id as keyof typeof isClicked]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PreFilters;
