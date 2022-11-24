import {useState} from "react";
import TextField from "@mui/material/TextField";

export default function ValueTextField(props) {
  const [value, setValue] = useState(props.value);
  return (
    <TextField {...props} value={value} onChange={(event) => setValue(event.target.value)}/>
  );
}