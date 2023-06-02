import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        color="secondary"
        size="small"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter New Task"
      />
      <Button
        type="submit"
        variant="contained"
        color="success"
        size="medium"
        style={{ marginTop: "auto", marginLeft: "5px" }}
      >
        Add
      </Button>
    </form>
  );
};

export default ToDoForm;
