import { ChangeEvent, FormEvent, useState } from "react";

type HeaderProps = {
  addTask: Function;
};

function Header({ addTask }: HeaderProps): JSX.Element {
  const [text, setText] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(text);
    setText("");
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add your new Task</h2>

      <input
        type="text"
        name="text"
        autoComplete="off"
        value={text}
        placeholder="New Task..."
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Header;
