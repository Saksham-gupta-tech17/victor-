import React, { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);


  useEffect(() => {
    const regex = /\{\{(.*?)\}\}/g;
    const matches = [...text.matchAll(regex)];
    const newHandles = matches.map((match, index) => ({
      type: 'target',
      position: Position.Left,
      id: match[1],
      top: `${30 + (index * 20)}%`
    }));


    newHandles.push({ type: 'source', position: Position.Right, id: 'output', top: '50%' });
    setHandles(newHandles);
  }, [text]);

  return (
    <BaseNode id={id} label="Text" handles={handles}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '12px', color: '#94a3b8' }}>Text:</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            background: '#0a0a0c',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#fff',
            padding: '8px',
            width: '180px',
            minHeight: '60px',
            resize: 'none'
          }}
        />
      </div>
    </BaseNode>
  );
};