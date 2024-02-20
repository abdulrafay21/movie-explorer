import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  favoriteMovies: [],
};

const moviesSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    addtoFavorite: (state, action) => {
      state.favoriteMovies.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const index = state.favoriteMovies.findIndex(
        (movie) => movie.id === action.payload
      );
      state.favoriteMovies.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movies.push(...action.payload);
    });
  },
});

export const getAllMovies = createAsyncThunk(
  "movies/getAllMovies",
  async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: "1",
        sort_by: "popularity.desc",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDgzMzNlZjk4MzViYzRhYzlmZjUxODAwYThjMTJkMSIsInN1YiI6IjY1ZDRhNTc5OTY3Y2M3MDE4NjYzMzFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zDwp_DzmOfDvfAyYkjfFWtwzy8r2GFkhFISkPw-ndJA",
      },
    };
    try {
      const result = await axios.request(options);
      return result.data.results;
    } catch (error) {
      console.error(error);
    }
  }
);

export const { addtoFavorite, removeFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
