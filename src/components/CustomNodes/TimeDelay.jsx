import React from 'react';
import { Handle, Position } from 'reactflow';

const TimeDelay = () => {
  return (
    <div>
      <Handle type='target' position={Position.Top} id='a' />
      <div className='text-updater-node'>Time delay</div>
      <Handle type='source' position={Position.Bottom} id='b' />
    </div>
  );
};

export default TimeDelay;
