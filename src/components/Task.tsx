import { ChangeEvent, FormEvent, useState } from "react";

export interface ITask {
  id: string;
  createdTime: string;
  editedTime?: string;
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
  createdTime,
  editedTime,
  toggleDone,
  deleteTask,
  editTask,
}: TaskProps): JSX.Element {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState<string>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEditing(false);
    editTask(id, editedText);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedText("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };

  const title = editedTime
    ? `Edited Time: ${editedTime}`
    : `Created Time: ${createdTime}`;

  return (
    <li>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id={id}
              type="text"
              placeholder={text}
              value={editedText || text}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      ) : (
        <div>
          <div>
            <input
              id={id}
              type="checkbox"
              defaultChecked={done}
              onChange={() => toggleDone(id)}
            />
            <label htmlFor={id} title={title}>
              {text}
            </label>
          </div>
          <div>
            <button type="button" onClick={() => setEditing(true)}>
              Edit
            </button>
            <button type="button" onClick={() => deleteTask(id)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default Task;
