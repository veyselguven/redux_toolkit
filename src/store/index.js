import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    //  name        function
    // "song"+"/"+ "addSong" ="song/addSong"

    // state is not the big state object in the store, it is the piece of state managed by this reducer
    addSong(state, action) {
      state.push(action.payload);
    },
    // "song"+"/"+ "removeSong" ="song/removeSong"  =>action of type name
    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

console.log(store); //{liftedStore: {…}, dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, …}

const startingState = store.getState(); // {songs: Array(0)}

console.log("startingState=>", startingState);

store.dispatch({
  type: "song/addSong",
  payload: "New Song!!!",
});

const finalState = store.getState(); //

console.log("finalState=>", finalState); // {songs: Array(1)}

// we are allowed to mutate state directly,as much as we want,  like we are using imer libary, we don have do return any state
