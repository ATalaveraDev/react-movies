import React from 'react';

import Classes from './Results.module.css';

const results = (props) => {
  const list = props.movies.map(movie => <p key={ movie.id }>{ movie.title }</p>);

  return (
    <div className={ Classes.Results }>{ list }</div>
  );
};

export default results;
