import React, {memo, useCallback} from 'react';
import {Handle, Position} from 'reactflow';
import {tables} from "./tables";

function TableNode({tableDefinition}) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="source" position="top"/>
      <div> Hello World</div>
      <Handle type="target" position="bottom"/>
    </>
  );
}

export const tableNodes = tables.map((value, index) => (<TableNode tableDefinition={value}/>))

