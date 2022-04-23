import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudentsList from "./page/StudentsList";
import StudentDetailPage from "./page/StudentDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StudentsList />} />
        <Route path="/details/:student_name" element={<StudentDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
