import { createRandomSong } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong, editSong } from "../store";
import { useState } from "react";
import EditSongList from "./EditSongList";

function SongPlaylist() {
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();

  const songPlaylist = useSelector((state) => {
    //   console.log(state);
    return state.songs;
  });
  const handleSongAdd = (song) => {
    const action = addSong(song);
    // console.log("action=>", action);
    dispatch(action);
    // console.log(song);
  };
  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  };

  const handleSongEdit = (index, song) => {
    setShowEdit(true);
    dispatch(editSong({ index, song }));
  };

  const renderedSongs = songPlaylist.map((song, index) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongEdit(index, song)}
          className="button is-warning"
        >
          Edit
        </button>
        {showEdit ? (
          <EditSongList
            handleSongEdit={handleSongEdit}
            song={song}
            index={index}
            setShowEdit={setShowEdit}
          />
        ) : null}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
