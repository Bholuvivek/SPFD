import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

export function App() {
  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<string[] | number | boolean>([]);

  const handleSubmit = () => {
    let id = Math.floor(Math.random() * 10 + 10);
    setList([...list, { id: id, name: todo, completed: false }]);
    setTodo("");
  };

  return (
    <>
      <div>
        <div>
          <h1>ToDo App Using React + Vite + Typescript</h1>
        </div>
        <div>
          <input type="text" onChange={inputChange} />
          <Button onClick={handleSubmit}>{<AddIcon />}</Button>
        </div>
        <div> for Showing the data</div>
      </div>
    </>
  );
}
