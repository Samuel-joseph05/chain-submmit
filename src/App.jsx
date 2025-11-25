import "./index.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./MenuBar";
import AboutPage from "./AboutPage";
import SpeakersPage from "./SpeakersPage";
import Schedule from "./Schedule";
import Sponsors from "./Sponsors";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menubar" element={<MenuBar />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/schedule" element={<Schedule />} />
         <Route path="/sponsors" element={<Sponsors/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
