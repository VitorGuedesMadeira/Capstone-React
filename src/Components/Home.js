import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeros } from '../Redux/HomeReducer/HomeReducer';
import './Home.css';
import Character from './Character';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHeros());
  }, []);
  const heros = useSelector((state) => state.heros);
  console.log(heros);

  return (
    <div className="characters-section">
      <div className="marvel-characters-title">
        <p className="marvel-characters-image">Marvel Image</p>
        <div className="marvel-characters-text">
          <p>MARVEL</p>
          <p>1,234 views</p>
        </div>
      </div>
      <div className="marvel-characters">
        <div className="character-title">Avengers</div>
        <div className="individual-character">1</div>
        <div className="individual-character">2</div>
        <div className="individual-character">3</div>
        <div className="individual-character">4</div>
        <div className="individual-character">5</div>
        <Character />
      </div>
    </div>
  );
};

export default Home;
