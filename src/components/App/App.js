import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../DataTable';
import './App.css';

const App = ({ rows }) => {
  return (
    <div className="container mt-3">
      <DataTable rows={rows} locale="da" rowsPerPage={5} />
    </div>
  );
};

App.propTypes = {
  rows: PropTypes.shape().isRequired,
};

export default App;
