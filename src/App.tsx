import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Task, { ITask } from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const addTask = (text: string) => {
    const createdTime = new Date();
    const id = createdTime.valueOf().toString();
    const newTask = {
      id,
      text,
      done: false,
      createdTime,
      editedTime: undefined,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id: string, text: string) => {
    const editedTime = new Date();
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

  const displayedTasks = tasks.map((task) => (
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
        <ul>{displayedTasks}</ul>
      </Container>
    </div>
  );
}

export default App;
