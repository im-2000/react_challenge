import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import axios from "axios";

const StudentsList = () => {
  const [getStudents, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hp-assessment-api.herokuapp.com/hp/characters"
        );
        setStudents(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  console.log("students", getStudents);

  return (
    <div>
      <h1>Students List</h1>

      {getStudents.map((student) => (
        <div style={{ border: "2px solid white", marginTop: 30 }}>
          <img src={student.imgUrl} style={{ maxWidth: 200 }} />
          <h3>{student.name}</h3>
        </div>
      ))}
    </div>
  );
};

// the component is MOUNTED

export default StudentsList;
