import React from 'react';

import Classes from '../Paginator.module.css';

const simple = (props) => {
  let paginator = [];

  for (let i = 1; i <= props.pages; i++) {
    let active = props.activePage === i ? 'Active' : '';

    paginator.push(<div key={ i } className={ Classes.Page }><span onClick={ () => props.goToPage(i) } className={ Classes[active] }>{ i }</span></div>);
  }

  return (
    <div>
      { paginator }
    </div>
  );
};

export default simple;
