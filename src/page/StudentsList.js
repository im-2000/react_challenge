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

  const sortByAlphabet = (a, b) => {
    return a.name.localeCompare(b.name);
  };

  const studentsSorted = [...getStudents].sort(sortByAlphabet);

  return (
    <div>
      <h1>Students List</h1>

      {studentsSorted.map((student) => (
        <div style={{ border: "2px solid white", marginTop: 30 }}>
          <img
            src={student.imgUrl}
            style={{ maxWidth: 200 }}
            alt={student.name}
          />

          <h3>name: {student.name}</h3>
          <p> birth: {student.born}</p>
          <p>house id: {student.houseId}</p>
          <p>house: {student.house.name}</p>
        </div>
      ))}
    </div>
  );
};

// the component is MOUNTED

export default StudentsList;
