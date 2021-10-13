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
        type="button"
        data-test-id="undone-tasks-button"
        className={getButtonClassName(FilterValues.UNDONE, currentFilter)}
        onClick={() => setFilter(FilterValues.UNDONE)}
      >
        To Do
      </button>
      <button
        type="button"
        data-test-id="done-tasks-button"
        className={getButtonClassName(FilterValues.DONE, currentFilter)}
        onClick={() => setFilter(FilterValues.DONE)}
      >
        Done
      </button>
      <button
        type="button"
        data-test-id="all-tasks-button"
        className={getButtonClassName(FilterValues.ALL, currentFilter)}
        onClick={() => setFilter(FilterValues.ALL)}
      >
        All
      </button>
    </>
  );
}

export default FilterSelector;
