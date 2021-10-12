import { FilterValues } from "./components/FilterSelector";
import { ITask } from "./components/Task";

import { byFilterValue, getButtonClassName } from "./utils";

describe("byFilterValue", () => {
  const todoTask: ITask = {
    id: "123",
    text: "Take out the trash",
    createdTime: "2021-10-12T00:30:32.763Z",
    done: false,
  };

  const doneTask: ITask = {
    id: "456",
    text: "Write some tests",
    createdTime: "2021-10-11T00:30:32.763Z",
    done: true,
  };

  it('does not filter the task when the selected filter is "all"', () => {
    expect(byFilterValue(todoTask, FilterValues.ALL)).toEqual(true);
    expect(byFilterValue(doneTask, FilterValues.ALL)).toEqual(true);
  });

  it('filters the undone task when the selected filter is "done"', () => {
    expect(byFilterValue(todoTask, FilterValues.DONE)).toEqual(false);
    expect(byFilterValue(doneTask, FilterValues.DONE)).toEqual(true);
  });

  it('filters the done task when the selected filter is "undone"', () => {
    expect(byFilterValue(doneTask, FilterValues.UNDONE)).toEqual(false);
    expect(byFilterValue(todoTask, FilterValues.UNDONE)).toEqual(true);
  });
});

describe("getButtonClassName", () => {
  it('returns "pressed" when the selected filter is the one from the button', () => {
    expect(
      getButtonClassName(FilterValues.UNDONE, FilterValues.UNDONE)
    ).toEqual("pressed");
  });

  it('returns "unpressed" when the selected filter is not the one from the button', () => {
    expect(getButtonClassName(FilterValues.ALL, FilterValues.UNDONE)).toEqual(
      "unpressed"
    );
  });
});
