import React from 'react';
import { useLocation } from 'react-router-dom';
import './Comics.css';

const Comics = () => {
  const location = useLocation();
  console.log(location);
  const individualHero = location.state;
  const individualHeroComics = individualHero.comics.items;

  return (
    <div className="comics-section">
      <div className="marvel-comics-title">
        <img className="marvel-comics-image" src={`${individualHero.thumbnail.path}.${individualHero.thumbnail.extension}`} alt="superhero" />
        <div className="marvel-comics-text">
          <p className="character-name">{individualHero.name}</p>
          <p>{`ID: ${individualHero.id}`}</p>
        </div>
      </div>
      <div className="character-comics">
        <div className="comics-title">
          {`All comics (${individualHero.comics.available})`}
        </div>
        {individualHeroComics.length ? individualHeroComics.map((comic) => <div className="character-status" key={comic.name}>{comic.name}</div>) : <div className="character-status">No comics related</div>}
      </div>
    </div>
  );
};

export default Comics;

/* const timeStamp = '1661492412';
  const publicApiKey = 'e0a86583bfecfc0e5640736439176bd0';
  const md5 = 'dc0d614d9c848f77f7955f9988d47498';
  const fetchAPI = async () => {
    const marvel = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5}&limit=100`).then((data) => data.json());
    console.log(marvel);
*/
