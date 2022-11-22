import {createTheme} from "@mui/material";

export const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#42a5f5',
      },
      secondary: {
        main: '#c62828',
      },
    },
    spacing: 5,
  })

// palette 调色板 规定主次色系
// spacing margin padding的最小像素

export const baseMarginStyle = {mt: 1}
export const baseBorderStyle = {border: 1, borderRadius: "10px"}
export const basePaddingStyle = {p: 1}
export const baseMBP = {...baseMarginStyle, ...baseBorderStyle, ...basePaddingStyle}