import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Gravity from "./pages/Gravity";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}> </Route>
        <Route path="gravity" element={<Gravity/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
