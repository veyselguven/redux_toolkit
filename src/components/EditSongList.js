import React, { useState } from "react";

function EditSongList({ song, index, handleSongEdit, setShowEdit }) {
  const [state, setState] = useState(song);
  //console.log("state=>", state);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSongEdit(index, state);
    setShowEdit(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button style={{ gap: 20 }}>Save</button>
    </form>
  );
}

export default EditSongList;
