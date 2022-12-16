import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function TextUpdaterNode() {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <div className='text-updater-node'>
        <label htmlFor='text'>Text:</label>
        <input id='text' name='text' onChange={onChange} />
      </div>
      <Handle type='source' position={Position.Bottom} id='a' />
    </>
  );
}

export default TextUpdaterNode