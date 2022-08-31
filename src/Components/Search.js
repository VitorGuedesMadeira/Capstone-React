import React, { useState } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

const Search = (props) => {
  const { search } = props;
  const [text, setText] = useState('');
  const onSearch = (q) => {
    setText(q);
    search(q);
  };

  return (
    <>
      <div className="search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="🔎Search Heros"
            onChange={(e) => { onSearch(e.target.value); }}
            value={text}
          />
        </form>
      </div>
    </>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
};

export default Search;
