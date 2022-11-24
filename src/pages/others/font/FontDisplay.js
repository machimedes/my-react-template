import * as React from 'react';
import Box from '@mui/material/Box';
import {createTheme} from "@mui/material";


export default function FontDisplay() {


  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

  return (
    <>
      <div className="font-link">
        将google font里的link添加到index.html 的header里
      </div>
      <Box sx={{fontFamily: "Rubik Distressed", color: "status"}}>
        显然这个字体不支持中文
      </Box>
    </>
  );
}