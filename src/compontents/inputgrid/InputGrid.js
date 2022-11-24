import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import {Box, Grid, Stack} from "@mui/material";
import ValueTextField from "../valuetestfield/ValueTextField";

export default function InputGrid(input) {
  const ids = [0, 1, 2]
  return (
    <Box>
      {ids
        .map((id, index) =>
          <Stack key={index} direction="row" spacing={2} m={2}>
            <ValueTextField label="id" name={id + "id"} value={input["i" + id].id}
                            key={input["i" + id].id + id + "id"}/>

            <ValueTextField label="mass" name={id + "mass"} value={input["i" + id].mass}
                            key={input["i" + id].mass + id + "mass"}/>

            <ValueTextField label="x" name={id + "ox"} value={input["i" + id].ox}
                            key={input["i" + id].mass + id + "x"}/>

            <ValueTextField label="y" name={id + "oy"} value={input["i" + id].oy}
                            key={input["i" + id].oy + id + "y"}/>

            <ValueTextField label="vx" name={id + "ovx"} value={input["i" + id].ovx}
                            key={input["i" + id].ovx + id + "vx"}/>

            <ValueTextField label="vy" name={id + "ovy"} value={input["i" + id].ovy}
                            key={input["i" + id].ovy + id + "vy"}/>
          </Stack>
        )}
    </Box>
  );
}