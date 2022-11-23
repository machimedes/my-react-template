import * as React from 'react';
import Box from '@mui/material/Box';


export default function FontDisplay() {

  return (
    <>
      <div className="font-link">
        将google font里的link添加到index.html 的header里
      </div>
      <Box sx={{fontFamily: "Rubik Distressed"}}>
        显然这个字体不支持中文
      </Box>
    </>
  );
}