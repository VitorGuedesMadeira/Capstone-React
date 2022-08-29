/* eslint-disable */
import React from 'react';
import './Character.css';
import PropTypes from 'prop-types';

const Character = (props) => {
  const { newhero } = props;
  console.log(newhero);

  return (
    <>
      <div className="individual-character">
        <p className="hero-name">{newhero.name}</p>
        <img className="hero-image" src={`${newhero.thumbnail.path}.${newhero.thumbnail.extension}`} alt="superhero-image" />
      </div>
    </>
  );
};

Character.propTypes = {
  newhero: PropTypes.object.isRequired,
};

export default Character;
