import "./index.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./MenuBar";
import AboutPage from "./AboutPage";
import SpeakersPage from "./SpeakersPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menubar" element={<MenuBar />} />
        <Route path="/about" element={<AboutPage />} />
           <Route path="/speakers" element={<SpeakersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
