import React from 'react';
import { Handle, useReactFlow } from 'reactflow';

export const BaseNode = ({ id, label, children, handles = [] }) => {
  const { deleteElements } = useReactFlow();

  const handleDelete = () => {
    deleteElements({ nodes: [{ id }] });
  };

  return (
    <div style={{
      background: 'rgba(25, 25, 30, 0.85)',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
      minWidth: '220px',
      fontFamily: 'Inter, sans-serif',
      color: '#f8fafc',
      position: 'relative'
    }}>
      {/* Delete Button */}
      <button 
        onClick={handleDelete}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          color: '#94a3b8',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '0 5px'
        }}
      >
        ×
      </button>

      {/* Header */}
      <div style={{ 
        fontWeight: '700', 
        marginBottom: '15px', 
        fontSize: '14px', 
        color: '#94a3b8',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        paddingBottom: '10px' 
      }}>
        {label}
      </div>

      {/* Content */}
      <div style={{ fontSize: '14px' }}>
        {children}
      </div>

      {/* Handles with Labels */}
      {handles.map((h, i) => (
        <div key={i}>
          <Handle 
            type={h.type} 
            position={h.position} 
            id={`${id}-${h.id}`} 
            style={{ 
              top: h.top, 
              background: '#6366f1', 
              width: '10px', 
              height: '10px',
              border: '2px solid #0a0a0c'
            }} 
          />
          <div style={{ 
            position: 'absolute', 
            top: h.top, 
            [h.position === 'left' ? 'left' : 'right']: h.position === 'left' ? '-35px' : '-35px',
            fontSize: '9px',
            color: '#64748b',
            marginTop: '-6px'
          }}>
            {h.id}
          </div>
        </div>
      ))}
    </div>
  );
};