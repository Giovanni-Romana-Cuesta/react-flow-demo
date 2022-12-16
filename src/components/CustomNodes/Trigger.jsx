import React from 'react';
import { Handle, Position } from 'reactflow';

const Trigger = () => {
  return (
    <div onClick={() => console.log('open modal')}>
      <Handle type='target' position={Position.Top} id='a' />
      <div className='text-updater-node'>Trigger</div>
      <Handle type='source' position={Position.Bottom} id='b' />
    </div>
  );
};

export default Trigger;
