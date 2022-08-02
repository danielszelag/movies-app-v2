import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = (props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={props.movie.Poster} />
      <div className={styles.year}>{props.movie.Year}</div>
      <div className={styles.stars}>*****</div>
      <div className={styles.title}>{props.movie.Title}</div>
    </div>
  );
};

export default MovieCard;
