import Home from "./components/pages/home/Home";

import Write from "./components/pages/Writepage/Write";
import Topbar from "./components/topbar/Topbar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Settings from "./components/pages/settings/Settings";


function App() {
  
  
  return (
    
    <Router>
    <Topbar/>
    <Settings />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
        
        
        <Route exact path="/Write" element={<Write/>}/>
          
    </Routes>
    </Router>
  );
}

export default App;
