import React from 'react';
import { Handle, Position } from 'reactflow';

const Exit = () => {
  return (
    <div>
      <Handle type='target' position={Position.Top} id='a' />
      <div className='text-updater-node'>Exit</div>
    </div>
  );
};

export default Exit;
