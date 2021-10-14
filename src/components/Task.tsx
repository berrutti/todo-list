import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FiX as CancelIcon } from "react-icons/fi";
import { FiTrash2 as DeleteIcon } from "react-icons/fi";
import { FiEdit as EditIcon } from "react-icons/fi";
import { FiCheck as SaveIcon } from "react-icons/fi";
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
  const [editedText, setEditedText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    if (editedText) {
      editTask(id, editedText);
    }
    finishEditing();
  };

  const finishEditing = () => {
    setEditedText("");
    setEditing(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };

  useEffect(() => {
    if (editing && inputRef?.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const title = editedTime
    ? `Last Updated: ${editedTime}`
    : `Created: ${createdTime}`;

  return (
    <li>
      {editing ? (
        <>
          <input
            className="list-input"
            id={id}
            type="text"
            placeholder={text}
            value={editedText}
            onChange={handleChange}
            ref={inputRef}
          />
          <CancelIcon
            data-test-id="cancel-icon"
            tabIndex={0}
            onKeyPress={finishEditing}
            onClick={finishEditing}
          />
          <SaveIcon
            data-test-id="save-icon"
            tabIndex={0}
            onKeyPress={handleSave}
            onClick={handleSave}
          />
        </>
      ) : (
        <>
          <input
            id={id}
            type="checkbox"
            defaultChecked={done}
            onChange={() => toggleDone(id)}
          />
          <label className={done ? "crossed" : ""} htmlFor={id} title={title}>
            {text}
          </label>
          <EditIcon
            data-test-id="edit-icon"
            tabIndex={0}
            onKeyPress={() => setEditing(true)}
            onClick={() => setEditing(true)}
          />
          <DeleteIcon
            data-test-id="delete-icon"
            tabIndex={0}
            onKeyPress={() => deleteTask(id)}
            onClick={() => deleteTask(id)}
          />
        </>
      )}
    </li>
  );
}

export default Task;
