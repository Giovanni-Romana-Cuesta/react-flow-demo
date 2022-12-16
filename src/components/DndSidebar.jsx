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
        <span className='subtitle'>Messages</span>
        <div className='dndnode' onDragStart={(event) => onDragStart(event, 'trigger')} draggable>
          Email
        </div>
        <div className='dndnode' onDragStart={(event) => onDragStart(event, 'trigger')} draggable>
          Push Notification
        </div>
        <div className='dndnode' onDragStart={(event) => onDragStart(event, 'trigger')} draggable>
          SlackMessage
        </div>
      </div>
      <div>
        <span className='subtitle'>Delays</span>
        <div className='dndnode' onDragStart={(event) => onDragStart(event, 'trigger')} draggable>
          Wait Until
        </div>
        <div className='dndnode' onDragStart={(event) => onDragStart(event, 'trigger')} draggable>
          Time delay
        </div>
      </div>
      <button>Save workflow</button>
    </aside>
  );
};

export default DndSidebar;
