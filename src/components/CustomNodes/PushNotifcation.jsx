import React from 'react';
import { Handle, Position } from 'reactflow';

const PushNotifcation = () => {
  return (
    <div>
      <Handle type='target' position={Position.Top} />
      <div className='text-updater-node'>Push Notification</div>
      <Handle type='source' position={Position.Bottom} />
    </div>
  );
};

export default PushNotifcation;
