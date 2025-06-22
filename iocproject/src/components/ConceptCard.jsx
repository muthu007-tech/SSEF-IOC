import React from 'react';
import '../styles/card.css';

const ConceptCard = ({ concept, onConceptClick }) => {
  return (
    <div 
      className="concept-card" 
      onClick={() => onConceptClick(concept)}
    >
      <div className="card-background"></div>
      <div className="card-content">
        <div className="icon-container">
          <img 
            src={concept.icon} 
            alt={concept.title} 
            className="concept-icon" 
          />
          <div className="icon-pulse"></div>
        </div>
        <div className="text-content">
          <h3>{concept.title}</h3>
          <span className="view-details">
            <span className="arrow">→</span>
            <span className="text">Explore Concept</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConceptCard;
