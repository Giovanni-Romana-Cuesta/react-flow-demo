import React from 'react';
import { Handle, Position } from 'reactflow';


const Source = () => {
  return (
    <div>
      {' '}
      <Handle type='target' position={Position.Top} />
      <div className='text-updater-node'>
        <label htmlFor="source">Select source</label>
        <select name="source" id="source">
            <optgroup>
                <option value="siigo">Siigo</option>
                <option value="alegra">Alegra</option>
            </optgroup>
        </select>
      </div>
      <Handle type='source' position={Position.Bottom} />
    </div>
  );
};

export default Source;
