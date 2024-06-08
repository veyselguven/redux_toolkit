import React, { useState } from "react";

function EditMovieList({ movie, index, handleMovieEdit, setShowEdit }) {
  const [state, setState] = useState(movie);
  //console.log("state=>", state);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleMovieEdit(index, state);
    setShowEdit(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button style={{ gap: 20 }}>Save</button>
    </form>
  );
}

export default EditMovieList;
