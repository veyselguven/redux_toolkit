import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

export const reset = createAction("app/reset");
// export const edit = createAction("app/edit");

console.log(reset()); // {type: 'app/reset', payload: undefined}

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      let index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    editMovie(state, action) {
      const { index, movie } = action.payload;
      state[index] = movie;
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      // action.payload == string, the song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    editSong(state, action) {
      const { index, song } = action.payload;
      state[index] = song;
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

// console.log(store.getState());
export { store };

export const { addSong, removeSong, editSong } = songsSlice.actions;
export const { addMovie, removeMovie, editMovie } = moviesSlice.actions;
