/* eslint-disable camelcase */
// TODO: make more general

import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ row: { name1, email, edit_path } }) => (
  <tr>
    <td>
      <a href={edit_path}>{name1}</a>
      <br />
      <small>{email}</small>
    </td>
  </tr>
);

Row.propTypes = {
  row: PropTypes.shape({
    name1: PropTypes.string,
    email: PropTypes.string,
    edit_path: PropTypes.string,
  }).isRequired,
};

export default Row;
