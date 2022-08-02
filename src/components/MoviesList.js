import React from 'react';
import styles from './MoviesList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from './MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import getMovies from '../helpers/getMovies';
import { setMovies, setPageNumber } from '../store/appSlice';

const MoviesList = () => {
  const { movies, pageNumber, searchQuery } = useSelector((state) => state.app);

  console.log(movies);
  const dispatch = useDispatch();

  const fetchMoreMovies = async () => {
    try {
      const response = await getMovies({ searchQuery, pageNumber: 1 });
      console.log(response);
      dispatch(setMovies([...movies, ...response.data.Search]));
      dispatch(setPageNumber(pageNumber + 1));
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchMoreMovies = () => {
  //   getMovies(searchQuery, pageNumber).then(({ data }) => {
  //     console.log(data);
  //     dispatch(setMovies([...movies, ...data.Search]));
  //     dispatch(setPageNumber(pageNumber + 1));
  //   });
  // };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Your Movies</h1>
        <h5>Below you can find the movies that cam back from your search</h5>
      </div>
      <InfiniteScroll
        className={styles.cards}
        dataLength={movies.length}
        next={fetchMoreMovies}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default MoviesList;
