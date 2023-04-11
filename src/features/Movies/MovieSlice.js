import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Moviapi from "../../common/apis/Moviapi";
import { APIkey } from "../../common/apis/Movieapikey";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "war";
    const response = await Moviapi.get(
      `?apiKey=${APIkey}&S=${movieText}&type=movie`
    );

    return response.data;
  }
);
const initialState = {
  movies: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      //whenever movie get payload ,state need to be updated
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      //third action creator..//failure of api call
      console.log("rejected successfully");
    },
  },
});
export const { addMovies } = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies; //to get data from store
export default movieSlice.reducer;
