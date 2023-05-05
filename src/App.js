import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import MainSection from "./component/MainSection";
import LoadSheet from "./component/LoadSheet";
import NewSheet from "./component/NewSheet";
import PrintSheet from "./component/PrintSheet";
import SaveSheet from "./component/SaveSheet";
import Bassline from "./component/Bassline";
import Chords from "./component/Chords";
import Melody from "./component/Melody";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/newsheet" element={<NewSheet />} />
          <Route path="/savesheet" element={<SaveSheet />} />
          <Route path="/loadsheet" element={<LoadSheet />} />
          <Route path="/printsheet" element={<PrintSheet />} />
          <Route path="/bassline" element={<Bassline />} />
          <Route path="/chords" element={<Chords />} />
          <Route path="/melody" element={<Melody />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
