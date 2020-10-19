import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Table from './Table';
import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';

const containsText = (string, substring) => {
  return string.toLowerCase().includes(substring.toLowerCase());
};

const DataTable = ({ rows, rowsPerPage }) => {
  const [displayRows, setRows] = useState(rows);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);

  const calculateTotalNumberOfPages = () => {
    return displayRows ? Math.ceil(displayRows.length / rowsPerPage) : 0;
  };

  useEffect(() => {
    setTotalNumberOfPages(calculateTotalNumberOfPages(displayRows));
  }, [displayRows]);

  const search = (event) => {
    const text = event.target.value;

    if (text) {
      const rowsFound = rows.filter(
        ({ name1, email }) => containsText(name1, text) || containsText(email, text),
      );

      setRows(rowsFound);
      setCurrentPageNumber(0);
    } else {
      setRows(rows);
    }
  };

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  };

  if (!displayRows) return null;

  const rowsToRender = displayRows
    .map((row) => <Row key={row.per_id} row={row} />)
    .slice(...rowsInPageNumber(currentPageNumber));

  return (
    <div>
      <Search onSearch={search} />
      <Table body={rowsToRender} />
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={setCurrentPageNumber}
      />
    </div>
  );
};

DataTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape()),
  rowsPerPage: PropTypes.number,
};

DataTable.defaultProps = {
  rows: [],
  rowsPerPage: 5,
};

export default DataTable;
