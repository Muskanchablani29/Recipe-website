import React from 'react';
import './SmartChef.css';

const Message = ({ type, content }) => (
  <div className={`message ${type}`}>
    {content}
  </div>
);

export default React.memo(Message);
