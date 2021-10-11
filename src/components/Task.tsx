import { useState } from "react";

export interface ITask {
  id: string;
  createdTime: Date;
  editedTime?: Date;
  text: string;
  done: boolean;
}

type TaskProps = ITask & {
  toggleDone: Function;
  deleteTask: Function;
  editTask: Function;
};

function Task({
  id,
  text,
  done,
  toggleDone,
  deleteTask,
  editTask,
}: TaskProps): JSX.Element {
  const [editing, setEditing] = useState(false);
  const saveEdition = () => {
    setEditing(false);
    editTask(id, text);
  };

  return (
    <li>
      <div>
        <div>
          <input
            id={id}
            type="checkbox"
            defaultChecked={done}
            onChange={() => toggleDone(id)}
          />
          <label htmlFor={id}>{text}</label>
        </div>
        <div>
          {editing ? (
            <button onClick={saveEdition}>Save</button>
          ) : (
            <button onClick={() => setEditing(true)}>Edit</button>
          )}

          <button onClick={() => deleteTask(id)}>Delete</button>
        </div>
      </div>
    </li>
  );
}

export default Task;
