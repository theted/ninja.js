import React from 'react';

const Page = (props) => {
  const { pageNumber, currentPageNumber, onChange } = props;

  const isActivePage = () => currentPageNumber === pageNumber;

  const renderedPageNumber = () => pageNumber + 1;

  const click = (event) => {
    event.preventDefault();
    onChange(pageNumber);
  };

  const className = `page-link${isActivePage()}` ? ' button-outline' : '';

  return (
    <li className="page-item mr-1">
      <button className={className} onClick={click}>{renderedPageNumber()}</button>
    </li>
  );
};

export default Page;
