import {useCallback, useEffect, useMemo} from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge, Position, Handle, MarkerType,
} from 'reactflow';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {tables, tableLinks, nodesLevely, nodesLevelx_} from "./tables";
import Box from "@mui/material/Box";

const handleStyle = {style: {background: '#e57373'}}

const edgeStyle = {
  animated: true,
  style: {stroke: "#e57373"},
  labelBgStyle: {fill: '#FFCC00', color: '#fff', fillOpacity: 0.7},
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "red"
  }
}
const rfStyle = {style: {backgroundColor: '#B8CEFF'}};
const snapGrid = [10, 10];


function TableNode({data}) {

  const showDetail = () => {
    alert(data.desc)
  }

  return (
    <>
      <Handle type="target" position={Position.Top} isConnectable={true} {...handleStyle}/>

      <Box sx={{width: 300, backgroundColor: "#90caf9"}}>
        <Typography variant="body2" color="text.secondary">
          {`${data.id}`}
          <br/>
          {`${data.catalog} ${data.instance}`}
          <br/>
          {`${data.database}.${data.table}`}
        </Typography>
        <Button size="small" onClick={showDetail}>查看描述</Button>
      </Box>

      <Handle type="source" position={Position.Bottom} isConnectable={true} {...handleStyle}/>
    </>
  );

}

const nodeTypes = {tableNode: TableNode};
const initialNodes = tables.map((value, index) => (
  {
    id: value.id,
    position: {x: nodesLevelx_.get(value.id) * 500, y: nodesLevely.get(value.id) * 300},
    data: value,
    type: "tableNode"
  }
))


const initialEdges = tableLinks.map((value, index) => (
  {id: value.src + "-" + value.tgt, source: value.src, target: value.tgt, ...edgeStyle}
))


const Flow = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
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
      snapToGrid={true}
      snapGrid={snapGrid}

      {...rfStyle}
    >
      <MiniMap/>
      <Controls/>
      <Background/>
    </ReactFlow>
  );
}

export default Flow;