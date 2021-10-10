import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "My task",
      done: true,
      createdTime: new Date(),
      editedTime: undefined,
    },
    {
      id: "2",
      text: "My other task",
      done: false,
      createdTime: new Date(),
      editedTime: undefined,
    },
  ]);
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
