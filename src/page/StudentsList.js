import { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
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

  return studentsSorted.length > 0 ? (
    <div>
      <h1>HOGWARTS STUDENTS</h1>

      {studentsSorted.map((student) => (
        <StudentCard {...student} />
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default StudentsList;
