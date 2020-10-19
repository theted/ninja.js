import React from 'react';

const Table = ({ body, layout = 'test' }) => {
  return (
    <table>
      <tbody>{body}</tbody>
    </table>
  );
};

export default Table;
