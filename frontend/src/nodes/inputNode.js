import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'value', top: '50%' }
  ];

  return (
    <BaseNode id={id} label="Input" handles={handles}>
      <div>
        Name: <input type="text" defaultValue={data?.name || 'Input'} />
      </div>
      <div>
        Type: 
        <select defaultValue={data?.inputType || 'Text'}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};