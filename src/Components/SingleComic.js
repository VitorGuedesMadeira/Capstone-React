/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getComic } from '../Redux/HomeReducer/HomeReducer';
import './SingleComic.css';

const SingleComic = () => {
  const location = useLocation();
  const singleComicUrl = location.state;
  const dispatch = useDispatch();
  const comic = useSelector((state) => state.heros);
  useEffect(() => {
    dispatch(getComic(singleComicUrl));
  }, []);
  const comicInfos = comic[0];
  console.log(comicInfos);

  return (
    <>
      <div className="single-comic-section">
        <img className="comic-image" src={`${comicInfos.thumbnail.path}.${comicInfos.thumbnail.extension}`} alt="superhero-comic" />
      </div>
      <div className="comic-title">
        {comicInfos.description ? comicInfos.description : 'Comic Status'}
      </div>
      <ul className="">
        <li className="character-status">{`Title: ${comicInfos.title ? comicInfos.title : 'Information not found'}`}</li>
        <li className="character-status">{`Id: ${comicInfos.id ? comicInfos.id : 'Information not found'}`}</li>
        <li className="character-status">{`Pages: ${comicInfos.pageCount ? comicInfos.pageCount : 'Information not found'}`}</li>
        <li className="character-status">{`Characters: ${comicInfos.chracters ? comicInfos.characters.available : 'Information not found'}`}</li>
        <li className="character-status">{`Format: ${comicInfos.format ? comicInfos.format : 'Information not found'}`}</li>
      </ul>
    </>
  );
};

export default SingleComic;
