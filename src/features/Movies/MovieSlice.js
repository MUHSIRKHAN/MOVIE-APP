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
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "friends";
    const response = await Moviapi.get(
      `?apiKey=${APIkey}&S=${seriesText}&type=series`
    );

    return response.data;
  }
);
export const fetchAsyncMoviesOrShowDeatils = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDeatails",
  async (id ) => {

    const response = await Moviapi.get(
      `?apiKey=${APIkey}&i=${id}&Plot=full `
    );

   
    return response.data;
  }
);
const initialState = {
  movies: {},
  shows:{},
  selectedMovieOrShow:{}
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
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully++++");
      return { ...state, shows: payload };
    },
    [fetchAsyncMoviesOrShowDeatils.fulfilled]: (state,newOne)=> {
      console.log("Fetched successfully++");
      console.log(newOne)
      return { ...state, selectedMovieOrShow: newOne.payload };
    },
  },
});
export const { addMovies } = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies; 
export const getAllShows = (state) => state.movies.shows;//to get data from store
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow 

export default movieSlice.reducer;
