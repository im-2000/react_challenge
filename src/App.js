import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import StudentsList from "./page/StudentsList";
import StudentDetailPage from "./page/StudentDetailPage";
import HouseDetailPage from "./page/HouseDetailPage";

function App() {
  return (
    <div className="App">
      <div className="AppNav">
        <NavLink className="NavElement" end to="/">
          Home
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<StudentsList />} />
        <Route path="/details/:student_id" element={<StudentDetailPage />} />
        <Route path="/house/details/:house_id" element={<HouseDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
