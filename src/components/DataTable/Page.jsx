import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  const isActivePage = () => currentPageNumber === pageNumber;

  const renderedPageNumber = () => pageNumber + 1;

  const click = (event) => {
    event.preventDefault();
    onChange(pageNumber);
  };

  const className = `page-link${isActivePage()}` ? ' button-outline' : '';

  return (
    <li className="page-item mr-1">
      <button className={className} onClick={click} type="button">{renderedPageNumber()}</button>
    </li>
  );
};

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  currentPageNumber: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Page;
