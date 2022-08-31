/* eslint-disable */
import React from 'react';
import './Character.css';
import PropTypes from 'prop-types';

const Character = (props) => {
const { newhero } = props;

  return (
    <>
      <div className="individual-character">
        <p className="hero-name">{newhero.name}</p>
        <p className="how-many-comics">{`id: ${newhero.id}`}</p>
        <img className="hero-image" src={`${newhero.thumbnail.path}.${newhero.thumbnail.extension}`} alt="superhero-image" />
      </div>
    </>
  );
};

Character.propTypes = {
  newhero: PropTypes.object.isRequired,
};

export default Character;
