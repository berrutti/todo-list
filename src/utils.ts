import { FilterValues } from "./components/FilterSelector";
import { ITask } from "./components/Task";

export const byFilterValue = (
  task: ITask,
  currentFilter: FilterValues
): boolean => {
  switch (currentFilter) {
    case FilterValues.ALL:
      return true;
    case FilterValues.DONE:
      return task.done;
    case FilterValues.UNDONE:
      return !task.done;
  }
};
