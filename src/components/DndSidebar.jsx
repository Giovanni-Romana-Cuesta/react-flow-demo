import React from 'react';

const DndSidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className='description'>
        You can drag these nodes to the pane on the right and build your workflow
      </div>
      <div>
        <span className='subtitle'>Add trigger</span>
        <div className='dndnode' onDragStart={(event) => onDragStart(event, 'trigger')} draggable>
          Trigger
        </div>
      </div>
      <div>
        <span className='subtitle'>Data</span>
        <div className='dndnode' onDragStart={(event) => onDragStart(event, 'source')} draggable>
          Source
        </div>
      </div>
      <div>
        <span className='subtitle'>Messages</span>
        <div className='dndnode' onDragStart={(event) => onDragStart(event, 'email')} draggable>
          Email
        </div>
        <div
          className='dndnode'
          onDragStart={(event) => onDragStart(event, 'pushNotification')}
          draggable>
          Push Notification
        </div>
      </div>
      <div>
        <span className='subtitle'>Delays</span>
        <div className='dndnode' onDragStart={(event) => onDragStart(event, 'timeDelay')} draggable>
          Time delay
        </div>
      </div>
      <div>
        <span className='subtitle'>Flow control</span>
        <div className='dndnode' onDragStart={(event) => onDragStart(event, 'exit')} draggable>
          Exit
        </div>
      </div>
    </aside>
  );
};

export default DndSidebar;
