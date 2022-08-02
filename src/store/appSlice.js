import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  pageNumber: 1,
  searchQuery: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
    setPageNumber: (state, { payload }) => {
      state.pageNumber = payload;
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
});

export const { setMovies, setPageNumber, setSearchQuery } = appSlice.actions;

export default appSlice.reducer;
