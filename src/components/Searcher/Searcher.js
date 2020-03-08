import React from 'react';

import Classes from './Seacher.module.css';

const searcher  = (props) => (
    <div className={ Classes.SearcherContainer }>
      <input className={ Classes.Searcher } type="text" placeholder="Search by title" onKeyUp={ props.keyUpHandler }/>
    </div>
);

export default searcher;
