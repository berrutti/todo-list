type TaskProps = {
  id: string;
  createdTime: Date;
  editedTime?: Date;
  text: string;
  done: boolean;
  toggleDone: Function;
};

function Task({ id, text, done, toggleDone }: TaskProps): JSX.Element {
  const clicked = (id: string) => console.log("Clicked", id);

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
          <button onClick={() => clicked(id)}>Edit</button>
          <button onClick={() => clicked(id)}>Delete</button>
        </div>
      </div>
    </li>
  );
}

export default Task;
