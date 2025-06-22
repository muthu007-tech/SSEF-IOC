import React from 'react';

const ConceptModal = ({ concept, onClose }) => {
  if (!concept) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-header">
          <img src={concept.icon} alt={concept.title} className="modal-icon" />
          <h2>{concept.title}</h2>
        </div>
        <div className="modal-body">
          <p>{concept.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ConceptModal;