import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "My task", done: true },
    { id: "2", text: "My other task", done: false },
  ]);
  const addTask = (text: string) => console.log(text);
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
