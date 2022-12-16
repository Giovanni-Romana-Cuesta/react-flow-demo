import React from 'react';

const BuildNavigation = ({onAddNode}) => {
  return (
    <div className='build-nav'>
      <span>Use this components for build your workflow</span>
      <div className='build-component'>
        <span>Trigger</span>
        <button onClick={() => onAddNode('SelectUpdater')}>Add trigger block</button>
      </div>
      <div className='build-component'>
        <span>Message</span>
        <button onClick={onAddNode('SelectUpdater')}>Add message block</button>
      </div>
      <div className='build-component'>
        <span>Delays</span>
        <button onClick={onAddNode('SelectUpdater')}>Add delay block</button>
      </div>
    </div>
  );
};

export default BuildNavigation;
