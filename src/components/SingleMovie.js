import React, { useState } from "react";
import EditMovieList from "./EditMovieList";
import { useDispatch } from "react-redux";
import { editMovie } from "../store";

function SingleMovie({ movie, handleMovieRemove, index }) {
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();

  const handleMovieEdit = (index, movie) => {
    dispatch(editMovie({ index, movie }));
    setShowEdit(true);
  };
  return (
    <>
      <li key={movie}>
        {movie}

        <button
          onClick={() => handleMovieEdit(index, movie)}
          className="button is-warning"
        >
          Edit
        </button>
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
        {showEdit ? (
          <EditMovieList
            handleMovieEdit={handleMovieEdit}
            movie={movie}
            index={index}
            setShowEdit={setShowEdit}
          />
        ) : null}
      </li>
    </>
  );
}

export default SingleMovie;
