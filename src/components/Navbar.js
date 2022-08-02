import React, { useState } from 'react';
import getMovies from '../helpers/getMovies';
import styles from './Navbar.module.css';
import { useDispatch } from 'react-redux';
import { setMovies, setPageNumber, setSearchQuery } from '../store/appSlice';

const Navbar = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await getMovies({ query: value, pageNumber: 1 });
      dispatch(setMovies(response.data.Search));
      console.log(response.data.Search);
    } catch (error) {
      console.log(error);
    }
    setValue('');
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>LOGO</div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={value}
          onChange={onChangeHandler}
          className={styles.input}
        />
      </form>
      <div className={styles.fake}></div>
    </div>
  );
};

export default Navbar;
