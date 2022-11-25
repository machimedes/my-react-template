import React, {useState, useEffect, useCallback} from 'react';
import ReactFlow, {useNodesState, useEdgesState, addEdge, MiniMap, Controls} from 'reactflow';
import 'reactflow/dist/style.css';

import ColorSelectorNode from './ColorSelectorNode';

import './index.css';

const initBgColor = '#1A192B';

const connectionLineStyle = {};
const snapGrid = [10, 10];
const nodeTypes = {
  selectorNode: ColorSelectorNode,
};

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);


  const nodes1 = [
    {
      id: '1',
      data: {label: 'An input node1'},
      position: {x: 0, y: 50},
      sourcePosition: 'right',
    },
    {
      id: '2',
      data: {label: 'An input node2'},
      position: {x: 300, y: 50},
      targetPosition: 'left',

    }
  ]
  const edges1 = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      animated: false,
      style: {stroke: '#fff'},
    },
  ]


  useEffect(() => {
    console.log("use effect")
    setNodes(nodes1);

    setEdges(edges1);
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultZoom={0.5}
      fitView
      attributionPosition="bottom-left"
    >
      <MiniMap/>
      <Controls/>
    </ReactFlow>
  );
};

export default CustomNodeFlow;
