import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Gravity from "./pages/animes/Gravity";
import Login from "./pages/login/Login";
import PersistentDrawerLeft from "./compontents/sidebar/Sidebar";
import FontDisplay from "./pages/others/font/FontDisplay";
import Sidebar from "./compontents/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Metadata from "./pages/metadata/Metadata";
import DataDependency from "./pages/datadependency/DataDependency";
import CustomNodeFlow from "./pages/others/reactflow/CustomNodeFlow";
import Flow from "./pages/others/reactflow/demo/Flow";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Metadata/>}> </Route>
          <Route path="/profile" element={<Profile/>}> </Route>
          <Route path="/dashboard" element={<Dashboard/>}> </Route>
          <Route path="/metadata" element={<Metadata/>}> </Route>
          <Route path="/data-dependency" element={<DataDependency/>}> </Route>
          <Route path="/flow" element={<Flow/>}> </Route>
          <Route path="/cflow" element={<CustomNodeFlow/>}> </Route>

          <Route path="/gravity" element={<Gravity/>}/>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/font" element={<FontDisplay/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
