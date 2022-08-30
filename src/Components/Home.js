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
    if (query === '') {
      dispatch(getHeros());
    } else {
      dispatch(getHerosSearch(query));
    }
  }, [query]);

  return (
    <div className="characters-section">
      <div className="marvel-characters-title">
        <img className="marvel-characters-image" src={marvelImage} alt="marvel-heros" />
        <div className="marvel-characters-text">
          <p className="characters-text">CHARACTERS</p>
          <p className="characters-counter">(1562)</p>
        </div>
      </div>
      <div className="testing">
        <div className="marvel-characters">
          <div className="character-title">
            <Search search={(q) => setQuery(q)} />
          </div>
          {heros.length ? heros.map((hero) => <Link state={hero} className="characters-link" key={`heroid-${hero.id}`} to="Comics"><Character newhero={hero} /></Link>) : <div className="loading">Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export default Home;
