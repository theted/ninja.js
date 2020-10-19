import React from 'react';
import PropTypes from 'prop-types';

import Page from './Page';

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pages = Array.from(Array(totalNumberOfPages).keys()).map((pageNumber) => (
    <Page
      key={pageNumber}
      currentPageNumber={currentPageNumber}
      pageNumber={pageNumber}
      onChange={onChange}
    />
  ));

  if (pages.length <= 1) {
    return null;
  }
  return <ul className="pagination">{pages}</ul>;
};

Pagination.propTypes = {
  currentPageNumber: PropTypes.number,
  totalNumberOfPages: PropTypes.number,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  currentPageNumber: 0,
  totalNumberOfPages: 0,
  onChange: () => {},
};

export default Pagination;
