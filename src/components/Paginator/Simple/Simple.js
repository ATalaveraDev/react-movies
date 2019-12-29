import React from 'react';

import Classes from '../Paginator.module.css';

const simple = (props) => {
  let paginator = [];

  for (let i = 1; i <= props.pages; i++) {
    paginator.push(<div className={ Classes.Page }><span>{ i }</span></div>);
  }

  return (
    <div>
      { paginator }
    </div>
  );
};

export default simple;
