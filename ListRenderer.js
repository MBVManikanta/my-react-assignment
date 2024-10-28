import React from 'react';

const ListRenderer = ({ names }) => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default ListRenderer;
