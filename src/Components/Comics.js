import React from 'react';
import './Comics.css';

const Comics = () => {
  const vitor = 'CHARACTER NAME';

  return (
    <div className="comics-section">
      <div className="marvel-comics-title">
        <p className="marvel-comics-image">Character image</p>
        <div className="marvel-comics-text">
          <p>{vitor}</p>
          <p>842 views</p>
        </div>
      </div>
      <div className="character-comics">
        <div className="comics-title">All comics</div>
        <div className="character-status">1</div>
        <div className="character-status">2</div>
        <div className="character-status">3</div>
        <div className="character-status">4</div>
        <div className="character-status">5</div>
        <div className="character-status">6</div>
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
