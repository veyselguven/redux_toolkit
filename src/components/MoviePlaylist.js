import { createRandomMovie } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store";
import SingleMovie from "./SingleMovie";
// import { store } from "../store/index";

function MoviePlaylist() {
  const dispatch = useDispatch();
  const moviePlaylist = useSelector((state) => {
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
    const action = addMovie(movie);
    // console.log("action=>", action);
    dispatch(action);
    // console.log("final", store.getState());
  };

  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie, index) => {
    return (
      <div key={index}>
        <SingleMovie
          movie={movie}
          index={index}
          handleMovieRemove={handleMovieRemove}
        />
      </div>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
