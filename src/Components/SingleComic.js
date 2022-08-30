/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getComic } from '../Redux/HomeReducer/HomeReducer';
import './SingleComic.css';

const SingleComic = () => {
  const location = useLocation();
  const singleComicUrl = location.state;
  console.log(location);
  const dispatch = useDispatch();
  const comic = useSelector((state) => state.heros);
  console.log(singleComicUrl);
  useEffect(() => {
    dispatch(getComic(singleComicUrl));
  }, []);
  const comicInfos = comic[0];

  return (
    <>
      <div className="single-comic-section">
        <img className="comic-image" src={`${comicInfos.thumbnail.path}.${comicInfos.thumbnail.extension}`} alt="superhero-comic" />
      </div>
      <div className="comic-title">
        Title
      </div>
      <ul className="">
        <li className="character-status">1</li>
        <li className="character-status">2</li>
        <li className="character-status">3</li>
        <li className="character-status">4</li>
        <li className="character-status">5</li>
      </ul>
    </>
  );
};

export default SingleComic;
