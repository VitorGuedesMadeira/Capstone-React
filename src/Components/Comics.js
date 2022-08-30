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
          <p className="character-id">{`ID: ${individualHero.id}`}</p>
        </div>
      </div>
      <div className="character-description">
        <p>{`"${individualHero.description}"`}</p>
      </div>
      <div className="character-comics">
        <div className="comics-title">
          {`All comics (${individualHero.comics.available})`}
        </div>
        {individualHeroComics.length ? individualHeroComics.map((comic) => <Link to="SingleComic"><div className="character-status" key={comic.name}>{comic.name}</div></Link>) : <div className="status-loading">No comics related</div>}
      </div>
    </div>
  );
};

export default Comics;
