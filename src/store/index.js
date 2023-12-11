import { configureStore, createSlice } from "@reduxjs/toolkit";

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
    reset(state, action) {
      console.log(action); //{type: 'movie/reset', payload: undefined}
      return [];
    },
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
  },
  extraReducers(builder) {
    builder.addCase("movie/reset", (state, action) => {
      //   state.push("newsong"); //if you do this,movie will be reset song will be add new song
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

export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie, reset } = moviesSlice.actions;
