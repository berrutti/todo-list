import { useLocalStorage } from "./hooks/useLocalStorage";

import FilterSelector, { FilterValues } from "./components/FilterSelector";
import Container from "./components/Container";
import Header from "./components/TaskGenerator";
import Task, { ITask } from "./components/Task";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { byFilterValue } from "./utils";
import "./App.css";

function App() {
  const [currentFilter, setCurrentFilter] = useLocalStorage<FilterValues>(
    "currentFilter",
    FilterValues.UNDONE
  );
  const [tasks, setTasks] = useLocalStorage<ITask[]>("tasks", []);

  const addTask = (text: string) => {
    const newDate = new Date();
    const id = newDate.valueOf().toString();
    const createdTime = newDate.toISOString();
    const newTask = {
      id,
      text,
      done: false,
      createdTime,
    };
    setTasks([...tasks, newTask]);
    toast.success("Task created");
  };

  const editTask = (id: string, text: string) => {
    const editedTime = new Date().toISOString();
    const updatedTasks = tasks.map((task) =>
      id === task.id ? { ...task, editedTime, text } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    toast.warning("Task deleted");
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        if (task.done) {
          toast.info("Task reverted");
        } else {
          toast.success("Task completed");
        }
        return { ...task, done: !task.done };
      }
      return task;
    });
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
          currentFilter={currentFilter}
          setFilter={(filter: FilterValues) => setCurrentFilter(filter)}
        />
        <ul>{tasksToDisplay}</ul>
      </Container>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
      />
    </div>
  );
}

export default App;
