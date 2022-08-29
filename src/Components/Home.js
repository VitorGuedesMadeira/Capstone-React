import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHeros, getHerosSearch } from '../Redux/HomeReducer/HomeReducer';
import './Home.css';
import Character from './Character';
import Search from './Search';
import marvelImage from '../Images/marvelImage.jpg';

const Home = () => {
  const [query, setQuery] = useState('');
  const heros = useSelector((state) => state.heros);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(query);
    if (query === '') {
      dispatch(getHeros());
    } else {
      dispatch(getHerosSearch(query));
    }
  }, [query]);
  console.log(heros);

  return (
    <div className="characters-section">
      <div className="marvel-characters-title">
        <img className="marvel-characters-image" src={marvelImage} alt="marvel-heros" />
        <div className="marvel-characters-text">
          <p>ALL CHARACTERS</p>
          <p>heros.</p>
        </div>
      </div>
      <div className="marvel-characters">
        <div className="character-title">
          <Search search={(q) => setQuery(q)} />
        </div>
        {heros.length ? heros.map((hero) => <Link state={hero} className="characters-link" key={hero.id} to="Comics"><Character newhero={hero} /></Link>) : 'loading'}
      </div>
    </div>
  );
};

export default Home;
