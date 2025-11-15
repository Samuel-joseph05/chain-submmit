import "./index.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MenuBar from "./MenuBar";

function App() {
  return (
     <Router>
      <Routes>
         <Route path="/" element={<HomePage/>} />
        <Route path="/menubar" element={<MenuBar/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
