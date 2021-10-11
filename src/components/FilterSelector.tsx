export enum FilterValues {
  ALL = "ALL",
  DONE = "DONE",
  UNDONE = "UNDONE",
}

type FiltersProps = {
  setFilter: Function;
};

function FilterSelector({ setFilter }: FiltersProps): JSX.Element {
  return (
    <>
      <button onClick={() => setFilter(FilterValues.UNDONE)}>To Do</button>
      <button onClick={() => setFilter(FilterValues.DONE)}>Done</button>
      <button onClick={() => setFilter(FilterValues.ALL)}>All</button>
    </>
  );
}

export default FilterSelector;
