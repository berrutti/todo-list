import { ChangeEvent, FormEvent, useState } from "react";
import { CancelIcon } from "../icons/Cancel";
import { DeleteIcon } from "../icons/Delete";
import { EditIcon } from "../icons/Edit";
import { SaveIcon } from "../icons/Save";

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
  const [editedText, setEditedText] = useState<string>(text);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEditing(false);
    if (editedText) {
      editTask(id, editedText);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };

  const title = editedTime
    ? `Last Updated: ${editedTime}`
    : `Created: ${createdTime}`;

  return (
    <li>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id={id}
              type="text"
              placeholder={text}
              value={editedText}
              onChange={handleChange}
            />
            <button
              type="button"
              className="icon-button"
              onClick={() => setEditing(false)}
            >
              <CancelIcon />
            </button>
            <button type="submit" className="icon-button">
              <SaveIcon />
            </button>
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
            <label className={done ? "crossed" : ""} htmlFor={id} title={title}>
              {text}
            </label>
            <button
              type="button"
              className="icon-button"
              onClick={() => setEditing(true)}
            >
              <EditIcon />
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={() => deleteTask(id)}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default Task;
