import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ row }) => {
  return (
    <tr>
      <td>
        <a href={row.edit_path}>
          {row.name1}
        </a>
        <br />
        <small>{row.email}</small>
      </td>
    </tr>
  );
};

Row.propTypes = {
  row: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Row;
