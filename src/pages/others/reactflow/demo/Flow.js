import {useCallback, useEffect, useMemo} from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge, Position, Handle,
} from 'reactflow';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {tables} from "./tables";

const dragHandleStyle = {
  display: 'inline-block',
  width: 25,
  height: 25,
  backgroundColor: 'teal',
  marginLeft: 5,
  borderRadius: '50%',
};


function TableNode({data}) {

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{background: '#555'}}
        isConnectable={true}
      />

      <Card sx={{maxWidth: 345, backgroundColor: "yellow"}}>
        <CardContent>
          <Typography variant="body" color="text.secondary">
            {`CATALOG: ${data.catalog}`}
            <br/>
            {`INSTANCE ${data.instance}`}
            <br/>
            {`DATABASE ${data.database}`}
            <br/>
            {`TABLE ${data.table}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">查看详细信息</Button>
        </CardActions>
      </Card>

      <Handle
        type="source"
        position={Position.Bottom}
        style={{background: '#555'}}
        isConnectable={true}
      />
    </>
  );

}

const nodeTypes = {tableNode: TableNode};
const initialNodes = [
  {id: '1', position: {x: 0, y: 0}, data: tables[0]},
  {id: '2', position: {x: 0, y: 200}, data: tables[1]},
];

const initialEdges = [{id: 'e1-2', source: '1', target: '2'}];

const Flow = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    console.log("use effect")
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [])


  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      edges={edges}

      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      attributionPosition="bottom-left"
    >
      <MiniMap/>
      <Controls/>
      <Background/>
    </ReactFlow>
  );
}

export default Flow;