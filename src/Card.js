import React from 'react';
import './KanbanBoard.css';

const Card = ({ title, id, tag, priority, userName, status }) => (
  <div className="card">
    <div className="card-content">
      <p className="card-id">{id} <br /></p> 
      <h4 className="card-title "><b><span className="bullet-icon">•</span>{title}</b><br /></h4>
      <div className="card-tag">
        <span >•</span> {tag}
      </div>
      <p className="card-id">{priority} {userName} {status} <br /></p> 
      
    </div>
  </div>
);

export default Card;
