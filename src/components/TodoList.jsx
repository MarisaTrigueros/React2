import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [addTodos, setAddTodos] = useState("");

  const handleChange = (item) => {
    setAddTodos(item.target.value);
  };

  const handleClick = () => {
    //!  newTodo.trim() !== '' verifica que newTodo no sea una cadena vacía después de eliminar los espacios en blanco al principio y al final.
    if (addTodos.trim() !== "") {
      setTodos([...todos, addTodos]);
      setAddTodos("");
    }
  };

  const handleKeyPress = (item) => {
    if (item.key === "Enter") {
      handleClick();
    }
  };

  const handleClear = () => {
    setTodos([])
  };

  const handleRemove = (index) => {
    const removeItems = [...todos];
    removeItems.splice(index, 1);
    setTodos(removeItems);
  }

  return (
    <>
      <h2>Lista de viajes</h2>
      <input
        type="text"
        value={addTodos}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="¿Dónde nos vamos?"
      />
      {" "}
      <button onClick={handleClick}>Añadir</button>
      {" "}
      <button type="clear" onClick={handleClear}>Clear</button>
      <ul>
        {todos.map((trip, index) => (
          <li key={index}>
            {trip}
            {" "}
            <button onClick={() => handleRemove(index)}>Eliminar</button>
          </li>

        ))}
      </ul>
    </>
  );
}

export default TodoList;
