import { getButtonClassName } from "../utils";

export enum FilterValues {
  ALL = "ALL",
  DONE = "DONE",
  UNDONE = "UNDONE",
}

type FiltersProps = {
  currentFilter: FilterValues;
  setFilter: Function;
};

function FilterSelector({
  currentFilter,
  setFilter,
}: FiltersProps): JSX.Element {
  return (
    <>
      <button
        className={getButtonClassName(FilterValues.UNDONE, currentFilter)}
        onClick={() => setFilter(FilterValues.UNDONE)}
      >
        To Do
      </button>
      <button
        className={getButtonClassName(FilterValues.DONE, currentFilter)}
        onClick={() => setFilter(FilterValues.DONE)}
      >
        Done
      </button>
      <button
        className={getButtonClassName(FilterValues.ALL, currentFilter)}
        onClick={() => setFilter(FilterValues.ALL)}
      >
        All
      </button>
    </>
  );
}

export default FilterSelector;
