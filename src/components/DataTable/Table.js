import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ body }) => {
  return (
    <table>
      <tbody>{body}</tbody>
    </table>
  );
};

Table.propTypes = {
  body: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Table;
