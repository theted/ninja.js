import React from 'react';
import PropTypes from 'prop-types';

import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';

class DataTable extends React.Component {
  
  constructor(props) {
    super(props)
    const { rows } = props
    this.state = {
      rows,
      currentPageNumber: 0,
      totalNumberOfPages: this.calculateTotalNumberOfPages(rows),
    }
  }

  search = event => {
    const { rows } = this.props;
    const text = event.target.value;
    let rowsFound = rows;

    if (text) {
      rowsFound = rows.filter((row) => row.name1.toLowerCase().search(text.toLowerCase()) > -1
         || (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1));
    }

    this.setState({
      rows: rowsFound,
      currentPageNumber: 0,
      totalNumberOfPages: this.calculateTotalNumberOfPages(rowsFound),
    });
  }

  changeToPageNumber = pageNumber => {
    this.setState({ currentPageNumber: pageNumber });
  }

  calculateTotalNumberOfPages(rows) {
    const { rowsPerPage } = this.props;
    if (rowsPerPage === 0 || !rows) return 0;
    return Math.ceil(rows.length / rowsPerPage);
  }
 
  rowsInPageNumber(pageNumber) {
    const { rowsPerPage } = this.props;
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  }

  render() {
    const { rows, currentPageNumber, totalNumberOfPages } = this.state;

    if (!rows) return null;

    const rowsToRender = rows
      .map((row) => <Row key={row.per_id} row={row} />)
      .slice(...this.rowsInPageNumber(currentPageNumber));

    return (
      <div>
        <Search onSearch={this.search} />
        <table>
          <tbody>
            { rowsToRender }
          </tbody>
        </table>
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={this.changeToPageNumber}
        />
      </div>
    );
  }
}

DataTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  rowsPerPage: PropTypes.number,
}

DataTable.defaultProps = {
  rowsPerPage: 40,
}

export default DataTable;
