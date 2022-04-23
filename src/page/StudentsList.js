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

  const readMoreButton = () => {
    return StudentCard;
  };

  return (
    <div>
      <h1>Students List</h1>

      {studentsSorted.map((student) => (
        <div style={{ border: "2px solid white", marginTop: 30 }}>
          <img
            src={student.imgUrl}
            style={{ maxWidth: 100 }}
            alt={student.name}
          />

          <p>{student.name}</p>
          <p>birth date: {student.born}</p>
          <p>house id: {student.houseId}</p>
          <p>house: {student.house.name}</p>
          <button onClick={readMoreButton}>read more</button>
        </div>
      ))}
    </div>
  );
};

// the component is MOUNTED

export default StudentsList;
