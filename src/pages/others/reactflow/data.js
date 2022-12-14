const nodes = [
  {
    id: '1',
    type: 'input',
    data: {label: 'An input node'},
    position: {x: 0, y: 50},
    sourcePosition: 'right',
  },
  {
    id: '2',
    type: 'selectorNode',
    data: {onChange: onChange, color: initBgColor},
    style: {border: '1px solid #777', padding: 10},
    position: {x: 300, y: 50},
  },
  {
    id: '3',
    type: 'output',
    data: {label: 'Output A'},
    position: {x: 650, y: 25},
    targetPosition: 'left',
  },
  {
    id: '4',
    type: 'output',
    data: {label: 'Output B'},
    position: {x: 650, y: 100},
    targetPosition: 'left',
  },
]

const edges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: {stroke: '#fff'},
  },
  {
    id: 'e2a-3',
    source: '2',
    target: '3',
    sourceHandle: 'a',
    animated: true,
    style: {stroke: '#fff'},
  },
  {
    id: 'e2b-4',
    source: '2',
    target: '4',
    sourceHandle: 'b',
    animated: true,
    style: {stroke: '#fff'},
  },
]