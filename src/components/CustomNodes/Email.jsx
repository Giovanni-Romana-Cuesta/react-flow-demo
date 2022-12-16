import React from 'react';
import { Handle, Position } from 'reactflow';

const Email = () => {
  return (
    <div>
      {' '}
      <Handle type='target' position={Position.Top} />
      <div className='text-updater-node'>Email</div>
      <Handle type='source' position={Position.Bottom} />
    </div>
  );
};

export default Email;
