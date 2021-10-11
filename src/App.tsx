import { useLocalStorage } from "./hooks/useLocalStorage";

import FilterSelector, { FilterValues } from "./components/FilterSelector";
import Container from "./components/Container";
import Header from "./components/TaskGenerator";
import Task, { ITask } from "./components/Task";

import { byFilterValue } from "./utils";
import "./App.css";

function App() {
  const [currentFilter, setCurrentFilter] = useLocalStorage<FilterValues>(
    "currentFilter",
    FilterValues.UNDONE
  );
  const [tasks, setTasks] = useLocalStorage<ITask[]>("tasks", []);

  const addTask = (text: string) => {
    const createdTime = new Date().toISOString();
    const id = createdTime.valueOf().toString();
    const newTask = {
      id,
      text,
      done: false,
      createdTime,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id: string, text: string) => {
    const editedTime = new Date().toISOString();
    const updatedTasks = tasks.map((task) =>
      id === task.id ? { ...task, editedTime, text } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) =>
    setTasks(tasks.filter((task) => task.id !== id));

  const toggleDone = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      id === task.id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const tasksToDisplay = tasks
    .filter((task) => byFilterValue(task, currentFilter))
    .map((task) => (
      <Task
        id={task.id}
        text={task.text}
        done={task.done}
        createdTime={task.createdTime}
        editedTime={task.editedTime}
        toggleDone={toggleDone}
        deleteTask={deleteTask}
        editTask={editTask}
        key={task.id}
      />
    ));

  return (
    <div className="App">
      <Container>
        <Header addTask={addTask} />
        <FilterSelector
          setFilter={(filter: FilterValues) => setCurrentFilter(filter)}
        />
        <ul>{tasksToDisplay}</ul>
      </Container>
    </div>
  );
}

export default App;
