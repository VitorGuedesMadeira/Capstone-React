/* eslint-disable */
import React, { useState } from 'react';
import './Search.css';

const Search = ({ search }) => {
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
            placeholder="Search Heros"
            onChange={(e) => { onSearch(e.target.value)}}
            value={text}
            autoFocus
          />
        </form>
      </div>
    </>
  );
};

export default Search;
