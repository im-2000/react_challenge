import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudentsList from "./page/StudentsList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StudentsList />} />
        <Route path="/:id" element={<StudentsList />} />
      </Routes>
    </div>
  );
}

export default App;
