import React from 'react';

import Classes from '../Paginator.module.css';

const complex = (props) => {
  let paginator = [
    <div key={1} className={ Classes.Page }><span onClick={ () => props.goToPage(props.activePage - 1) }>{ '<' }</span></div>,
    <div key={2} className={ Classes.Page }><span onClick={ () => props.goToPage(1) } className={ Classes[props.activePage === 1 ? 'Active' : ''] }>1</span></div>,
    <div key={3} className={ Classes.Page }><span>...</span></div>
  ];

  if (props.activePage !== 1 && props.activePage !== props.pages) {
    paginator.push(
      <div key={4} className={ Classes.Page }><span className={ Classes.Active }>{ props.activePage }</span></div>,
      <div key={5} className={ Classes.Page }><span>...</span></div>
    );
  }

  paginator.push(
    <div key={6} className={ Classes.Page }><span onClick={ () => props.goToPage(props.pages) } className={ Classes[props.activePage === props.pages ? 'Active' : ''] }>{ props.pages }</span></div>,
    <div key={7} className={ Classes.Page }><span onClick={ () => props.goToPage(props.activePage + 1) }>{ '>' }</span></div>
  );

  return (
    <div className={ Classes.AlignRight }>
      { paginator }
    </div>
  );
};

export default complex;
