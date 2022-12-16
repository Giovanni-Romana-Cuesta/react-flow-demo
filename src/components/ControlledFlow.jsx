import React, { useState, useCallback } from 'react';
import {
  ReactFlow,
  applyEdgeChanges,
  applyNodeChanges,
  MiniMap,
  Background,
  Controls,
  addEdge,
} from 'reactflow';
import '../App.css';
import 'reactflow/dist/style.css';

import initialNodes from '../utils/nodes';
import initialEdges from '../utils/edges';

/**
/**By default React Flow doesn't do any internal state updates besides handling 
 * the viewport when you setup a controlled flow. As with an <input /> component you need 
 * to pass handlers to apply the changes that are triggered by React Flow 
 * to your nodes and edges. In order to select, drag and remove 
 * nodes and edges you need to implement an onNodesChange and an onEdgesChange handler*/

const ControlledFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // Handle nodes and edges changes: node init, node drag, node connect, edge select
  // The applyNodeChanges handler returns an updated array of nodes that is your new nodes array
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  // This fucntion handle new connections between nodes
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div className='container'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}>
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default ControlledFlow;
