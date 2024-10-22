// src/ListCard.js

import React from 'react';

const ListCard = ({ data }) => {
  return (
    <div style={{ border: '1px solid #eee', padding: '10px', backgroundColor: '#f9f9f9', width: '30%' }}>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      {/* Additional information can be added here if needed */}
    </div>
  );
};

export default ListCard;
