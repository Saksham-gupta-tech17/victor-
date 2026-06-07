import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'value', top: '50%' }
  ];

  return (
    <BaseNode id={id} label="Output" handles={handles}>
      <div>
        Name: <input type="text" defaultValue={data?.name || 'Output'} />
      </div>
      <div>
        Type: 
        <select defaultValue={data?.outputType || 'Text'}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};