import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  interface ListItem {
    name: string;
    id: number;
    completed: boolean;
  }
  const [todo, setTodo] = useState("");
  const [list, setList] = useState<ListItem[]>([]);

  const handleSubmit = () => {
    if (todo === "") alert("Please Enter Task");
    else {
      let id = Math.floor(Math.random() * 10 + 10);
      setList([...list, { id: id, name: todo, completed: false }]);
      setTodo("");
      // console.log(list);
    }
  };

  const handleEdit = (id: number) => {
    const selectedItem = list.find((item) => item.id === id);
    if (selectedItem) {
      setTodo(selectedItem.name);
      const updatedList = list.filter((item) => item.id !== id);
      setList(updatedList);
    }
  };

  const handleDelete = (id: number) => {
    let updateList = list.filter((items) => items.id != id);
    setList(updateList);
    console.log(list);
  };

  return (
    <>
      <h1>My todo</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <IconButton
        style={{ background: "blue", margin: "10px" }}
        onClick={handleSubmit}
      >
        <AddIcon color="success" />
      </IconButton>

      <List sx={{ width: 500 }}>
        {list.map((items, index) => (
          <ListItem
            sx={{ p: 2 }}
            key={index}
            secondaryAction={
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  style={{ background: "#FFF", margin: "10px" }}
                  onClick={() => handleEdit(items.id)}
                >
                  <EditNoteIcon color="secondary" />
                </IconButton>
                <IconButton
                  style={{ background: "#FFF", margin: "10px" }}
                  onClick={() => handleDelete(items.id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </Box>
            }
          >
            {" "}
            <ListItemText primary={items.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
