import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Gravity from "./pages/animes/Gravity";
import Login from "./pages/login/Login";
import PersistentDrawerLeft from "./pages/sidebar/Sidebar";
import FontDisplay from "./pages/font/FontDisplay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersistentDrawerLeft/>}> </Route>
        <Route path="gravity" element={<Gravity/>}/>
        <Route path="login" element={<Login/>}> </Route>
        <Route path="sidebar" element={<PersistentDrawerLeft/>}/>
        <Route path="font" element={<FontDisplay/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
