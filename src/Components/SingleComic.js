import React from 'react';

const SingleComic = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="comics-section">
      <div className="marvel-comics-title">
        <img className="marvel-comics-image" src="" alt="superhero" />
        <div className="marvel-comics-text">
          <p className="character-name">"comic"</p>
          <p className="character-id">"comic id"</p>
        </div>
      </div>
      <div className="character-description">
        <p>"description"</p>
      </div>
      <div className="character-comics">
        <div className="comics-title">
          "All comics"
        </div>
        <div>"test"</div>
      </div>
    </div>
  );
};

export default SingleComic;