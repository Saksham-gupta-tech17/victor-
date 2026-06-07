import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'system', top: '33%' },
    { type: 'target', position: Position.Left, id: 'prompt', top: '66%' },
    { type: 'source', position: Position.Right, id: 'response', top: '50%' }
  ];

  return (
    <BaseNode id={id} label="LLM" handles={handles}>
      <div>This is an LLM.</div>
    </BaseNode>
  );
};